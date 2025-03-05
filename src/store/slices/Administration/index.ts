import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setState } from "../../common/reducers/setState";
import { iAdministrationState, initialState } from "@/pages/Administration/state";

export const { reducer: AdministrationSlice, actions: AdministrationActions } = createSlice({
  name: "Administration",
  initialState,
  reducers: {
    init: () => initialState,
    setState: (state: iAdministrationState, action: PayloadAction<Partial<iAdministrationState>> ) => {
      setState(state, action, initialState);
    },
  },
});