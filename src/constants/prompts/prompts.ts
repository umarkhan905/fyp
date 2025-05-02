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
Read all the keywords provided by user and find all the unique keywords and separate them by |.
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
    keywords: "keyword1 | keyword2 | keyword3",
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
Read all the keywords provided by user and find all the unique keywords and separate them by |.
Format:
{
  interviewQuestions: [
    {
      question: "Question text",
      options: [
        {
          option: "Option A",
          isCorrect: boolean      
        }, ...
      ], // array of 4 options
      answer: "Option A" // or "Option B" or "Option C" or "Option D",
      explanation: "Explanation text"
      questionType: "type of question" // "technical","behavioral","problem solving" etc
    },
    {
      ...
    }
  ],
  keywords: "keyword1 | keyword2 | keyword3"
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
Also create description consisting of 3-4 sentences and some related keywords in string separated by |.
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
    description: "description",
    keywords: "keyword1 | keyword2 | keyword3"
}
The goal is to create a structured, relevant, and time-optimized interview plan for a {{role}} role.`;

export const CREATE_FEEDBACK_PROMPT = `
    You are a professional interviewer analyzing a mock interview. Your task is to evaluate the candidate based on structured categories. Be thorough and detailed in your analysis. Don't be lenient with the candidate. If there are mistakes or areas for improvement, point them out.
    Transcript:
    {{transcript}}

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
         "name": "Technical Knowledge",
         "score": score as number,
         "comment": "comment"
       },
       ...
      ],
      "summary": "summary",
      "strengths": "strengths",
      "weaknesses": "weaknesses",
      "improvements": "improvements",
      "assessment": "assessment"
      "recommendedForJob": true or false
    }`;

export const CREATE_MCQ_FEEDBACK_PROMPT = `
You are an expert interview evaluator reviewing a multiple-choice based technical interview. Based on the provided user answers, correct answers, and any available timing data, generate a detailed feedback report.

Input:
- Questions: A list of questions, thier correct answer, explanation, question type, and the user's selected answer.
- Total Questions: {{totalQuestions}}
- Correct Answers: {{correctAnswers}}
- Wrong Answers: {{wrongAnswers}}
- Accuracy: {{accuracy}}%
- Time Taken: {{totalTime}} (HOURS:MINUTES:SECONDS)

Your task:
- Evaluate the candidate across the following categories:
    - **Technical Knowledge**: Accuracy and difficulty of answered questions.
    - **Problem-Solving**: Ability to choose the best solution among options.
    - **Time Management**: How efficiently time was used.
    - **Total Rating**: An overall score out of 10 based on performance.

Rating Evaluations for Job Recommendation:
    - 0-4: Not recommended for the role.
    - 5-7: Potential suitable with further evaluations.
    - 8-10: Recommended for the role.    

Output:
- Provide a short summary (3–4 sentences).
- Mention strengths and weaknesses.
- Suggest areas for improvement.
- Give a final assessment and say whether the candidate is recommended for the role.

Respond strictly in this JSON format:

{
  "totalRating": number,
  "rating": [
    {
      "name": "Technical Knowledge",
      "score": number,
      "comment": "..."
    },
    ...
  ],
  "summary": "...",
  "strengths": "...",
  "weaknesses": "...",
  "improvements": "...",
  "assessment": "...",
  "recommendedForJob": true or false
}
`;
