"use server";

import {
  CREATE_FEEDBACK_PROMPT,
  CREATE_INTERVIEW_PROMPT,
  CREATE_MCQ_FEEDBACK_PROMPT,
  CREATE_MCQ_INTERVIEW_PROMPT,
  CREATE_MOCK_INTERVIEW_PROMPT,
} from "@/constants/prompts/prompts";
import { geminiModel } from "@/lib/gemini";

import {
  MCQBasedInterviewSchema,
  MCQBasedInterviewSchemaType,
} from "@/schemas/interviews/mcq-based-interview";
import {
  MockInterviewSchema,
  MockInterviewSchemaType,
} from "@/schemas/interviews/mock-interview";
import {
  VoiceBasedInterviewSchema,
  VoiceBasedInterviewSchemaType,
} from "@/schemas/interviews/voice-based-interview";
import { IQuestion } from "@/types";

const generateMCQBasedInterviewQuestions = async (
  formData: MCQBasedInterviewSchemaType
) => {
  try {
    const { data, error } = MCQBasedInterviewSchema.safeParse(formData);
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
      experience,
      experienceIn,
      keywords,
      numberOfQuestions,
    } = data;

    const prompt = CREATE_MCQ_INTERVIEW_PROMPT.replace(
      "{{description}}",
      description
    )
      .replace("{{type}}", type)
      .replace("{{numberOfQuestions}}", numberOfQuestions)
      .replace("{{experience}}", experience + experienceIn)
      .replace("{{difficulty}}", difficulty)
      .replace("{{keywords}}", keywords)
      .replaceAll("{{role}}", role);

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

const generateVoiceBasedQuestions = async (
  formData: VoiceBasedInterviewSchemaType
) => {
  try {
    const { data, error } = VoiceBasedInterviewSchema.safeParse(formData);
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
    const questions: {
      interviewQuestions: IQuestion[];
      description: string;
      keywords: string;
    } = JSON.parse(formattedResponse);

    return {
      success: true,
      message: "Questions generated successfully",
      data: questions,
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

type MCQ_FEEDBACK_QUESTIONS = {
  question: string;
  options: string;
  correctAnswer: string;
  explanation: string;
  questionType: string;
  userAnswer: string;
};

const generateMcqFeedback = async (
  correctAnswers: number,
  wrongAnswers: number,
  accuracy: number,
  timeTaken: string,
  questions: MCQ_FEEDBACK_QUESTIONS[]
) => {
  try {
    const prompt = CREATE_MCQ_FEEDBACK_PROMPT.replace(
      "{{correctAnswers}}",
      correctAnswers.toString()
    )
      .replace("{{wrongAnswers}}", wrongAnswers.toString())
      .replace("{{accuracy}}", accuracy.toString())
      .replace("{{totalTime}}", timeTaken)
      .replace("{{totalQuestions}}", questions.length.toString())
      .replace("{{questions}}", JSON.stringify(questions));

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

export {
  generateVoiceBasedQuestions,
  generateFeedback,
  generateMockInterviewQuestions,
  generateMcqFeedback,
  generateMCQBasedInterviewQuestions,
};
