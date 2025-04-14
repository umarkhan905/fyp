import { getUserByEmail } from "@/actions/user-actions";
import { BASE_ADDRESS } from "@/constants";
import { ResetPasswordEmail } from "@/emails/reset-password-email";
import { prisma } from "@/lib/prisma";
import { ForgotPasswordSchema } from "@/schemas/forgot-password";
import { sendEmail } from "@/utils/send-email";
import { render } from "@react-email/components";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuid } from "uuid";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // validate body
    const result = ForgotPasswordSchema.safeParse(body);
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
    const user = await getUserByEmail(data.email);
    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "User not found",
        },
        { status: 404 }
      );
    }

    const resetPasswordToken = uuid();
    const resetPasswordTokenExpiresAt = new Date();
    resetPasswordTokenExpiresAt.setMinutes(
      resetPasswordTokenExpiresAt.getMinutes() + 15
    );

    await prisma.user.update({
      where: { id: user.id },
      data: {
        resetPasswordToken,
        resetPasswordTokenExpiresAt,
      },
    });

    // send reset password email
    const emialHtml = await render(
      ResetPasswordEmail({
        userName: user.firstName as string,
        verificationUrl: `${BASE_ADDRESS}/reset-password/${resetPasswordToken}`,
      })
    );

    const emailResponse = await sendEmail(
      data.email,
      "MockByte - Reset your password",
      emialHtml
    );

    if (!emailResponse.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Something went wrong while sending email",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Reset Password email sent successfully. Please check you inbox!",
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
