import { signIn } from "@/auth";
import { SignInSchema } from "@/schemas/sign-in";
import { AuthError } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validatedFields = SignInSchema.safeParse(body);
    if (!validatedFields.success) {
      return NextResponse.json(
        {
          success: false,
          message:
            validatedFields.error.format()._errors.join(", ") ||
            "Invalid Fields",
        },
        { status: 400 }
      );
    }

    await signIn("credentials", {
      email: body.email,
      password: body.password,
      redirect: false,
    });

    return NextResponse.json(
      { success: true, message: "Signin successful" },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error Signin user: ", error);
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return NextResponse.json(
            {
              success: false,
              message: "Invalid email or password",
            },
            { status: 401 }
          );
        default:
          return NextResponse.json(
            {
              success: false,
              message: error.cause?.err?.message || "Internal server error",
            },
            { status: 500 }
          );
      }
    }
  }
}
