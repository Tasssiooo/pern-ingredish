import { UserData } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  authData: UserData | null;
}

const initialState: AuthState = {
  authData: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    auth: (state, action: PayloadAction<UserData>) => {
      localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));

      return {
        ...state,
        authData: action?.payload,
        loading: false,
        errors: null,
      };
    },
    logout: (state) => {
      localStorage.clear();

      return { ...state, authData: null, loading: false, errors: null };
    },
  },
});

export const { auth, logout } = authSlice.actions;

export default authSlice.reducer;
