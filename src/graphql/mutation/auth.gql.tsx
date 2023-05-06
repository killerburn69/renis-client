import { gql } from "@apollo/client";
export const LOG_IN_MUTATION = gql`
  mutation login($loginInput: LoginInput!) {
    login(loginInput: $loginInput) {
      Access_Token
    }
  }
`;

export const ACTIVE_ACCOUNT_MUTATION = gql`
  mutation activateAccount($activateInput: ActivateAccountInput!) {
    activateAccount(activateInput: $activateInput) {
      Message
    }
  }
`;

export const SIGN_UP_MUTATION = gql`
  mutation signup($signupInput: SignupInput!) {
    signup(signupInput: $signupInput) {
      Access_Token
    }
  }
`;

export const FORGET_PASSWORD_MUTATION = gql`
  mutation forgotPassword($email: String!) {
    forgotPassword(email: $email) {
      Message
    }
  }
`;

export const RESET_PASSWORD_MUTATION = gql`
  mutation resetPassword($resetPasswordInput: ResetPasswordInput!) {
    resetPassword(resetPasswordInput: $resetPasswordInput) {
      User_ID
    }
  }
`;
