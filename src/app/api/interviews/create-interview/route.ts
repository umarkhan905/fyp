import { prisma } from "@/lib/prisma";
import { getUserSession } from "@/lib/session";
import { IQuestion } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
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
      type,
      role,
      description,
      duration,
      difficulty,
      experience,
      experienceIn,
      keywords,
      questions,
      companyName,
      companyLogo,
      assessmentType,
    } = body;

    // validate till 20 days
    const validateTill = new Date();
    validateTill.setDate(validateTill.getDate() + 20);

    const interview = await prisma.interview.create({
      data: {
        createdById: user.id as string,
        type,
        role,
        description,
        duration: (duration && parseInt(duration)) || 0,
        difficulty,
        experience: parseInt(experience),
        experienceIn,
        keywords,
        companyName,
        companyLogo,
        assessmentType,
        noOfQuestions: questions.length,
        status: "CREATED",
        validateTill,
        category: "JOB",
        questions: {
          create: questions.map((q: IQuestion) => ({
            question: q.question,
            questionType: q.questionType,
            codeEditorRequired: q.codeEditorRequired,
            answer: q.answer,
            explanation: q.explanation,
            options: q.options,
          })),
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
          duration: interview.duration,
          noOfQuestions: interview.noOfQuestions,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.log("Error in create-interview route: ", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
