import { prisma } from "@/lib/prisma";
import { getUserSession } from "@/lib/session";
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

    const interview = await prisma.interview.create({
      data: {
        createdById: user.id as string,
        type,
        role,
        description,
        duration: parseInt(duration),
        difficulty,
        experience: parseInt(experience),
        experienceIn,
        keywords,
        companyName,
        companyLogo,
        assessmentType,
        noOfQuestions: questions.length,
        questions: {
          createMany: {
            data: questions,
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
