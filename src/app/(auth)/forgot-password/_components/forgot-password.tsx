"use client";

import React, { useState } from "react";
import { FormCard, FormCardContent } from "@/components/form/form-card";
import { ForgotPasswordForm } from "./forgot-password-form";
import { BackButton } from "@/components/auth/back-button";

export function ForgotPassword() {
  const [isLinkSent, setIsLinkSent] = useState<boolean>(false);

  const handleLinkSent = (value: boolean) => setIsLinkSent(value);

  return (
    <FormCard
      cardLabel={
        isLinkSent ? "Link Sent Successfully!" : "Forgot your Password?"
      }
      cardDescription={
        isLinkSent
          ? "Please check your inbox. You will receive an email with instructions on how to reset your password."
          : "Enter your email address and we'll send you a link to reset your password."
      }
    >
      <FormCardContent>
        {isLinkSent ? null : (
          <>
            <ForgotPasswordForm onLinkSent={handleLinkSent} />
            <BackButton
              backButtonLabel="Back to Sign In"
              backButtonLink="/sign-in"
              backButtonDescription="Known your password?"
            />
          </>
        )}
      </FormCardContent>
    </FormCard>
  );
}
