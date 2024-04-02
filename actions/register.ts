"use server";

import * as z from "zod";

import { RegisterSchema } from "@/schemas";
// import { getUserByEmail } from "@/data/user";
// import { sendVerificationEmail } from "@/lib/mail";
// import { generateVerificationToken } from "@/lib/tokens";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, password, name, userName, role } = validatedFields.data;

  try {
    const res = await fetch(`${process.env.BACKEND_API}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        name: name,
        userName: userName,
        password: password,
        role: role,
      }),
    });

    if (!res.ok) {
      return { error: res.statusText };
    }

    return { success: "User Created!." };
  } catch (error) {
    console.log(error);
    return { error: "Register Fail!." };
  }
};
