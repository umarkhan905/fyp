"use server";

import { emailVerificationCode } from "@/utils/verification-code";
import { getUserById } from "./user-actions";
import { prisma } from "@/lib/prisma";
import { render } from "@react-email/components";
import { EmailVerification } from "@/emails/email-verification";
import { BASE_ADDRESS } from "@/constants";
import { sendEmail } from "@/utils/send-email";

const resendVerificationEmail = async (id: string) => {
  try {
    const user = await getUserById(id);
    if (!user) {
      return {
        success: false,
        message: "No user found",
      };
    }

    // generate new verification token
    const verificationToken = emailVerificationCode();
    const verificationTokenExpiresAt = new Date();
    verificationTokenExpiresAt.setHours(
      verificationTokenExpiresAt.getHours() + 1
    );

    await prisma.user.update({
      where: { id: user.id },
      data: {
        verificationToken,
        verificationTokenExpiresAt,
      },
    });

    // send Email
    const emialHtml = await render(
      EmailVerification({
        userName: user.firstName as string,
        verificationUrl: `${BASE_ADDRESS}/verify-email/${user?.id as string}?code=${verificationToken}`,
        verificationCode: verificationToken,
      })
    );

    const emailResponse = await sendEmail(
      user.email,
      "MockByte - Verify your email",
      emialHtml
    );

    if (!emailResponse.success) {
      return {
        success: false,
        message: "Something went wrong while sending email",
      };
    }

    return {
      success: true,
      message:
        "New verification code sent successfully. Please check you inbox!",
    };
  } catch (error) {
    console.log("Something went wrong while re-sending email: ", error);
    return {
      success: false,
      message: "Internal server error",
    };
  }
};

export { resendVerificationEmail };
