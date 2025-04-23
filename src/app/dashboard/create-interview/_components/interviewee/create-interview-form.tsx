"use client";

import FormError from "@/components/form/form-error";
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
import {
  MockInterviewSchema,
  MockInterviewSchemaType,
} from "@/schemas/interviews/mock-interview";
import { ApiResponse, ErrorAPiResponse, ICreatedInterview } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import axios, { AxiosError } from "axios";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function CreateInterviewForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const form = useForm<MockInterviewSchemaType>({
    resolver: zodResolver(MockInterviewSchema),
    defaultValues: {
      type: "",
      role: "",
      difficulty: "",
      experience: "",
      experienceIn: "",
      numberOfQuestions: "",
      topic: "",
    },
  });

  const onSubmit = async (values: MockInterviewSchemaType) => {
    setError(null);
    setLoading(true);
    try {
      const res = await axios.post<ApiResponse<ICreatedInterview>>(
        "/api/interviews/create-mock-interview",
        values
      );

      const data = res.data;
      console.log("data", data);
      if (data.success) {
        toast.success(data.message);
        router.push(`/interview/${data.data?.id}`);
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
          name="topic"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Which topic would you like to practice?</FormLabel>
              <FormControl>
                <Input
                  placeholder="Tech Stack"
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
          name="numberOfQuestions"
          render={({ field }) => (
            <FormItem>
              <FormLabel>How many questions would you like?</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="5"
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
          name="experience"
          render={({ field }) => (
            <FormItem>
              <FormLabel> What is your experience level?</FormLabel>
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

        {error && <FormError message={error} />}

        <Button className="w-full rounded-full min-h-11 text-background">
          {loading ? (
            <Loader2 className="animate-spin size-5" />
          ) : (
            "Create Interview"
          )}
        </Button>
      </form>
    </Form>
  );
}
