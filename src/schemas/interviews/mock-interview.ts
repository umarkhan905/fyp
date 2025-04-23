import * as z from "zod";

const MockInterviewSchema = z.object({
  type: z.string().nonempty({ message: "Interview Type is required" }),
  role: z.string().nonempty({ message: "Job Role is required" }),
  difficulty: z
    .string()
    .nonempty({ message: "Interview Difficulty is required" }),
  experience: z.string().nonempty({ message: "Experience is required" }),
  experienceIn: z.string().nonempty({ message: "Experience in is required" }),
  numberOfQuestions: z
    .string()
    .nonempty({ message: "Number of Questions is required" }),
  topic: z.string().nonempty({ message: "Topic is required" }),
});

type MockInterviewSchemaType = z.infer<typeof MockInterviewSchema>;

export { MockInterviewSchema, type MockInterviewSchemaType };
