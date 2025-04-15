import { Role } from "@/generated/prisma";
import "next-auth";
import { type DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    id?: string;
    verified?: boolean;
    coins?: number;
    role?: Role;
    firstName?: string;
    lastName?: string;
  }

  interface Session {
    user: User & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    verified?: boolean;
    coins?: number;
    role?: Role;
    firstName?: string;
    lastName?: string;
  }
}
