import { getUserSession } from "@/lib/session";
import { NextRequest, NextResponse } from "next/server";
import { generateMockInterviewQuestions } from "@/actions/ai-actions";
import { prisma } from "@/lib/prisma";
import { IQuestion } from "@/types";
import { MockInterviewSchemaType } from "@/schemas/interviews/mock-interview";
import {
  ExperienceIn,
  InterviewDifficulty,
  InterviewType,
} from "@/generated/prisma";
export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as MockInterviewSchemaType;
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

    // generate questions
    const result = await generateMockInterviewQuestions(body);
    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: result.message,
        },
        { status: 500 }
      );
    }

    // validate till 20 days
    const validateTill = new Date();
    validateTill.setDate(validateTill.getDate() + 20);

    const interview = await prisma.interview.create({
      data: {
        type: body.type as InterviewType,
        difficulty: body.difficulty as InterviewDifficulty,
        experience: parseInt(body.experience),
        experienceIn: body.experienceIn as ExperienceIn,
        role: body.role,
        description: "",
        keywords: "",
        topic: body.topic,
        createdById: user.id as string,
        createdByRole: "INTERVIEWEE",
        validateTill,
        status: "CREATED",
        category: "MOCK",
        group: "AI_BASED",
        noOfQuestions: result?.data?.length,
        questions: {
          createMany: {
            data: result.data as IQuestion[],
          },
        },
      },
    });

    if (!interview) {
      return NextResponse.json(
        {
          success: false,
          message: "Something went wrong while creating interview",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Interview created successfully",
        data: {
          id: interview.id,
          noOfQuestions: interview.noOfQuestions,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.log("Error in creating mock interview: ", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
