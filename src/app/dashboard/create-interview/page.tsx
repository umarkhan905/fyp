"use client";

import React, { useState } from "react";
import { ArrowLeft, Loader2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import {
  FormCard,
  FormCardContent,
  FormCardFooter,
} from "@/components/form/form-card";
import GenerateQuestionsForm from "./_components/generate-questions-form";
import GeneratedQuestions from "./_components/generated-questions";
import { Button } from "@/components/ui/button";
import CreatedInterview from "./_components/created-interview";
import GeneratingQuestionsLoading from "./_components/generating-questions-loading";
import {
  ApiResponse,
  ErrorAPiResponse,
  ICreatedInterview,
  IGenerateQuestionsFormData,
  IQuestion,
} from "@/types";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";

export default function CreateInterview() {
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
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [interview, setInterview] = useState<ICreatedInterview>({
    id: "",
    duration: 0,
    questions: [],
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

  const onFinished = async () => {
    setError(null);
    setLoading(true);
    try {
      const res = await axios.post<ApiResponse<ICreatedInterview>>(
        "/api/interviews/create-interview",
        { ...formData, questions }
      );

      const data = res.data;
      if (data.success) {
        setInterview(data.data as ICreatedInterview);
        toast(data.message);
        handleStepChange(3);
      }
    } catch (error) {
      console.log("Error occurs while saving interview details: ", error);
      const axiosError = error as AxiosError<ErrorAPiResponse>;
      setError(axiosError.response?.data.message || "Internal server error");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {/*firster For If not sufficient coins */}
      {/* <CoinsAlert /> */}

      {/* Header */}
      <section className="max-w-lg w-full mx-auto my-3">
        <div className="flex items-center gap-2">
          <Link href={"/dashboard"}>
            <ArrowLeft className="size-6" />
          </Link>
          <h1 className="text-2xl font-bold">Create New Interview</h1>
        </div>
      </section>

      {/* Progress Bar */}
      <section className="max-w-lg w-full mx-auto flex items-center justify-center mb-2">
        <Progress value={(step / 3) * 100} />
      </section>

      {/* Create New Interview Form  */}

      {step === 1 ? (
        <FormCard
          cardLabel=" Generate a Mock Interview"
          cardDescription=" Customize your mock interview to suit your needs."
          className="max-w-lg"
        >
          <FormCardContent>
            <GenerateQuestionsForm
              onStepChange={handleStepChange}
              onIsGeneratedChange={handleIsGeneratedChange}
              onQuestionsChange={handleQuestionsChange}
              onFormDataChange={handleFormDataChange}
            />
          </FormCardContent>
        </FormCard>
      ) : step === 2 ? (
        isGenerated ? (
          <GeneratingQuestionsLoading />
        ) : (
          <FormCard
            cardLabel="Generated Questions"
            cardDescription="Review and confirm the generated questions."
            className="max-w-lg"
          >
            <FormCardContent>
              <GeneratedQuestions questions={questions} />
            </FormCardContent>
            <FormCardFooter>
              <Button
                className="w-full rounded-full min-h-11 text-background"
                onClick={onFinished}
                disabled={loading}
              >
                {loading ? (
                  <Loader2 className="size-6 animate-spin" />
                ) : (
                  "Create Interview Link & Finish"
                )}
              </Button>
            </FormCardFooter>
          </FormCard>
        )
      ) : (
        step === 3 && (
          <CreatedInterview
            interview={interview}
            onStepChange={handleStepChange}
          />
        )
      )}
    </>
  );
}
