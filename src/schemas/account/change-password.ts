import * as z from "zod";

const ChangePasswordSchema = z.object({
  currentPassword: z
    .string()
    .nonempty({ message: "Current password is required" })
    .min(8, {
      message: "Current Password must be at least 8 characters long",
    }),
  newPassword: z
    .string()
    .nonempty({ message: "New Password is required" })
    .regex(/^\S+$/, { message: "New Password cannot contain spaces" })
    .min(8, {
      message: "New Password must be at least 8 characters long",
    })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      {
        message:
          "New Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character",
      }
    ),
  confirmPassword: z
    .string()
    .nonempty({ message: "Confirm password is required" }),
});

type ChangePasswordSchemaType = z.infer<typeof ChangePasswordSchema>;

export { ChangePasswordSchema, type ChangePasswordSchemaType };
