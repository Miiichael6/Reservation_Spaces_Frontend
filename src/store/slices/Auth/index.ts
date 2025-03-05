import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setState } from "../../common/reducers/setState";
import { IUser } from "@/pages/Dashboard/domain/User.entity";
interface iInitialState extends Record<string, unknown> {
  user:  IUser | null,
}

const initialState: iInitialState = {
  user: null,
}
export const { reducer: AuthSlice, actions: AuthActions } = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    init: () => initialState,
    setState: (state: iInitialState, action: PayloadAction<Partial<iInitialState>> ) => {
      setState(state, action, initialState);
    },
  },
});