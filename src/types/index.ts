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

type IOption = {
  option: string;
  isCorrect: boolean;
};

type IQuestion = {
  id: string;
  question: string;
  options: IOption[];
  answer?: string;
  explanation?: string;
  questionType: string;
  codeEditorRequired?: boolean;
};

type IGenerateQuestionsFormData = {
  type: string;
  role: string;
  description: string;
  duration?: string;
  numberOfQuestions?: string;
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

type IInterviewParticipant = {
  id: string;
  status: "PENDING" | "COMPLETED" | "CANCELLED";
  interviewId: string;
  intervieweeId: string;
  startedAt: Date | null;
  completedAt: Date | null;
  timeTaken: string | null;
};

type IInterview = {
  id: string;
  group: "MANUAL" | "AI_BASED";
  status: "PENDING" | "CREATED" | "EXPIRED";
  role: string;
  type:
    | "TECHNICAL"
    | "BEHAVIORAL"
    | "TECHNICAL_AND_BEHAVIORAL"
    | "SYSTEM_DESIGN"
    | "HR"
    | "PROBLEM_SOLVING";
  duration: number;
  topic: string | null;
  companyName: string | null;
  experience: number;
  experienceIn: "MONTHS" | "YEARS";
  createdAt: Date;
  updatedAt: Date;
  createdById: string;
  createdByRole: "INTERVIEWER" | "INTERVIEWEE";
  difficulty: "EASY" | "MEDIUM" | "HARD";
  description: string;
  keywords: string;
  companyLogo: string | null;
  assessmentType: "MCQ_BASED" | "VOICE_BASED";
  noOfQuestions: number;
  validateTill: Date | null;
  category: "JOB" | "MOCK";
  questions?: IQuestion[] | null;
  participants?: IInterviewParticipant[] | null;
};

enum CallStatus {
  INACTIVE = "INACTIVE",
  CONNECTING = "CONNECTING",
  ACTIVE = "ACTIVE",
  FINISHED = "FINISHED",
  GENERATING_FEEDBACK = "GENERATING_FEEDBACK",
  REDIRECTING = "REDIRECTING",
  ERROR = "ERROR",
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

type ITimer = {
  hours: number;
  minutes: number;
  seconds: number;
};

type RatingItemForFeedback = {
  name: string;
  score: number;
  comment: string;
};

type FeedbackResponse = {
  totalRating: number;
  summary: string;
  strengths: string;
  weaknesses: string;
  improvements: string;
  assessment: string;
  recommendedForJob: boolean;
  rating: RatingItemForFeedback[];
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
  IInterviewParticipant,
  ITimer,
  FeedbackResponse,
};

export { CallStatus };
