import {
  FormCard,
  FormCardContent,
  FormCardFooter,
} from "@/components/form/form-card";
import React from "react";
import GeneratedQuestions from "../../generated-questions";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { IQuestion } from "@/types";

interface Props {
  assessmentType: string;
  questions: IQuestion[];
  loading: boolean;
  onStepChange: (step: number) => void;
}

export default function AIGeneratedQuestions({
  assessmentType,
  loading,
  questions,
  onStepChange,
}: Props) {
  return (
    <FormCard
      cardLabel="Generated Questions"
      cardDescription="Review and confirm the generated questions."
      className="max-w-lg"
    >
      <FormCardContent>
        <GeneratedQuestions
          assessmentType={assessmentType}
          questions={questions}
        />
      </FormCardContent>
      <FormCardFooter>
        <Button
          className="w-full rounded-full min-h-11 text-background"
          onClick={() => onStepChange(3)}
          disabled={loading}
        >
          {loading ? (
            <Loader2 className="size-6 animate-spin" />
          ) : (
            "Add Company Details"
          )}
        </Button>
      </FormCardFooter>
    </FormCard>
  );
}
