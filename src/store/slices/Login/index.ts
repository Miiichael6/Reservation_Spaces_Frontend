import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState, iLoginState } from "../../../pages/Login/state";
import { setState } from "../../common/reducers/setState";

export const { reducer: LoginSlice, actions: LoginActions } = createSlice({
  name: "Login",
  initialState,
  reducers: {
    init: () => initialState,
    setState: (state: iLoginState, action: PayloadAction<Partial<iLoginState>> ) => {
      setState(state, action, initialState);
    },
  },
});