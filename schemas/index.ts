import { z } from "zod";

export const LoginSchema = z.object({
  userName: z.string().min(1, {
    message: "User is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});

export const RegisterSchema = z.object({
  userName: z.string().min(1, {
    message: "User is required",
  }),
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(6, {
    message: "Minimum 6 characters required",
  }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
  role: z.string().default("user"),
});
