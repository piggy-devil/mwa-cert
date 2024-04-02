import NextAuth, { type DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      role: string;
      token: string;
      username: string;
    } & DefaultSession["user"];
  }
}
