import { prisma } from "@/lib/prisma";
import { getUserSession } from "@/lib/session";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const user = await getUserSession();
    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized: User must be logged in",
        },
        { status: 401 }
      );
    }

    const searchParams = new URLSearchParams(req.url);

    // pagination
    const page = parseInt(searchParams.get("page") as string) || 1;
    const limit = parseInt(searchParams.get("limit") as string) || 10;
    const order = (searchParams.get("order") as string) || "desc";
    const orderBy = (searchParams.get("orderBy") as string) || "createdAt";
    const offset = (page - 1) * limit;

    const interviews = await prisma.interview.findMany({
      where: {
        userId: user.id,
      },
      orderBy: {
        [orderBy]: order,
      },
      skip: offset,
      take: limit,
      include: {
        feedbacks: {
          select: {
            totalRating: true,
          },
        },
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Interview deleted successfully",
        data: interviews,
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
