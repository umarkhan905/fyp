import * as z from "zod";

const ResetPasswordSchema = z.object({
  token: z.string().nonempty({ message: "Token is required" }),

  password: z
    .string()
    .nonempty({ message: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters long" }),

  confirmPassword: z
    .string()
    .nonempty({ message: "Confirm password is required" })
    .min(6, { message: "Confirm password must be at least 6 characters long" }),
});

type ResetPasswordSchemaType = z.infer<typeof ResetPasswordSchema>;

export { ResetPasswordSchema, type ResetPasswordSchemaType };
