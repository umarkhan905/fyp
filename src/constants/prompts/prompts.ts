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
},{
}],
codeEditor: true or false,
}
The goal is to create a structured, relevant, and time-optimized interview plan for a {{role}} role.`;
