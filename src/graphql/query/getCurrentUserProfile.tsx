import { gql } from "@apollo/client";
export const GET_CURRENT_USER_PROFILE = gql`
  query getCurrentUserProfile {
    getCurrentUserProfile {
      Profile_ID
      Profile_Name
      Nick_Name
      Hobby
      Education
      Age
      Characteristics
      Description
      Map
    }
  }
`;
