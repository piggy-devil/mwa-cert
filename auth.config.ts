import type { NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { LoginSchema } from "@/schemas";

export default {
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { userName, password } = validatedFields.data;

          try {
            const res = await fetch(`${process.env.BACKEND_API}/login`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                // 'API-Key': process.env.DATA_API_KEY!,
              },
              body: JSON.stringify({ userName: userName, password: password }),
            });

            // console.log("res :", res);
            if (!res.ok) {
              console.log("error: ", res.statusText);
              return null;
            }
            const userLogin = await res.json();
            const user = {
              id: userLogin.token,
            };

            return user;
          } catch (error) {
            console.log(error);
          }
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
