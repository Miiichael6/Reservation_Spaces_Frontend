import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setState } from "../../common/reducers/setState";
import { iDashboardState, initialState } from "@/pages/Dashboard/state";

export const { reducer: DashboardSlice, actions: DashboardActions } = createSlice({
  name: "Dashboard",
  initialState,
  reducers: {
    init: () => initialState,
    setState: (state: iDashboardState, action: PayloadAction<Partial<iDashboardState>> ) => {
      setState(state, action, initialState);
    },
  },
});