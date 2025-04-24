"use client";

import React, { useEffect, useState } from "react";

import { useInterviewContext } from "@/context/interview-context";
import { vapi } from "@/lib/vapi";
import { INTERVIEWER } from "@/constants";
import { ApiResponse, CallStatus, IQuestion, SavedMessage } from "@/types";
import { useRouter } from "next/navigation";
import Spinner from "./interview-screen/spinner";
import MainScreen from "./interview-screen/main-screen";
import axios from "axios";
import { toast } from "sonner";
import { createInterviewParticipation } from "@/actions/interview-actions";

export function InterviewScreen() {
  const { interview, user } = useInterviewContext();
  const [callStatus, setCallStatus] = useState<CallStatus>(CallStatus.INACTIVE);
  const [messages, setMessages] = useState<SavedMessage[]>([]);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [lastMessage, setLastMessage] = useState<string>("");
  const [isGeneratingFeedback, setIsGeneratingFeedback] =
    useState<boolean>(false);
  const [isInterviewParticipationCreated, setIsInterviewParticipationCreated] =
    useState<boolean>(false);
  const [participation, setParticipation] = useState<{
    id: string;
    startedAt: Date;
  } | null>(null);
  const router = useRouter();

  const createParticipation = async () => {
    const participation = await createInterviewParticipation(
      interview?.id as string
    );
    if (participation) {
      setParticipation({
        id: participation.id,
        startedAt: participation.startedAt!,
      });
      setIsInterviewParticipationCreated(true);
    }
  };

  console.log("participation", participation);

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
    setIsGeneratingFeedback(true);
    try {
      const res = await axios.post<ApiResponse<{ id: string }>>(
        "/api/interviews/feedback",
        {
          conversation: messages,
          interviewId: interview?.id,
          interviewParticipantId: participation?.id,
          startedAt: participation?.startedAt,
        }
      );

      const data = res.data;
      if (data.success) {
        toast.success("Feedback generated successfully");
        router.push(
          `/interview/${interview?.id}/feedback/${data?.data?.id as string}`
        );
      }
    } catch (error) {
      console.error("Error generating feedback:", error);
      toast.error("Error generating feedback. Please try again.");
    } finally {
      setIsGeneratingFeedback(false);
    }
  };

  useEffect(() => {
    if (interview && isInterviewParticipationCreated) startInterview();
  }, [interview, isInterviewParticipationCreated]);

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

  useEffect(() => {
    createParticipation();
  }, []);

  return (
    <main className="w-full">
      {callStatus === CallStatus.CONNECTING ||
      callStatus === CallStatus.INACTIVE ? (
        <section className="h-screen flex items-center justify-center">
          <Spinner message="Connecting" />
        </section>
      ) : callStatus === CallStatus.FINISHED ? (
        <section className="h-screen flex items-center justify-center">
          <Spinner
            message={
              isGeneratingFeedback ? "Generating Feedback" : "Redirecting"
            }
          />
        </section>
      ) : (
        <MainScreen
          isSpeaking={isSpeaking}
          handleEndInterview={handleEndInterview}
          lastMessage={lastMessage}
          messages={messages}
        />
      )}
    </main>
  );
}
