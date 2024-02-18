import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  isLoggedIn: boolean;
  username: string;
};

const initialState: AuthState = {
  isLoggedIn: false,
  username: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoginStatus: (state, action: PayloadAction<AuthState>) => {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.username = action.payload.username;
    },
  },
});

export const { setLoginStatus } = authSlice.actions;
export default authSlice.reducer;
