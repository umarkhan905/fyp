import * as z from "zod";

const VerificationTokenSchema = z.object({
  identifier: z.string().nonempty({ message: "Identifier is required" }),
  token: z
    .string()
    .nonempty({ message: "Token is required" })
    .length(6, { message: "Token must be 6 characters long" }),
});

type VerificationTokenSchemaType = z.infer<typeof VerificationTokenSchema>;

export { VerificationTokenSchema, type VerificationTokenSchemaType };
