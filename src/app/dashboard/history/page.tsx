import React from "react";
import { getUserSession } from "@/lib/session";
import IntervieweeHistoryPage from "./_components/interviewee/interviewee-page";
import InterviewerHistoryPage from "./_components/interviewer/interviewer-page";
import { redirect } from "next/navigation";

export default async function InterviewsHistory() {
  const user = await getUserSession();

  if (!user) redirect("/sign-in");

  return (
    <>
      {user?.role === "INTERVIEWEE" ? (
        <IntervieweeHistoryPage userId={user?.id as string} />
      ) : (
        <InterviewerHistoryPage userId={user?.id as string} />
      )}
    </>
  );
}
