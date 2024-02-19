import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthStateType } from "../types";

const initialState: AuthStateType = {
  isLoggedIn: false,
  username: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoginStatus: (state, action: PayloadAction<AuthStateType>) => {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.username = action.payload.username;
    },
  },
});

export const { setLoginStatus } = authSlice.actions;
export default authSlice.reducer;
