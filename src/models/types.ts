import { QueryResult } from "@apollo/client";
import { Role } from "./enum";

export type User = {
  User_ID: string;
  Email: string;
  Password: string;
  Otp: string;
  Reset_Password_Otp: string;
  isActive: boolean;
  Role: Role;
  isBlocked: boolean;
};
export type LoginInput = {
  Email: string;
  Password: string;
};
export type SignupInput = {
  Email: string;
  Password: string;
  Confirm_Password: string;
  Role: Role;
};

export type ActivateAccountInput = {
  User_ID: string;
  Otp: string;
};
export type ResetPasswordInput = {
  Otp: string;
  newPassword: string;
  userId: string;
};
export type Email = {
  email: string;
};
export type USERID = {
  userID: QueryResult<User, Email>;
};
