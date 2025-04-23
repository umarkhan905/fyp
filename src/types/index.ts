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
  options?: string;
  answer?: string;
  explanation?: string;
  questionType: string;
  codeEditorRequired?: boolean;
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
  assessmentType: string;
};

type ICreatedInterview = {
  id: string;
  duration: number;
  noOfQuestions: number;
};

type IInterview = {
  id: string;
  userId: string;
  type: "TECHNICAL" | "BEHAVIORAL" | "TECHNICAL_AND_BEHAVIORAL";
  duration: number;
  difficulty: "EASY" | "MEDIUM" | "HARD";
  experience: number;
  experienceIn: "MONTHS" | "YEARS";
  role: string;
  description: string;
  keywords: string;
  questions: IQuestion[];
  createdAt: Date;
  updatedAt: Date;
};

enum CallStatus {
  INACTIVE = "INACTIVE",
  CONNECTING = "CONNECTING",
  ACTIVE = "ACTIVE",
  FINISHED = "FINISHED",
}

type SavedMessage = {
  role: "user" | "system" | "assistant";
  content: string;
};

type IRatingItem = {
  id: string;
  name:
    | "TECHNICAL"
    | "COMMUNICATION"
    | "PROBLEM_SOLVING"
    | "CULTURAL_FIT"
    | "CONFIDENCE"
    | "EXPERIENCE"
    | "PRESENTATION_SKILLS";
  score: number;
  comment: string;
};

type IFeedback = {
  id: string;
  userId: string;
  interviewId: string;
  totalRating: number;
  summary: string;
  strengths: string;
  weaknesses: string;
  improvements: string;
  assessment: string;
  recommendedForJob: boolean;
  rating: IRatingItem[];
  createdAt: string;
  updatedAt: string;
};

export type {
  ICreateUser,
  ApiResponse,
  ErrorAPiResponse,
  IQuestion,
  IGenerateQuestionsFormData,
  ICreatedInterview,
  IInterview,
  SavedMessage,
  IRatingItem,
  IFeedback,
};
export { CallStatus };
