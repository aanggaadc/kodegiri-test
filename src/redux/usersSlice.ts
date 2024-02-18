// src/redux/userSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type User = {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
};

type UserState = {
  users: User[];
};

const getLocalStorageData = (): User[] => {
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
    setUsers: (state, action: PayloadAction<User>) => {
      state.users = [...state.users, action.payload];
      localStorage.setItem("userList", JSON.stringify(state.users));
    },
  },
});

export const { setUsers } = usersSlice.actions;
export default usersSlice.reducer;
