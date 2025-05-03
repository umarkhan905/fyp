import * as z from "zod";

const MCQBasedInterviewSchema = z.object({
  type: z.string().nonempty({ message: "Interview Type is required" }),
  role: z.string().nonempty({ message: "Job Role is required" }),
  description: z.string().nonempty({ message: "Job Description is required" }),
  difficulty: z
    .string()
    .nonempty({ message: "Interview Difficulty is required" }),
  experience: z.string().nonempty({ message: "Experience is required" }),
  experienceIn: z.string().nonempty({ message: "Experience in is required" }),
  keywords: z
    .string()
    .nonempty({ message: "Please enter at least one keyword" }),
  numberOfQuestions: z
    .string()
    .nonempty({ message: "Number of Questions is required" }),
});

type MCQBasedInterviewSchemaType = z.infer<typeof MCQBasedInterviewSchema>;

export { MCQBasedInterviewSchema, type MCQBasedInterviewSchemaType };
