"use client";

import { IInterview, IInterviewParticipant } from "@/types";
import { User } from "next-auth";
import React, { createContext, useContext, useEffect, useState } from "react";

interface InterviewContextType {
  interview: IInterview | null;
  user: User | null;
  showTranscript: boolean;
  participant: IInterviewParticipant | null;
  setShowTranscript: React.Dispatch<React.SetStateAction<boolean>>;
  handleSetUser: (user: User | null) => void;
  handleInterviewChange: (value: IInterview | null) => void;
  handleParticipantChange: (value: IInterviewParticipant | null) => void;
}

const InterviewContext = createContext<InterviewContextType | null>(null);

export function useInterviewContext() {
  const context = useContext(InterviewContext);
  if (!context) {
    throw new Error(
      "useInterviewContext must be used within an InterviewProvider"
    );
  }
  return context;
}

export function InterviewProvider({ children }: { children: React.ReactNode }) {
  const [interview, setInterview] = useState<IInterview | null>(null);
  const [participant, setParticipant] = useState<IInterviewParticipant | null>(
    null
  );
  const [user, setUser] = useState<User | null>(null);
  const [showTranscript, setShowTranscript] = useState<boolean>(false);

  const handleInterviewChange = (value: IInterview | null) => {
    setInterview(value);
    localStorage.setItem("interview", JSON.stringify(value));
  };

  const handleParticipantChange = (value: IInterviewParticipant | null) => {
    setParticipant(value);
    localStorage.setItem("participant", JSON.stringify(value));
  };

  const handleSetUser = (user: User | null) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    const interview = localStorage.getItem("interview");
    const participant = localStorage.getItem("participant");

    handleInterviewChange(JSON.parse(interview as string) || null);
    handleParticipantChange(JSON.parse(participant as string) || null);
    handleSetUser(JSON.parse(user as string) || null);
  }, []);

  return (
    <InterviewContext.Provider
      value={{
        interview,
        user,
        showTranscript,
        participant,
        handleSetUser,
        handleInterviewChange,
        setShowTranscript,
        handleParticipantChange,
      }}
    >
      {children}
    </InterviewContext.Provider>
  );
}

export default InterviewProvider;
