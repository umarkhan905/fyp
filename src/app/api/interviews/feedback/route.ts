import { generateFeedback } from "@/actions/ai-actions";
import { prisma } from "@/lib/prisma";
import { getUserSession } from "@/lib/session";
import { SavedMessage, FeedbackResponse } from "@/types";
import { NextRequest, NextResponse } from "next/server";

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
      participantId: string;
      startedAt: string;
      timeTaken: string;
    };

    const endTime = new Date();

    const participant = await prisma.interviewParticipant.update({
      where: {
        id: body.participantId,
      },
      data: {
        completedAt: endTime,
        timeTaken: body.timeTaken,
        status: "COMPLETED",
      },
    });

    if (!participant) {
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
        interviewParticipantId: body.participantId,
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
