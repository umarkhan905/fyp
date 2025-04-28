import * as z from "zod";

const ProfileSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email({ message: "Invalid email format" }),
  mobile: z.string(),
  companyName: z.string(),
  position: z.string(),
  experience: z.string().min(0, { message: "Experience cannot be negative" }),
  experienceIn: z.string(),
  github: z.string(),
  linkedIn: z.string(),
  location: z.string(),
  bio: z.string().max(350, { message: "Bio must be at most 350 characters" }),
});

const PhoneNumberSchema = z.object({
  mobile: z
    .string()
    .min(11, { message: "Mobile number must be 11 digits" })
    .startsWith("0", {
      message: "Mobile number must start with 0",
    })
    .max(11, { message: "Mobile number must be 11 digits" })
    .regex(/^[0-9]+$/, {
      message: "Mobile number must contain only digits",
    }),
});

const URLSchema = z.object({
  url: z.string().url({ message: "Invalid URL format" }),
});

type ProfileSchemaType = z.infer<typeof ProfileSchema>;

export { ProfileSchema, type ProfileSchemaType, PhoneNumberSchema, URLSchema };
