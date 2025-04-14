import React from "react";

export default async function VerifyEmail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  return <div>VerifyEmail</div>;
}
