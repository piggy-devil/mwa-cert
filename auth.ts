import NextAuth from "next-auth";
import authConfig from "@/auth.config";
import { getUserByToken } from "./actions/user";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  callbacks: {
    // async signIn({ user }) {
    //   console.log("signIn user: ", user);
    //   return true;
    // },
    async session({ token, session }) {
      if (session.user) {
        if (token.sub) {
          session.user.id = token.id as string;
          session.user.token = token.sub as string;
        }

        if (token.role) {
          session.user.role = token.role as string;
        }

        if (token.username) {
          session.user.username = token.username as string;
        }
      }

      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = await getUserByToken(token.sub);

      if (!existingUser) return token;

      token.id = existingUser._id;
      token.name = existingUser.name;
      token.email = existingUser.email;
      token.username = existingUser.userName;
      token.role = existingUser.role;

      // console.log("token: ", token);

      return token;
    },
  },
  session: {
    strategy: "jwt",
  },
  ...authConfig,
});
