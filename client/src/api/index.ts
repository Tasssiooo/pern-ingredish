import axios from "axios";
import { z } from "zod";

import { signUpSchema, signInSchema } from "@/schemas";

const API = axios.create({ baseURL: "http://localhost:3000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')!).token}`;
  }

  return req;
});

export const signIn = (formData: z.infer<typeof signInSchema>) =>
  API.post("/user/signin", formData);
export const signUp = (formData: z.infer<typeof signUpSchema>) =>
  API.post("/user/signup", formData);
