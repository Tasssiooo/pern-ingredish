import { z } from "zod";

const signInSchema = z.object({
  email: z
    .string()
    .email({ message: "It must be a valid email!" })
    .min(11)
    .max(50),
  password: z
    .string()
    .min(1, "Password is required!")
    .min(8, "Password must have more than 8 characters!"),
});

const signUpSchema = z
  .object({
    username: z.string().min(1, { message: "Username is required!" }).max(255),
    email: z
      .string()
      .email({ message: "It must be a valid email!" })
      .min(11)
      .max(50),
    password: z
      .string()
      .min(1, "Password is required!")
      .min(8, "Password must have more than 8 characters!"),
    confirmPassword: z.string().min(1, "Password confirmation is required!"),
  })
  .required()
  .refine(
    (data) =>
      /(?=.*[!@#$%^&*()])(?=.*[0-9].*[0-9].*[0-9]).{8,}/.test(data.password),
    {
      path: ["password"],
      message:
        "Your password must have at least: 8 characters, 1 special character and 3 numbers!",
    }
  )
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password do not match!",
  });

export type SignInSchema = z.infer<typeof signInSchema>;
export type SignUpSchema = z.infer<typeof signUpSchema>;

export { signInSchema, signUpSchema };
