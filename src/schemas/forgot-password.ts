import * as z from "zod";

const ForgotPasswordSchema = z.object({
  email: z
    .string()
    .nonempty({ message: "Email is required" })
    .email({ message: "Invalid email format" }),
});

type ForgotPasswordSchemaType = z.infer<typeof ForgotPasswordSchema>;

export { ForgotPasswordSchema, type ForgotPasswordSchemaType };
