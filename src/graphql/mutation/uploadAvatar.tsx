import { gql } from "@apollo/client";
export const UPLOAD_AVATAR = gql`
  mutation uploadAvatar($images: UploadImageInput!) {
    uploadAvatar(images: $images) {
      Image_Url
      isAvatar
      Profile_Images_ID
    }
  }
`;
