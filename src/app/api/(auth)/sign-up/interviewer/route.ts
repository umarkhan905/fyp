import { createUser, getUserByEmail } from "@/actions/user-actions";
import { prisma } from "@/lib/prisma";
import { hashPassword } from "@/utils/hash-password";
import { emailVerificationCode } from "@/utils/verification-code";
import { NextRequest, NextResponse } from "next/server";
import { render } from "@react-email/components";
import { EmailVerification } from "@/emails/email-verification";
import { sendEmail } from "@/utils/send-email";
import { BASE_ADDRESS } from "@/constants";
import { User } from "@/generated/prisma";
import { InterviewerSignupSchema } from "@/schemas/interviewer-signup";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // validate body
    const result = InterviewerSignupSchema.safeParse(body);
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
    const existsingUser = await getUserByEmail(data.email);
    let user: User | null = null;

    const verificationToken = emailVerificationCode();
    const verificationTokenExpiresAt = new Date();
    verificationTokenExpiresAt.setHours(
      verificationTokenExpiresAt.getHours() + 1
    );

    // check if user already exists
    if (existsingUser) {
      // check if user is already verified
      if (existsingUser.verified) {
        return NextResponse.json(
          {
            success: false,
            message: "User already exists with this email",
          },
          { status: 400 }
        );
      } else {
        // user is not verified so update its data
        const hashedPassword = await hashPassword(data.password);
        await prisma.user.update({
          where: { id: existsingUser.id },
          data: {
            ...data,
            password: hashedPassword,
            verificationToken,
            verificationTokenExpiresAt,
          },
        });
      }
    } else {
      // user does not exist
      const hashedPassword = await hashPassword(data.password);
      user = await createUser({
        ...data,
        password: hashedPassword,
        verificationToken,
        verificationTokenExpiresAt,
        role: "INTERVIEWER",
      });
    }

    // send Email
    const emialHtml = await render(
      EmailVerification({
        userName: data.firstName,
        verificationUrl: `${BASE_ADDRESS}/verify-email/${user?.id as string}?code=${verificationToken}`,
        verificationCode: verificationToken,
      })
    );

    const emailResponse = await sendEmail(
      data.email,
      "MockByte - Verify your email",
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
          "interviewer registered successfully. Please verify your account.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.log("Error in sign-up interviewer route: ", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
