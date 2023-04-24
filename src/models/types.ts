import { Role } from "./enum";

export type User = {
  USER_ID: string;
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
  Email: string;
  Otp: string;
};
