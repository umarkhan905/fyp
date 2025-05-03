import { FormCard, FormCardContent } from "@/components/form/form-card";
import React from "react";
import InterviewTypeTabs from "./interview-type-tabs";
import { IGenerateQuestionsFormData, IQuestion } from "@/types";

interface Props {
  onStepChange: (step: number) => void;
  onIsGeneratedChange: (isGenerated: boolean) => void;
  onQuestionsChange: (questions: IQuestion[]) => void;
  onFormDataChange: (data: IGenerateQuestionsFormData) => void;
}

export default function GenerateQuestions({
  onFormDataChange,
  onIsGeneratedChange,
  onQuestionsChange,
  onStepChange,
}: Props) {
  return (
    <FormCard
      cardLabel=" Generate a Job Interview"
      cardDescription=" Customize your job interview questions that suit your requirements."
      className="max-w-lg"
    >
      <FormCardContent>
        <InterviewTypeTabs
          onStepChange={onStepChange}
          onIsGeneratedChange={onIsGeneratedChange}
          onQuestionsChange={onQuestionsChange}
          onFormDataChange={onFormDataChange}
        />
      </FormCardContent>
    </FormCard>
  );
}
