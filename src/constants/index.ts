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
