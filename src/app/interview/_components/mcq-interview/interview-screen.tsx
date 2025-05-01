"use client";

import { useEffect, useState } from "react";
import InterviewActions from "./interview-actions";
import InterviewHeader from "./interview-header";
import InterviewProgress from "./interview-progress";
import QuestionCard from "./question-card";
import Spinner from "../spinner";
import { useInterviewContext } from "@/context/interview-context";
import { ApiResponse, ErrorAPiResponse, IQuestion, ITimer } from "@/types";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

enum InterviewStatus {
  CONNECTING,
  CONNECTED,
  FINISHED,
  RESULTING,
  REDIRECTING,
  ERROR,
}

const LoadingScreen = ({ message }: { message: string }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Spinner message={message} />
    </div>
  );
};

export function InterviewScreen() {
  const [status, setStatus] = useState<InterviewStatus>(
    InterviewStatus.CONNECTING
  );
  const [currentQuestionIndex, setcurrentQuestionIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [time, setTime] = useState<ITimer>({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const { interview, participant } = useInterviewContext();

  const getCorrectAnswersCount = (
    questions: IQuestion[],
    userAnswers: Record<string, string>
  ) => {
    let count = 0;

    questions.forEach((question) => {
      if (userAnswers[question.id] === question.answer) {
        count++;
      }
    });

    return count;
  };

  const startInterview = () => {
    setStatus(InterviewStatus.CONNECTED);
    setcurrentQuestionIndex(0);
    setUserAnswers({});

    // shuffle questions and set
    if (interview?.questions) {
      const shuffledQuestions = interview.questions.sort(
        () => Math.random() - 0.5
      );
      setQuestions(shuffledQuestions);
    }
  };

  const onFinishInterview = () => {
    setStatus(InterviewStatus.FINISHED);
  };

  const handleFeedback = async () => {
    setStatus(InterviewStatus.RESULTING);
    setError(null);

    const totalQuestions = questions.length;
    const correctAnswers = getCorrectAnswersCount(questions, userAnswers);
    const wrongAnswers = totalQuestions - correctAnswers;
    const accuracy = (correctAnswers / totalQuestions) * 100;
    const timeTaken = `${time.minutes}:${time.seconds}`;
    const interviewQuestion = questions.map((q) => ({
      question: q.question,
      correctAnswer: q.answer,
      questionType: q.questionType,
      userAnswer: userAnswers[q.id],
      explanation: q.explanation,
      options: q.options,
    }));

    try {
      const res = await axios.post<ApiResponse<{ id: string }>>(
        "/api/interviews/mcq-feedback",
        {
          wrongAnswers,
          correctAnswers,
          accuracy,
          timeTaken,
          questions: interviewQuestion,
          participantId: participant?.id,
          interviewId: interview?.id,
        }
      );

      const data = res.data;
      if (data.success) {
        setStatus(InterviewStatus.REDIRECTING);
        toast.success("Feedback generated successfully");
        router.push(
          `/interview/${interview?.id}/feedback/${data?.data?.id as string}`
        );
      }
    } catch (error) {
      setStatus(InterviewStatus.ERROR);
      console.log("Error occurs while fetching mcq-feedback: ", error);
      const axiosError = error as AxiosError<ErrorAPiResponse>;
      setError(
        (axiosError?.response?.data.message as string) ||
          "Internal server error"
      );
    }
  };

  useEffect(() => {
    if (interview) startInterview();
  }, [interview]);

  useEffect(() => {
    if (status === InterviewStatus.FINISHED) {
      handleFeedback();
    }
  }, [status]);

  if (status === InterviewStatus.CONNECTING)
    return <LoadingScreen message="Connecting" />;

  if (!interview || !participant) return null;

  return status === InterviewStatus.CONNECTED ? (
    <section className="max-w-6xl mx-auto w-full p-4 space-y-8">
      <InterviewHeader
        interviewTitle={interview.role}
        interviewType={interview.type.replaceAll("_", " ").toLowerCase()}
        logo={(interview.companyLogo as string) || "/logo-primary.png"}
        time={time}
        setTime={setTime}
      />
      <InterviewProgress
        currentQuestion={currentQuestionIndex + 1}
        totalQuestions={interview.noOfQuestions}
      />
      <QuestionCard
        currentQuestionIndex={currentQuestionIndex}
        currentQuestion={questions[currentQuestionIndex] || null}
        totalQuestions={interview.noOfQuestions}
        setCurrentQuestionIndex={setcurrentQuestionIndex}
        isSpeaking={isSpeaking}
        setUserAnswers={setUserAnswers}
        userAnswers={userAnswers}
        onFinishInterview={onFinishInterview}
      />
      <InterviewActions
        setIsSpeaking={setIsSpeaking}
        isSpeaking={isSpeaking}
        onFinishInterview={onFinishInterview}
      />
    </section>
  ) : status === InterviewStatus.RESULTING ? (
    <LoadingScreen message="Generating Feedback" />
  ) : status === InterviewStatus.REDIRECTING ? (
    <LoadingScreen message="Redirecting" />
  ) : (
    <div>
      Some Error Occurred:
      {error}
    </div>
  );
}
