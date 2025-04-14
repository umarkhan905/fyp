import { getUserById } from "@/actions/user-actions";
import { prisma } from "@/lib/prisma";
import { VerificationTokenSchema } from "@/schemas/verification-token";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // validate body
    const result = VerificationTokenSchema.safeParse(body);
    if (!result.success) {
      const error = result.error.format()._errors.join(", ");
      return NextResponse.json(
        {
          success: false,
          message: error || "Invalid Fields",
        },
        { status: 400 }
      );
    }

    const data = result.data;
    const user = await getUserById(data.identifier);
    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "User not found",
        },
        { status: 404 }
      );
    }

    if (user.verificationToken !== data.token) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid token provided",
        },
        { status: 400 }
      );
    }

    if (
      user.verificationTokenExpiresAt &&
      user.verificationTokenExpiresAt < new Date()
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Verification token is expired",
        },
        { status: 400 }
      );
    }

    await prisma.user.update({
      where: { id: user.id },
      data: {
        verified: true,
        verifiedAt: new Date(),
        verificationToken: null,
        verificationTokenExpiresAt: null,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Email verified successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error in verifying-email route: ", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
