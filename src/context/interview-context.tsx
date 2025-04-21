"use client";

import { IInterview } from "@/types";
import { User } from "next-auth";
import React, { createContext, useContext, useState } from "react";

interface InterviewContextType {
  interview: IInterview | null;
  user: User | null;
  showTranscript: boolean;
  setShowTranscript: React.Dispatch<React.SetStateAction<boolean>>;
  handleSetUser: (user: User | null) => void;
  handleInterviewChange: (value: IInterview | null) => void;
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
  const [user, setUser] = useState<User | null>(null);
  const [showTranscript, setShowTranscript] = useState<boolean>(false);

  const handleInterviewChange = (value: IInterview | null) => {
    setInterview(value);
  };

  const handleSetUser = (user: User | null) => {
    setUser(user);
  };

  return (
    <InterviewContext.Provider
      value={{
        interview,
        user,
        showTranscript,
        handleSetUser,
        handleInterviewChange,
        setShowTranscript,
      }}
    >
      {children}
    </InterviewContext.Provider>
  );
}

export default InterviewProvider;
