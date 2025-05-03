import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import VoiceBasedForm from "./voice-based-form";
import MCQBasedForm from "./mcq-based-form";
import { IGenerateQuestionsFormData, IQuestion } from "@/types";

interface Props {
  onStepChange: (step: number) => void;
  onIsGeneratedChange: (isGenerated: boolean) => void;
  onQuestionsChange: (questions: IQuestion[]) => void;
  onFormDataChange: (data: IGenerateQuestionsFormData) => void;
}

export default function InterviewTypeTabs({
  onFormDataChange,
  onIsGeneratedChange,
  onQuestionsChange,
  onStepChange,
}: Props) {
  return (
    <Tabs defaultValue="voice" className="w-full">
      <TabsList className="w-full bg-transparent rounded-none">
        <TabsTrigger
          value="voice"
          className="data-[state=active]:bg-transparent dark:data-[state=active]:border-transparent dark:data-[state=active]:border-b-2 dark:data-[state=active]:border-b-primary text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:font-semibold data-[state=active]:border-b-primary data-[state=active]:text-foreground p-3 min-h-11 transition-all duration-300"
        >
          Voice Based
        </TabsTrigger>
        <TabsTrigger
          value="mcq"
          className="data-[state=active]:bg-transparent dark:data-[state=active]:border-transparent dark:data-[state=active]:border-b-2 dark:data-[state=active]:border-b-primary text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:font-semibold data-[state=active]:border-b-primary data-[state=active]:text-foreground p-3 min-h-11 transition-all duration-300"
        >
          MCQ Based
        </TabsTrigger>
      </TabsList>

      <TabsContent value="voice" className="mt-4">
        <VoiceBasedForm
          onStepChange={onStepChange}
          onIsGeneratedChange={onIsGeneratedChange}
          onQuestionsChange={onQuestionsChange}
          onFormDataChange={onFormDataChange}
        />
      </TabsContent>

      <TabsContent value="mcq" className="mt-4">
        <MCQBasedForm
          onStepChange={onStepChange}
          onIsGeneratedChange={onIsGeneratedChange}
          onQuestionsChange={onQuestionsChange}
          onFormDataChange={onFormDataChange}
        />
      </TabsContent>
    </Tabs>
  );
}
