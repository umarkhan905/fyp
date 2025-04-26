import { v4 as uuidv4 } from "uuid";
import { IInterview } from "@/types";
import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";

export const BASE_ADDRESS =
  process.env.NODE_ENV === "production"
    ? "https://mock-byte.vercel.app"
    : "http://localhost:3000";

export const DUMMY_QUESTIONS = {
  interviewQuestions: [
    {
      question:
        "Tell me about yourself and your experience with the MERN stack.",
    },
    {
      question: "What is the difference between `==` and `===` in JavaScript?",
    },
    { question: "Explain the concept of hoisting in JavaScript." },
    {
      question:
        "What are the key features of React? Why did you choose React over other frameworks/libraries?",
    },
    {
      question:
        "What are React hooks? Explain the purpose of `useState` and `useEffect` hooks.",
    },
    {
      question:
        "Describe the role of Node.js and Express.js in the MERN stack.",
    },
    {
      question:
        "What is REST? How do you implement RESTful APIs using Node.js and Express.js?",
    },
    {
      question:
        "How do you connect your backend (Node.js/Express) to your frontend (React)? Describe the data flow.",
    },
    {
      question:
        "Explain the basics of MongoDB and how you interact with it using Mongoose.",
    },
    {
      question:
        "What are the advantages of using MongoDB over relational databases?",
    },
    {
      question:
        "Can you describe a recent project you worked on using the MERN stack? What were the main challenges and how did you overcome them?",
    },
    {
      question: "How do you handle errors in your React applications?",
    },
    {
      question: "How do you handle errors in your Node.js application?",
    },
    {
      question: "What is CORS and how do you handle it in your application?",
    },
    {
      question:
        "What are some best practices for writing clean and maintainable code in React?",
    },
    { question: "What is version control, and how do you use Git?" },
    {
      question:
        "Explain the basic Git commands: `add`, `commit`, `push`, `pull`.",
    },
    {
      question:
        "What are some common debugging techniques you use when developing with the MERN stack?",
    },
    { question: "Do you have any questions for me?" },
  ],
};

export const INTERVIEWER: CreateAssistantDTO = {
  name: "MockByte Interviewer",
  firstMessage:
    "Hello {{username}}! How are you doing today? Are you ready for the interview on {{position}} role?",
  transcriber: {
    provider: "deepgram",
    model: "nova-2",
    language: "en",
  },
  voice: {
    provider: "11labs",
    voiceId: "sarah",
    stability: 0.4,
    similarityBoost: 0.8,
    speed: 0.9,
    style: 0.5,
    useSpeakerBoost: true,
  },
  model: {
    provider: "openai",
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: `You are a professional job interviewer conducting a real-time voice interview with a candidate. Your goal is to assess their qualifications, motivation, and fit for the role.

        Interview Guidelines:
        Follow the structured question flow:
        {{questions}}

        Engage naturally & react appropriately:
        Listen actively to responses and acknowledge them before moving forward.
        Ask brief follow-up questions if a response is vague or requires more detail.
        Keep the conversation flowing smoothly while maintaining control.
        Be professional, yet warm and welcoming:

        Use official yet friendly language.
        Keep responses concise and to the point (like in a real voice interview).
        Avoid robotic phrasing—sound natural and conversational.
        Answer the candidate’s questions professionally:

        If asked about the role, company, or expectations, provide a clear and relevant answer.
        If unsure, redirect the candidate to HR for more details.

        Conclude the interview properly:
        Thank the candidate for their time.
        Inform them that the company will reach out soon with feedback.
        End the conversation on a polite and positive note.


        - Be sure to be professional and polite.
        - Keep all your responses short and simple. Use official language, but be kind and welcoming.
        - This is a voice conversation, so keep your responses short, like in a real conversation. Don't ramble for too long.`,
      },
    ],
  },
};

