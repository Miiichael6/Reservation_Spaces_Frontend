import { PayloadAction } from "@reduxjs/toolkit";

export function setState<T extends Record<string, unknown>>(
  state: T,
  action: PayloadAction<Partial<T>>,
  initialState: T
) {
  for (const [key, value] of Object.entries(action.payload)) {
    if (key in initialState) {
      state[key as keyof T] = value as T[keyof T];
    }
  }
}
