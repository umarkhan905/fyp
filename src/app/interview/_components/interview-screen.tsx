"use client";

import React, { useEffect, useState } from "react";

import { useInterviewContext } from "@/context/interview-context";
import { vapi } from "@/lib/vapi";
import { INTERVIEWER } from "@/constants";
import {
  ApiResponse,
  CallStatus,
  ErrorAPiResponse,
  IQuestion,
  ITimer,
  SavedMessage,
} from "@/types";
import { useRouter } from "next/navigation";
import MainScreen from "./interview-screen/main-screen";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";
import { LoadingScreen } from "./loading-screen";

export function InterviewScreen() {
  const { interview, user, participant } = useInterviewContext();
  const [callStatus, setCallStatus] = useState<CallStatus>(CallStatus.INACTIVE);
  const [messages, setMessages] = useState<SavedMessage[]>([]);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [lastMessage, setLastMessage] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const [time, setTime] = useState<ITimer>({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const router = useRouter();

  const startInterview = async () => {
    setCallStatus(CallStatus.CONNECTING);

    let formattedQuestions = "";
    if (interview?.questions) {
      formattedQuestions = interview.questions
        .map((q: IQuestion) => `- ${q.question}`)
        .join("\n");
    }

    await vapi.start(INTERVIEWER, {
      variableValues: {
        questions: formattedQuestions,
        position: interview?.role,
        username: user?.firstName,
      },
    });
  };

  const handleEndInterview = () => {
    setCallStatus(CallStatus.FINISHED);
    vapi.stop();
    console.log("end interview");
  };

  const handleFeedback = async () => {
    setCallStatus(CallStatus.GENERATING_FEEDBACK);
    setError(null);
    try {
      const res = await axios.post<ApiResponse<{ id: string }>>(
        "/api/interviews/feedback",
        {
          conversation: messages,
          interviewId: interview?.id,
          participantId: participant?.id,
          startedAt: participant?.startedAt,
          timeTaken: `${time.hours}:${time.minutes}:${time.seconds}`,
        }
      );

      const data = res.data;
      if (data.success) {
        setCallStatus(CallStatus.REDIRECTING);
        toast.success("Feedback generated successfully");
        router.push(
          `/interview/${interview?.id}/feedback/${data?.data?.id as string}`
        );
      }
    } catch (error) {
      setCallStatus(CallStatus.ERROR);
      console.error("Error generating feedback:", error);
      const axiosError = error as AxiosError<ErrorAPiResponse>;
      setError(axiosError.response?.data.message || "Internal server error");
    }
  };

  useEffect(() => {
    if (interview && participant) startInterview();
  }, [interview, participant]);

  useEffect(() => {
    const onCallStart = () => {
      setCallStatus(CallStatus.ACTIVE);
    };

    const onCallEnd = () => {
      setCallStatus(CallStatus.FINISHED);
    };

    const onMessage = (message: Message) => {
      if (message.type === "transcript" && message.transcriptType === "final") {
        const newMessage = { role: message.role, content: message.transcript };
        setMessages((prev) => [...prev, newMessage]);
      }
    };

    const onSpeechStart = () => {
      console.log("speech start");
      setIsSpeaking(true);
    };

    const onSpeechEnd = () => {
      console.log("speech end");
      setIsSpeaking(false);
    };

    const onError = (error: Error) => {
      console.log("Error:", error);
    };

    vapi.on("call-start", onCallStart);
    vapi.on("call-end", onCallEnd);
    vapi.on("message", onMessage);
    vapi.on("speech-start", onSpeechStart);
    vapi.on("speech-end", onSpeechEnd);
    vapi.on("error", onError);

    return () => {
      vapi.off("call-start", onCallStart);
      vapi.off("call-end", onCallEnd);
      vapi.off("message", onMessage);
      vapi.off("speech-start", onSpeechStart);
      vapi.off("speech-end", onSpeechEnd);
      vapi.off("error", onError);
    };
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      setLastMessage(messages[messages.length - 1].content);
    }

    if (callStatus === CallStatus.FINISHED) {
      handleFeedback();

      console.log("Interview finished, feedback generated");
    }
  }, [messages, callStatus]);

  if (
    callStatus === CallStatus.CONNECTING ||
    callStatus === CallStatus.INACTIVE
  )
    return <LoadingScreen message="Connecting" />;

  return (
    <main className="w-full">
      {callStatus === CallStatus.ACTIVE ? (
        <MainScreen
          isSpeaking={isSpeaking}
          handleEndInterview={handleEndInterview}
          lastMessage={lastMessage}
          messages={messages}
          time={time}
          setTime={setTime}
        />
      ) : callStatus === CallStatus.GENERATING_FEEDBACK ? (
        <LoadingScreen message="Generating Feedback" />
      ) : callStatus === CallStatus.REDIRECTING ? (
        <LoadingScreen message="Redirecting" />
      ) : callStatus === CallStatus.ERROR ? (
        <div>An error occurred: {error}</div>
      ) : null}
    </main>
  );
}
