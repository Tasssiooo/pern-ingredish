import * as api from "../../api/index";
import { auth } from "../reducers/authSlice";

import type { SignInSchema, SignUpSchema } from "@/schemas";
import type { UserData } from "@/types";

export const signIn =
  (formData: SignInSchema, pathname: string) => async (dispatch: any) => {
    try {
      const { data } = await api.signIn(formData);
      const userData: UserData = {
        result: {
          user_id: data.result.user_id,
          username: data.result.username,
          email: data.result.email,
        },
        token: data.token,
      };

      dispatch(auth(userData));

      window.location.pathname = pathname;
    } catch (error) {
      console.log(error);
    }
  };

export const signUp =
  (formData: SignUpSchema, pathname: string) => async (dispatch: any) => {
    try {
      const { data } = await api.signUp(formData);
      const userData: UserData = {
        result: {
          user_id: data.result.user_id,
          username: data.result.username,
          email: data.result.email,
        },
        token: data.token,
      };

      dispatch(auth(userData));

      window.location.pathname = pathname;
    } catch (error) {
      console.log(error);
    }
  };
