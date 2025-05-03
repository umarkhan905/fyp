"use client";

import { Progress } from "@/components/ui/progress";
import {
  ApiResponse,
  ErrorAPiResponse,
  ICreatedInterview,
  IGenerateQuestionsFormData,
  IQuestion,
} from "@/types";
import axios, { AxiosError } from "axios";
import { AlertTriangle, ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "sonner";
import GeneratingQuestionsLoading from "../generating-questions-loading";
import CreatedInterview from "../created-interview";
import { Card, CardContent } from "@/components/ui/card";
import MessageCard from "@/components/message/message-card";
import CompanyDetails from "./company-details";
import GenerateQuestions from "./interview/generate-questions";
import AIGeneratedQuestions from "./interview/ai-generated-questions";

export default function AiBasedInterview() {
  const [step, setStep] = useState<number>(1);
  const [isGenerated, setIsGenerated] = useState<boolean>(false);
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const [formData, setFormData] = useState<IGenerateQuestionsFormData>({
    type: "",
    role: "",
    description: "",
    duration: "",
    difficulty: "",
    experience: "",
    experienceIn: "",
    keywords: "",
    assessmentType: "",
    numberOfQuestions: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [interview, setInterview] = useState<ICreatedInterview>({
    id: "",
    duration: 0,
    noOfQuestions: 0,
  });

  const handleStepChange = (step: number) => {
    setStep(step);
  };

  const handleIsGeneratedChange = (isGenerated: boolean) => {
    setIsGenerated(isGenerated);
  };

  const handleQuestionsChange = (questions: IQuestion[]) => {
    setQuestions(questions);
  };

  const handleFormDataChange = (data: IGenerateQuestionsFormData) => {
    setFormData(data);
  };

  const onFinished = async ({
    companyName,
    companyLogo,
  }: {
    companyName: string;
    companyLogo: string;
  }) => {
    setError(null);
    setLoading(true);
    try {
      const res = await axios.post<ApiResponse<ICreatedInterview>>(
        "/api/interviews/create-interview",
        { ...formData, questions, companyName, companyLogo }
      );

      const data = res.data;
      if (data.success) {
        setInterview(data.data as ICreatedInterview);
        toast.success(data.message);
        handleStepChange(4);
      }
    } catch (error) {
      console.log("Error occurs while saving interview details: ", error);
      const axiosError = error as AxiosError<ErrorAPiResponse>;
      setError(axiosError.response?.data.message || "Internal server error");
    } finally {
      setLoading(false);
    }
  };

  if (error)
    return (
      <Card className="w-full h-full flex items-center justify-center group">
        <CardContent className="w-full">
          <MessageCard
            title={error}
            description="An error occurred while creating the interview. Please try again later."
            buttonText="Try Again"
            icon={AlertTriangle}
            varient="destructive"
            url={"/dashboard/create-interview"}
          />
        </CardContent>
      </Card>
    );

  return (
    <section className="flex flex-col gap-4 w-full h-full">
      {/*firster For If not sufficient coins */}
      {/* <CoinsAlert /> */}

      {/* Header */}
      <section className="max-w-lg w-full mx-auto my-3">
        <div className="flex items-center gap-2">
          <Link href={"/dashboard"}>
            <ArrowLeft className="size-6" />
          </Link>
          <h1 className="text-2xl font-bold">Create New Job Interview</h1>
        </div>
      </section>
      {/* Progress Bar */}
      <section className="max-w-lg w-full mx-auto flex items-center justify-center mb-2">
        <Progress value={(step / 4) * 100} />
      </section>
      {/* Create New Interview Form  */}
      {step === 1 ? (
        <GenerateQuestions
          onStepChange={handleStepChange}
          onIsGeneratedChange={handleIsGeneratedChange}
          onQuestionsChange={handleQuestionsChange}
          onFormDataChange={handleFormDataChange}
        />
      ) : step === 2 ? (
        isGenerated ? (
          <GeneratingQuestionsLoading />
        ) : (
          <AIGeneratedQuestions
            assessmentType={formData.assessmentType}
            questions={questions}
            loading={loading}
            onStepChange={handleStepChange}
          />
        )
      ) : step === 3 ? (
        <CompanyDetails onFinish={onFinished} loading={loading} />
      ) : (
        <CreatedInterview
          interview={interview}
          onStepChange={handleStepChange}
        />
      )}
    </section>
  );
}
