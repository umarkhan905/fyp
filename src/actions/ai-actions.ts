"use server";

import {
  CREATE_FEEDBACK_PROMPT,
  CREATE_INTERVIEW_PROMPT,
  CREATE_MCQ_INTERVIEW_PROMPT,
  CREATE_MOCK_INTERVIEW_PROMPT,
} from "@/constants/prompts/prompts";
import { geminiModel } from "@/lib/gemini";

import {
  GenerateQuestionsSchemaType,
  GenerateQuestionsSchema,
} from "@/schemas/interviews/generate-questions";
import {
  MockInterviewSchema,
  MockInterviewSchemaType,
} from "@/schemas/interviews/mock-interview";
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
      assessmentType,
    } = data;

    const prompt =
      assessmentType === "MCQ_BASED"
        ? CREATE_MCQ_INTERVIEW_PROMPT.replace("{{description}}", description)
            .replace("{{type}}", type)
            .replace("{{duration}}", duration)
            .replace("{{experience}}", experience + experienceIn)
            .replace("{{difficulty}}", difficulty)
            .replace("{{keywords}}", keywords)
        : CREATE_INTERVIEW_PROMPT.replaceAll("{{role}}", role)
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

const generateMockInterviewQuestions = async (
  formData: MockInterviewSchemaType
) => {
  try {
    const { data, error } = MockInterviewSchema.safeParse(formData);
    if (error) {
      return {
        success: false,
        message: error.format()._errors.join(", "),
      };
    }
    const {
      type,
      role,
      difficulty,
      experience,
      experienceIn,
      numberOfQuestions,
      topic,
    } = data;

    const prompt = CREATE_MOCK_INTERVIEW_PROMPT.replace("{{role}}", role)
      .replace("{{type}}", type)
      .replace("{{difficulty}}", difficulty)
      .replace("{{experience}}", experience + experienceIn)
      .replace("{{numberOfQuestions}}", numberOfQuestions)
      .replace("{{topic}}", topic);

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
    console.log("Error generating mock interview questions:", error);
    return {
      success: false,
      message: "Error generating questions. Please try again.",
    };
  }
};

interface SavedMessage {
  role: "user" | "system" | "assistant";
  content: string;
}

const generateFeedback = async (conversation: SavedMessage[]) => {
  // format transcript
  const transcript = conversation
    .map((message) => {
      return `- ${message.role}: ${message.content}\n`;
    })
    .join("");

  try {
    const prompt = CREATE_FEEDBACK_PROMPT.replace("{{transcript}}", transcript);

    const result = await geminiModel.generateContent(prompt);
    const feedback = result.response
      .text()
      .replace("```json", "")
      .replace("```", "");

    return {
      success: true,
      message: "Feedback generated successfully",
      data: feedback,
    };
  } catch (error) {
    console.log("Error generating feedback:", error);
    return {
      success: false,
      message: "Error generating feedback. Please try again.",
    };
  }
};

export { generateQuestions, generateFeedback, generateMockInterviewQuestions };
