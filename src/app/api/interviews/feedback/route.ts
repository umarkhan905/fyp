import { generateFeedback } from "@/actions/ai-actions";
import { prisma } from "@/lib/prisma";
import { getUserSession } from "@/lib/session";
import { SavedMessage } from "@/types";
import { NextRequest, NextResponse } from "next/server";

type RatingItem = {
  name: string;
  score: number;
  comment: string;
};

type FeedbackResponse = {
  totalRating: number;
  summary: string;
  strengths: string;
  weaknesses: string;
  improvements: string;
  assessment: string;
  recommendedForJob: boolean;
  rating: RatingItem[];
};

const getTimeTaken = (startTime: Date, endTime: Date) => {
  const timeDiff = endTime?.getTime() - startTime?.getTime();
  const hours = Math.floor(timeDiff / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
  return `${hours}h ${minutes}m`;
};

export async function POST(request: NextRequest) {
  try {
    const user = await getUserSession();
    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized: User not logged in",
        },
        { status: 401 }
      );
    }

    const body = (await request.json()) as {
      conversation: SavedMessage[];
      interviewId: string;
      interviewParticipantId: string;
      startedAt: string;
    };

    const endTime = new Date();

    const interviewParticipant = await prisma.interviewParticipant.update({
      where: {
        id: body.interviewParticipantId,
      },
      data: {
        completedAt: endTime,
        timeTaken: getTimeTaken(new Date(body.startedAt), endTime),
        status: "COMPLETED",
      },
    });

    if (!interviewParticipant) {
      return NextResponse.json(
        {
          success: false,
          message: "Participant not found",
        },
        { status: 400 }
      );
    }

    const feedback = await generateFeedback(body.conversation);
    if (!feedback.success) {
      return NextResponse.json(
        {
          success: false,
          message: feedback.message,
        },
        { status: 500 }
      );
    }
    const feedbackResponse = JSON.parse(
      feedback.data as string
    ) as FeedbackResponse;

    const feedbackDb = await prisma.feedback.create({
      data: {
        userId: user.id as string,
        interviewId: body.interviewId,
        totalRating: feedbackResponse.totalRating,
        summary: feedbackResponse.summary,
        strengths: feedbackResponse.strengths,
        weaknesses: feedbackResponse.weaknesses,
        improvements: feedbackResponse.improvements,
        assessment: feedbackResponse.assessment,
        recommendedForJob: feedbackResponse.recommendedForJob,
        interviewParticipantId: interviewParticipant.id,
        rating: {
          createMany: {
            data: feedbackResponse.rating,
          },
        },
      },
    });

    return NextResponse.json({
      success: feedback.success,
      message: feedback.message,
      data: { id: feedbackDb.id },
    });
  } catch (error) {
    console.error("Error fetching feedback data:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch feedback data" }),
      { status: 500 }
    );
  }
}
