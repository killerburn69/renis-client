import { gql } from "@apollo/client";
export const SIGN_UP = gql`
   mutation signup($signupInput:SignupInput!){
        signup(
            signupInput:$signupInput
        ){
            Access_Token
        }
   }
`