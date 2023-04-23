//sử dụng codegen để chuyển câu lệnh graphql sang ts
import { gql } from "@apollo/client";
export const LOG_IN = gql`
   mutation login($loginInput:LoginInput!){
        login(
            loginInput:$loginInput
        ){
            Access_Token
        }
   }
`