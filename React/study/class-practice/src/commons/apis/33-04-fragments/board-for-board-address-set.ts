import { gql } from "@apollo/client";

export const BoardForBoardAddressSet = gql`
  fragment BoardForBoardAddressSet on Board {
    boardAddress {
      address
      addressDetail
      zipcode
    }
  }
`;
