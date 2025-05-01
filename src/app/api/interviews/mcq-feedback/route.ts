import { generateMcqFeedback } from "@/actions/ai-actions";
import { prisma } from "@/lib/prisma";
import { getUserSession } from "@/lib/session";
import { FeedbackResponse } from "@/types";
import { NextResponse } from "next/server";

// POST submission
export async function POST(request: Request) {
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

    const {
      interviewId,
      participantId,
      wrongAnswers,
      correctAnswers,
      accuracy,
      timeTaken,
      questions,
    } = await request.json();

    const feedback = await generateMcqFeedback(
      correctAnswers,
      wrongAnswers,
      accuracy,
      timeTaken,
      questions
    );
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

    const participant = await prisma.interviewParticipant.update({
      where: { id: participantId },
      data: { completedAt: new Date(), status: "COMPLETED" },
    });

    if (!participant) {
      return NextResponse.json(
        { success: false, message: "Participant not found" },
        { status: 404 }
      );
    }

    const feedbackDb = await prisma.feedback.create({
      data: {
        userId: user.id as string,
        interviewId: interviewId,
        totalRating: feedbackResponse.totalRating,
        summary: feedbackResponse.summary,
        strengths: feedbackResponse.strengths,
        weaknesses: feedbackResponse.weaknesses,
        improvements: feedbackResponse.improvements,
        assessment: feedbackResponse.assessment,
        recommendedForJob: feedbackResponse.recommendedForJob,
        interviewParticipantId: participantId,
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
    console.error("Error fetching feedback data-mcq:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch feedback data" }),
      { status: 500 }
    );
  }
}
