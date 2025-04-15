import * as z from "zod";

const ResetPasswordSchema = z.object({
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

  confirmPassword: z
    .string()
    .nonempty({ message: "Confirm Password is required" })
    .regex(/^\S+$/, { message: "Confirm Password cannot contain spaces" }),
});

ResetPasswordSchema.refine((data) => data.password !== data.confirmPassword, {
  path: ["confirmPassword"],
  message: "Passwords do not match",
});

type ResetPasswordSchemaType = z.infer<typeof ResetPasswordSchema>;

export { ResetPasswordSchema, type ResetPasswordSchemaType };
