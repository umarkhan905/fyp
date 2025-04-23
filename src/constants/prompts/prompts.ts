export const CREATE_INTERVIEW_PROMPT = `You are an expert technical interviewer.
Based on the following inputs, generate a well-structured list of high-quality interview questions:
Job Role: {{role}}
Job Description: {{description}}
Interview Duration: {{duration}}
Interview Experience: {{experience}}
Interview Difficulty: {{difficulty}}
Job Related Keywords: {{keywords}}
Your task:
Analyze the job role, description, experience, difficulty and job related keywords of the interview.
Generate a list of interview questions depends on interview duration
Adjust the number and depth of questions to match the interview duration.
Ensure the questions match the tone and structure of a real-life {{type}} interview.
Format your response in JSON format with array list of questions.
Just the questions, no other text. Questions has to read by AI voice agent.
Also let me know either code editor or IDE is used in the interview.
format: {
    interviewQuestions=[
        {
            question:",
            codeEditorRequired: true or false,
            questionType: "type of question" // "technical","behavioral","problem solving" etc
        },
        {
            ...
        }
    ],
}
The goal is to create a structured, relevant, and time-optimized interview plan for a {{role}} role.`;

export const CREATE_MCQ_INTERVIEW_PROMPT = `You are an expert technical interviewer.
Based on the following inputs, generate a well-structured list of high-quality multiple-choice questions (MCQs) for an interview:
Job Role: {{role}}
Job Description: {{description}}
Interview Duration: {{duration}}
Interview Experience: {{experience}}
Interview Difficulty: {{difficulty}}
Job Related Keywords: {{keywords}}
Your task:
Analyze the job role, description, experience, difficulty, and job-related keywords of the interview.
Generate a list of MCQs based on the interview duration.
Each MCQ should include:
- A question
- Four options in string separated by comma
- The correct answer
- Explain the correct answer
- What is a type of question
Adjust the number and depth of questions to match the interview duration.
Ensure the questions match the tone and structure of a real-life {{type}} interview.
Format your response in JSON format with an array of questions.
Just the questions, no other text. Questions have to be read by an AI voice agent.
Format:
{
  interviewQuestions: [
    {
      question: "Question text",
      options: "Option A", "Option B", "Option C", "Option D",
      answer: "Option A" // or "Option B" or "Option C" or "Option D",
      explanation: "Explanation text"
      questionType: "type of question" // "technical","behavioral","problem solving" etc
    },
    {
      ...
    }
  ],
}
The goal is to create a structured, relevant, and time-optimized MCQ-based interview plan for a {{role}} role.`;

export const CREATE_MOCK_INTERVIEW_PROMPT = `You are an expert technical interviewer.
Based on the following inputs, generate a well-structured list of high-quality interview questions:
Job Role: {{role}}
Interview Experience: {{experience}}
Interview Difficulty: {{difficulty}}
Interview Topic: {{topic}}
No of Questions: {{numberOfQuestions}}
Your task:
Analyze the job role, experience, difficulty, and interview topic of the interview.
Generate a list of interview questions depends on number of questions.
Ensure the questions match the tone and structure of a real-life {{type}} interview.
Format your response in JSON format with array list of questions.
Just the questions, no other text. Questions has to read by AI voice agent.
Also let me know either code editor or IDE is used in the interview.
format: {
    interviewQuestions=[
        {
            question:",
            codeEditorRequired: true or false,
            questionType: "type of question" // "technical","behavioral","problem solving" etc
        },
        {
            ...
        }
    ],
}
The goal is to create a structured, relevant, and time-optimized interview plan for a {{role}} role.`;
