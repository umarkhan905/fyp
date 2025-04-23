import { getUserSession } from "@/lib/session";
import React from "react";
import InterviewerPage from "./_components/interviewer/interviewer-page";
import IntervieweePage from "./_components/interviewee/interviewee-page";

export default async function CreatedInterview() {
  const user = await getUserSession();

  return user?.role === "INTERVIEWER" ? (
    <InterviewerPage />
  ) : (
    <IntervieweePage />
  );
}
