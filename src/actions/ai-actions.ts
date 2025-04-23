"use server";

import {
  CREATE_INTERVIEW_PROMPT,
  CREATE_MCQ_INTERVIEW_PROMPT,
} from "@/constants/prompts/prompts";
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
    const prompt = `
    You are a professional interviewer analyzing a mock interview. Your task is to evaluate the candidate based on structured categories. Be thorough and detailed in your analysis. Don't be lenient with the candidate. If there are mistakes or areas for improvement, point them out.
    Transcript:
    ${transcript}

     Please score the candidate from 0 to 10 in the following areas. Do not add categories other than the ones provided:
        - **Communication Skills**: Clarity, articulation, structured responses.
        - **Technical Knowledge**: Understanding of key concepts for the role.
        - **Problem-Solving**: Ability to analyze problems and propose solutions.
        - **Cultural & Role Fit**: Alignment with company values and job role.
        - **Confidence & Clarity**: Confidence in responses, engagement, and clarity.
        - **Experience**: Relevant experience and how it relates to the role.
        - **Presentation Skills**: Ability to present ideas clearly and effectively.
        - **Total Rating**: Overall impression of the candidate.

   Add summary of the interview in just 3-4 sentences. Add strengths and weaknesses of the user. Also add areas of improvement and final assessment and recommended for the role. Give me response in JSON format. Do not add any extra text.response format should be like:

    {
      "totalRating": totalRating as number,
      "rating": [
       {
         "name": "technical",
         "score": score as number,
         "comment": "comment"
       },
          
        {
          "name": "communication",
          "score": score as number,
          "comment": "comment"
        },
        {
          "name": "problemSolving",
          "score": score as number,
          "comment": "comment"
        },
        {
          "name": "culturalFit",
          "score": score as number,
          "comment": "comment"
        },
        {
          "name": "confidence",
          "score": score as number,
          "comment": "comment"
        },
        {
          "name": "experience",
          "score": score as number,
          "comment": "comment"
        },
        {
          "name": "presentationSkills",
          "score": score as number,
          "comment": "comment"
        }
      ],
      "summary": "summary",
      "strengths": "strengths",
      "weaknesses": "weaknesses",
      "improvements": "improvements",
      "assessment": "assessment"
      "recommendedForJob": true or false
    }`;

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

export { generateQuestions, generateFeedback };
