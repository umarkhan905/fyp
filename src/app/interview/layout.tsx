import InterviewProvider from "@/context/interview-context";
import React from "react";

function InterviewLayout({ children }: { children: React.ReactNode }) {
  return <InterviewProvider>{children}</InterviewProvider>;
}

export default InterviewLayout;
