import { gql } from "@apollo/client";
export const GET_USERID_BY_EMAIL = gql`
  query getUserByEmail($email: String!) {
    getUserByEmail(email: $email) {
      User_ID
    }
  }
`;
