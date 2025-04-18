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
