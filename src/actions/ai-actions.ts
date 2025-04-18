"use server";

import { CREATE_INTERVIEW_PROMPT } from "@/constants/prompts/prompts";
import { geminiModel } from "@/lib/gemini";

import {
  GenerateQuestionsSchemaType,
  GenerateQuestionsSchema,
} from "@/schemas/interviews/generate-questions";
import { IQuestion } from "@/types";

const generateQuestions = async (formData: GenerateQuestionsSchemaType) => {
  try {
    const { data, error } = GenerateQuestionsSchema.safeParse(formData);
    if (error) {
      return {
        success: false,
        message: error.format()._errors.join(", "),
      };
    }
    const {
      type,
      role,
      description,
      difficulty,
      duration,
      experience,
      experienceIn,
      keywords,
    } = data;

    const prompt = CREATE_INTERVIEW_PROMPT.replaceAll("{{role}}", role)
      .replace("{{description}}", description)
      .replace("{{type}}", type)
      .replace("{{duration}}", duration)
      .replace("{{experience}}", experience + experienceIn)
      .replace("{{difficulty}}", difficulty)
      .replace("{{keywords}}", keywords);

    const result = await geminiModel.generateContent(prompt);
    const formattedResponse = result.response
      .text()
      .replace("```json", "")
      .replace("```", "");
    const questions: { interviewQuestions: IQuestion[] } =
      JSON.parse(formattedResponse);

    return {
      success: true,
      message: "Questions generated successfully",
      data: questions.interviewQuestions,
    };
  } catch (error) {
    console.log("Error generating questions:", error);
    return {
      success: false,
      message: "Error generating questions. Please try again.",
    };
  }
};

export { generateQuestions };
