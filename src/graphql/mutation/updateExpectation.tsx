import { gql } from "@apollo/client";
export const UPDATE_EXPECTATION = gql`
  mutation updateExpectation(
    $updateExpectation: UpdateExpectationInput!
  ) {
    updateExpectation(updateExpectation: $updateExpectation) {
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
