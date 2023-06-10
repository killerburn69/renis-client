import { QueryResult } from "@apollo/client";
import { BabyCharacteristics, Role } from "./enum";
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
export type UserId = {
  userId: string | undefined;
};
export type USERID = {
  userID: QueryResult<User, Email>;
};
export type Profile = {
  Profile_ID: string;
  Profile_Name: string;
  Nick_Name: string;
  Hobby: string;
  Education: string;
  Age: number;
  Characteristics: BabyCharacteristics;
  Description: string;
  User: User;
  Map: string;
  Profile_Images: [ProfileImage];
};
export type UpdateProfileInput = {
  Map: string;
  Hobby: string;
  Education: string;
  Description: string;
};
export type Expectation = {
  Expectation_ID: string;
  Age: number;
  Characteristics: BabyCharacteristics;
  Distance: number;
  Paid: number;
  Type: string;
};
export type UpdateExpectationInput = {
  Age: number;
  Characteristics: BabyCharacteristics;
  Distance: number;
  Paid: number;
  Type: string;
  Expectation_ID: string;
};
export type UploadImageInput = {
  Avatar: any;
  Profile_Images: [any];
};
export type ProfileImage = {
  Profile_Images_ID: string;
  Image_Url: string;
  isAvatar: boolean;
};
