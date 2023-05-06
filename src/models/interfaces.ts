import { User } from "./types";

export interface ChildrenProps {
  children: React.ReactNode;
}
export interface JwtPayload {
  Access_Token: string;
  User: User;
}
export interface ActivateResponse {
  Message: string;
}
export interface ForgotPassResponse {
  Message: string;
}
export interface UserIdResponse {
  getUserByEmail: User;
}
