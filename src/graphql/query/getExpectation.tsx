import { gql } from "@apollo/client";
export const GET_EXPECTATION = gql`
  query getExpectation($userId: String!) {
    getExpectation(userId: $userId) {
      Expectation_ID
      Age
      Characteristics
      Distance
      Paid
      Type
      Description
    }
  }
`;
