import * as z from "zod";

const SignInSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .regex(/^\S+$/, { message: "Email cannot contain spaces" })
    .email({ message: "Invalid email format" }),

  password: z.string().min(1, { message: "Password is required" }),
});

type SignInSchemaType = z.infer<typeof SignInSchema>;

export { SignInSchema, type SignInSchemaType };