export const DUMMY_INTERVIEWS: IInterview[] = [
  {
    id: uuidv4(),
    group: "AI_BASED",
    status: "CREATED",
    role: "MERN Stack Developer",
    type: "TECHNICAL",
    duration: 5,
    topic: null,
    companyName: "Meta",
    experience: 2,
    experienceIn: "YEARS",
    createdAt: new Date(),
    updatedAt: new Date(),
    createdById: "user_001",
    createdByRole: "INTERVIEWER",
    difficulty: "HARD",
    description:
      "Advanced MERN Stack interview focused on real-world project scenarios, optimization techniques, and debugging complex full stack applications.",
    keywords:
      "MERN, React JS, Node JS, Express, MongoDB, Optimization, Debugging",
    companyLogo: null,
    assessmentType: "MCQ_BASED",
    noOfQuestions: 10,
    validateTill: null,
    category: "JOB",
    questions: [
      {
        question:
          "Explain how you would optimize a MongoDB aggregation pipeline for performance.",
        questionType: "OPEN_ENDED",
      },
      {
        question:
          "What are common memory leaks in React and how can you avoid them?",
        questionType: "OPEN_ENDED",
      },
      {
        question:
          "Describe how you would manage environment-specific configurations in a MERN stack application.",
        questionType: "OPEN_ENDED",
      },
      {
        question:
          "How do you structure a large-scale Node.js application and why?",
        questionType: "OPEN_ENDED",
      },
      {
        question:
          "Compare React Query and Redux for data fetching and state management.",
        questionType: "OPEN_ENDED",
      },
    ],
    participants: null,
  },
  {
    id: uuidv4(),
    group: "MANUAL",
    status: "CREATED",
    role: "Next.js Developer",
    type: "TECHNICAL_AND_BEHAVIORAL",
    duration: 5,
    topic: null,
    companyName: "Amazon",
    experience: 1,
    experienceIn: "YEARS",
    createdAt: new Date(),
    updatedAt: new Date(),
    createdById: "user_002",
    createdByRole: "INTERVIEWER",
    difficulty: "MEDIUM",
    description:
      "Balanced interview assessing technical expertise in building SSR and SSG applications using Next.js, along with problem-solving and communication skills.",
    keywords: "Next JS, SSR, SSG, API Routes, Tailwind CSS, Communication",
    companyLogo: null,
    assessmentType: "VOICE_BASED",
    noOfQuestions: 8,
    validateTill: null,
    category: "JOB",
    questions: [
      {
        question: "How do you decide when to use SSR vs SSG in a Next.js app?",
        questionType: "OPEN_ENDED",
      },
      {
        question:
          "Describe your approach to styling a scalable UI with Tailwind CSS.",
        questionType: "OPEN_ENDED",
      },
      {
        question:
          "Tell me about a time you had to explain a complex technical topic to a non-technical stakeholder.",
        questionType: "BEHAVIORAL",
      },
      {
        question: "What is ISR in Next.js and when would you use it?",
        questionType: "OPEN_ENDED",
      },
      {
        question:
          "How do you handle form validation and error management in Next.js apps?",
        questionType: "OPEN_ENDED",
      },
    ],
    participants: null,
  },
  {
    id: uuidv4(),
    group: "AI_BASED",
    status: "CREATED",
    role: "Prisma & Database Integration Developer",
    type: "TECHNICAL",
    duration: 5,
    topic: null,
    companyName: "Netflix",
    experience: 1,
    experienceIn: "YEARS",
    createdAt: new Date(),
    updatedAt: new Date(),
    createdById: "user_003",
    createdByRole: "INTERVIEWER",
    difficulty: "MEDIUM",
    description:
      "Interview focusing on practical knowledge of Prisma ORM, database relationships, query optimization, and integration in full stack apps.",
    keywords:
      "Prisma, PostgreSQL, MongoDB, Database Optimization, ORM, Schema Design",
    companyLogo: null,
    assessmentType: "MCQ_BASED",
    noOfQuestions: 7,
    validateTill: null,
    category: "JOB",
    questions: [
      {
        question: "What are the benefits of using Prisma over raw SQL queries?",
        questionType: "OPEN_ENDED",
      },
      {
        question: "How do you handle many-to-many relationships in Prisma?",
        questionType: "OPEN_ENDED",
      },
      {
        question:
          "Explain how Prisma migrations work and how you would roll back a migration.",
        questionType: "OPEN_ENDED",
      },
      {
        question: "How would you optimize Prisma queries for performance?",
        questionType: "OPEN_ENDED",
      },
      {
        question: "Describe how to seed a database using Prisma.",
        questionType: "OPEN_ENDED",
      },
    ],
    participants: null,
  },
];
