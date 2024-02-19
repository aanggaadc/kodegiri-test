export type UserType = {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
};

export type AuthStateType = {
  isLoggedIn: boolean;
  username: string;
};

export type RegisterType = {
  name: string;
  email: string;
  phoneCode: string;
  phoneNumber: string;
  password: string;
};
