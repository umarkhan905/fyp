import React from "react";
import { ResetPassword } from "../_components/reset-password";

export default async function ResetPasswordPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  return <ResetPassword token={id} />;
}
