import * as z from "zod";

const IntervieweeSignupSchema = z.object({
  firstName: z
    .string()
    .nonempty({ message: "First name is required" })
    .regex(/^\S+$/, { message: "First name cannot contain spaces" })
    .min(3, {
      message: "First name must be at least 3 characters long",
    })
    .regex(/^[a-zA-Z]+$/, {
      message: "First name contains letters only",
    }),

  lastName: z
    .string()
    .regex(/^\S+$/, { message: "Last name cannot contain spaces" })
    .regex(/^[a-zA-Z]+$/, {
      message: "Last name contains letters only",
    }),

  email: z
    .string()
    .nonempty({ message: "Email is required" })
    .regex(/^\S+$/, { message: "Email cannot contain spaces" })
    .email({ message: "Invalid email format" }),

  password: z
    .string()
    .nonempty({ message: "Password is required" })
    .regex(/^\S+$/, { message: "Password cannot contain spaces" })
    .min(8, {
      message: "Password must be at least 8 characters long",
    })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      {
        message:
          "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character",
      }
    ),
});

type IntervieweeSignupSchemaType = z.infer<typeof IntervieweeSignupSchema>;

export { IntervieweeSignupSchema, type IntervieweeSignupSchemaType };
