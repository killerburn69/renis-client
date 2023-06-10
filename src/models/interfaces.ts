import { BabyCharacteristics } from "./enum";
import { Expectation, Profile, ProfileImage, User } from "./types";

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
export interface ExpectationResponse {
  getExpectation: Expectation;
}
export interface ProfileUserResponse {
  getCurrentUserProfile: Profile;
}
export interface Profiles {
  Profile_ID: string;
  Profile_Name: string;
  Nick_Name: string;
  Hobby: string;
  Education: string;
  Age: number;
  Characteristics: BabyCharacteristics;
  Description: string;
  User: User;
  Profile_Images: [ProfileImage];
}
export interface ProfileImages {
  Profile_Images_ID: string;
  Image_Url: string;
  isAvatar: boolean;
}
