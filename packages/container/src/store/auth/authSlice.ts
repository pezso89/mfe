import { createSlice } from "@reduxjs/toolkit";

export type AuthState = {
  isLoggedIn: boolean;
};

export const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false } as AuthState,
  reducers: {
    signIn: (state) => {
      state.isLoggedIn = true;
    },
    signOut: (state) => {
      state.isLoggedIn = false;
    }
  }
});

export const { signIn, signOut } = authSlice.actions;
export default authSlice.reducer;