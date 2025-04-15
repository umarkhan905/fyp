import React from "react";
import VerifyEmailForm from "../_components/email-verification";

export default async function VerifyEmail({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ code?: string }>;
}) {
  const id = (await params).id;
  const code = (await searchParams).code;

  return <VerifyEmailForm identifier={id} code={code} />;
}
