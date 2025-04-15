import React from "react";
import {
  FormCard,
  FormCardContent,
  FormCardFooter,
} from "@/components/form/form-card";
import { SocialLoginSeperator } from "@/components/auth/social-login-separator";
import { SocialLogin } from "@/components/auth/social-login";
import { ResetPasswordForm } from "./reset-password-form";
import { BackButton } from "@/components/auth/back-button";

interface ResetPasswordProps {
  token: string;
}

export function ResetPassword({ token }: ResetPasswordProps) {
  return (
    <FormCard
      cardLabel="Reset Your Password"
      cardDescription="Enter your new password to reset your old password."
    >
      <FormCardContent>
        <ResetPasswordForm token={token} />
        <BackButton
          backButtonLabel="Back to Sign In"
          backButtonLink="/sign-in"
          backButtonDescription="Known your password?"
        />
      </FormCardContent>

      <FormCardFooter className="flex flex-col">
        <SocialLoginSeperator />
        <SocialLogin />
      </FormCardFooter>
    </FormCard>
  );
}
