import React from "react";
import { getInterviewById } from "@/actions/interview-actions";
import { Interview } from "../_components/interview";
import { notFound, redirect } from "next/navigation";
import { getUserSession } from "@/lib/session";
import { IInterview } from "@/types";

export default async function InterviewPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const user = await getUserSession();

  // Check if the user is logged in, if not redirect to login page
  if (!user) {
    return redirect("/sign-in");
  }

  const interview = await getInterviewById(id);

  // Check if the interview exists, if not, return a 404 page
  if (!interview) notFound();

  return <Interview interview={interview as IInterview} user={user} />;
}
