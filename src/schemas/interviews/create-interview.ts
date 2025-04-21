import * as z from "zod";

const CreateInterviewSchema = z.object({
  interviewType: z.string().nonempty({ message: "Interview type is required" }),
  jobTitle: z.string().nonempty({ message: "Job Title is required" }),
  jobDescription: z.string().nonempty({ message: "Description is required" }),
  experience: z
    .string()
    .nonempty({ message: "Experience is required" })
    .min(0, {
      message: "Experience cannot be negative",
    }),
  experienceIn: z.string().nonempty({ message: "Experience in required" }),
  interviewDifficulty: z
    .string()
    .nonempty({ message: "Difficulty is required" }),
  interviewDuration: z.string().nonempty({ message: "Duration is required" }),
});

type CreateInterviewSchemaType = z.infer<typeof CreateInterviewSchema>;

export { CreateInterviewSchema, type CreateInterviewSchemaType };
