import { NextAuthConfig, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { comparePassword } from "@/utils/compare-password";
import { SignInSchema } from "@/schemas/sign-in";
import { getUserByEmail } from "@/actions/user-actions";
import { Role } from "@/generated/prisma";

export const authOptions: NextAuthConfig = {
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.verified = user.verified;
        token.coins = user.coins;
        token.role = user.role;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.verified = token.verified as boolean;
        session.user.coins = token.coins as number;
        session.user.role = token.role as Role;
        session.user.firstName = token.firstName as string;
        session.user.lastName = token.lastName as string;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/sign-in",
  },
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials): Promise<User | null> => {
        const validatedFields = SignInSchema.safeParse(credentials);
        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          const user = await getUserByEmail(email);
          if (!user || !user.password) return null;

          if (!user.verified) {
            throw new Error("Please verify your email");
          }

          const isPasswordCorrect = await comparePassword(
            password,
            user.password
          );
          if (!isPasswordCorrect) return null;

          return {
            id: user.id,
            email: user.email,
            firstName: user.firstName as string,
            lastName: user.lastName as string,
            role: user.role as Role,
            coins: user.coins,
            verified: user.verified,
          };
        }

        return null;
      },
    }),
  ],
};
