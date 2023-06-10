import { gql } from "@apollo/client";
export const UPDATE_PROFILE_INFO = gql`
  mutation updateProfileInfo(
    $updateProfileInput: UpdateProfileInput!
  ) {
    updateProfileInfo(updateProfileInput: $updateProfileInput) {
      Profile_ID
      Profile_Name
      Hobby
      Education
      Description
    }
  }
`;
