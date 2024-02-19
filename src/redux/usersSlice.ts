// src/redux/userSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../types";

type UserState = {
  users: UserType[];
};

const getLocalStorageData = (): UserType[] => {
  const localStorageData = localStorage.getItem("userList");
  return localStorageData ? JSON.parse(localStorageData) : [];
};

const initialState: UserState = {
  users: getLocalStorageData(),
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<UserType>) => {
      state.users = [...state.users, action.payload];
      localStorage.setItem("userList", JSON.stringify(state.users));
    },
  },
});

export const { setUsers } = usersSlice.actions;
export default usersSlice.reducer;
