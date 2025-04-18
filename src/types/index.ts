import { Role } from "@/generated/prisma";

type ICreateUser = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  companyName?: string;
  position?: string;
  verificationToken?: string;
  verificationTokenExpiresAt?: Date;
  role?: Role;
};

type ApiResponse<T> = {
  success: boolean;
  message: string;
  data?: T;
};

type ErrorAPiResponse = {
  success: boolean;
  message: string;
};

type IQuestion = {
  question: string;
};

type IGenerateQuestionsFormData = {
  type: string;
  role: string;
  description: string;
  duration: string;
  difficulty: string;
  experience: string;
  experienceIn: string;
  keywords: string;
};

type ICreatedInterview = {
  id: string;
  duration: number;
  questions: IQuestion[];
};

export type {
  ICreateUser,
  ApiResponse,
  ErrorAPiResponse,
  IQuestion,
  IGenerateQuestionsFormData,
  ICreatedInterview,
};
