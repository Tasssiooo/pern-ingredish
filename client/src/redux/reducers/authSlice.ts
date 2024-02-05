import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  authData: any;
}

const initialState: AuthState = {
  authData: 0,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    auth: (state, action: PayloadAction<any>) => {
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
