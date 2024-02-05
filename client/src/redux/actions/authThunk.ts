import type { SignInSchema, SignUpSchema } from "@/schemas";
import * as api from "../../api/index";
import { auth } from "../reducers/authSlice";

export const signIn = (formData: SignInSchema, pathname: string) => async (dispatch: any) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch(auth(data));

    window.location.pathname = pathname;
  } catch (error) {
    console.log(error);
  }
};

export const signUp = (formData: SignUpSchema, pathname: string) => async (dispatch: any) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch(auth(data));

    window.location.pathname = pathname;
  } catch (error) {
    console.log(error);
  }
};
