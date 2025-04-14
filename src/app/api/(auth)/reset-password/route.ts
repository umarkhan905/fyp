import { prisma } from "@/lib/prisma";
import { ResetPasswordSchema } from "@/schemas/reset-password";
import { hashPassword } from "@/utils/hash-password";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();

    // validate body
    const result = ResetPasswordSchema.safeParse(body);
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
    if (data.password !== data.confirmPassword) {
      return NextResponse.json(
        {
          success: false,
          message: "Password and confirm password do not match",
        },
        { status: 400 }
      );
    }

    const user = await prisma.user.findFirst({
      where: {
        resetPasswordToken: data.token,
      },
    });
    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid token provided",
        },
        { status: 404 }
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

    const hashedPassword = await hashPassword(data.password);

    await prisma.user.update({
      where: { id: user.id },
      data: {
        resetPasswordToken: null,
        resetPasswordTokenExpiresAt: null,
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Password reset successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error in forgot-password route: ", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
