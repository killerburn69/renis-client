import { gql } from "@apollo/client";
export const ACTIVE_ACCOUNT = gql`
   mutation activateAccount($activateInput:ActivateAccountInput!){
        activateAccount(
            activateInput:$activateInput
        ){
            Message
        }
   }
`