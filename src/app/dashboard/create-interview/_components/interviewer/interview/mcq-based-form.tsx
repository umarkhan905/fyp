"use client";

import React from "react";
import {
  MCQBasedInterviewSchema,
  MCQBasedInterviewSchemaType,
} from "@/schemas/interviews/mcq-based-interview";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { IGenerateQuestionsFormData, IQuestion } from "@/types";
import { generateMCQBasedInterviewQuestions } from "@/actions/ai-actions";
import { toast } from "sonner";

interface Props {
  onStepChange: (step: number) => void;
  onIsGeneratedChange: (isGenerated: boolean) => void;
  onQuestionsChange: (questions: IQuestion[]) => void;
  onFormDataChange: (data: IGenerateQuestionsFormData) => void;
}

export default function MCQBasedForm({
  onFormDataChange,
  onIsGeneratedChange,
  onQuestionsChange,
  onStepChange,
}: Props) {
  const form = useForm<MCQBasedInterviewSchemaType>({
    resolver: zodResolver(MCQBasedInterviewSchema),
    defaultValues: {
      type: "",
      role: "",
      description: "",
      difficulty: "",
      experience: "",
      experienceIn: "",
      keywords: "",
      numberOfQuestions: "",
    },
  });

  const onSubmit = async (values: MCQBasedInterviewSchemaType) => {
    onIsGeneratedChange(true);
    onStepChange(2);
    onFormDataChange({ ...values, assessmentType: "MCQ_BASED" });
    const res = await generateMCQBasedInterviewQuestions(values);
    if (res.success) {
      toast.success(res.message);
      onQuestionsChange(res.data!);
      onIsGeneratedChange(false);
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Which role are you applying for?</FormLabel>
              <FormControl>
                <Input
                  placeholder="Software Engineer"
                  className="placeholder:text-muted-foreground text-sm rounded-full min-h-11"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                What type of interview would you like to practice?
              </FormLabel>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full rounded-full min-h-11">
                    <SelectValue placeholder="Select Interview Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="TECHNICAL">
                      Technical Interview
                    </SelectItem>
                    <SelectItem value="BEHAVIORAL">
                      Behavioral Interview
                    </SelectItem>
                    <SelectItem value="TECHNICAL_AND_BEHAVIORAL">
                      Technical and Behavioral Interview
                    </SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="experience"
          render={({ field }) => (
            <FormItem>
              <FormLabel> What is your experience level?</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="1"
                  min={0}
                  className="placeholder:text-muted-foreground text-sm rounded-full min-h-11"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="experienceIn"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What is your experience in?</FormLabel>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full rounded-full min-h-11">
                    <SelectValue placeholder="Experience In" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="MONTHS">Month</SelectItem>
                    <SelectItem value="YEARS">Year</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="numberOfQuestions"
          render={({ field }) => (
            <FormItem>
              <FormLabel>How many questions would you like?</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="5"
                  min={0}
                  className="placeholder:text-muted-foreground text-sm rounded-full min-h-11"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="difficulty"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                What level of difficulty would you like the interview to be?
              </FormLabel>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full rounded-full min-h-11">
                    <SelectValue placeholder="Select Difficulty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="EASY">Easy</SelectItem>
                    <SelectItem value="MEDIUM">Medium</SelectItem>
                    <SelectItem value="HARD">Hard</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="keywords"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Job Related Keywords / Tags?</FormLabel>
              <FormControl>
                <Input
                  placeholder="MERN, Java, Python, etc"
                  className="placeholder:text-muted-foreground text-sm rounded-full min-h-11 resize-none"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Job Description?</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Job Description"
                  className="placeholder:text-muted-foreground text-sm rounded-md min-h-20 resize-none"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="w-full rounded-full min-h-11 text-white">
          Generate Questions
        </Button>
      </form>
    </Form>
  );
}
