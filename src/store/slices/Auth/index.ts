import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "../../../pages/Login/infrastructure/state";

export const { reducer: AuthSlice, actions } = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    setForm: (state, action: PayloadAction<{ username: string; password: string; }> ) => {
      state.loginForm.username = action.payload.username as string;
      state.loginForm.password = action.payload.password as string;
    },
    // login: (state, action: PayloadAction<{ username: string; password: string; }> ) => {
      // state.loginForm.username = action.payload.username as string;
      // state.loginForm.password = action.payload.password as string;
      // state.isAuth = true;
    // },
    logout: (state) => {
      state.loginForm.username = "";
      state.loginForm.password = "";
      state.isAuth = false;
    },
  },
});

export const { logout, setForm } = actions;
