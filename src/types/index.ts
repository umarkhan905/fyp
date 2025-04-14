import { Role } from "@/generated/prisma";

type ICreateUser = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  companyName?: string;
  position?: string;
  verificationToken?: string;
  verificationTokenExpiresAt?: Date;
  role?: Role;
};

export type { ICreateUser };
