import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  process.env.GOOGLE_GEMINI_API_KEY as string
);

export const geminiModel = genAI.getGenerativeModel({
  model: process.env.GOOGLE_GEMINI_MODEL as string,
});
