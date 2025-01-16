import { gql } from "@apollo/client";
import { BoardForLikeSet } from "../33-04-fragments/board-for-like-set";
import { BoardForBoardAddressSet } from "../33-04-fragments/board-for-board-address-set";

// 1. 프레그먼트를 하나로 묶는 기본 방법
// export const FETCH_BOARDS = gql`
//   fragment BoardForBoardAddressSet on Board {
//     boardAddress {
//       address
//       addressDetail
//       zipcode
//     }
//   }

//   fragment BoardForLikeSet on Board {
//     likeCount
//     dislikeCount
//   }

//   query fetchBoards(
//     $isBoardForLikeSet: Boolean = false
//     $isBoardForBoardAddressSet: Boolean = false
//   ) {
//     fetchBoards {
//       _id
//       writer
//       title
//       contents

//       ...BoardForLikeSet @include(if: $isBoardForLikeSet)
//       ...BoardForBoardAddressSet @include(if: $isBoardForBoardAddressSet)
//     }
//   }
// `;

// 2. 프레그먼트를 분리하여 결합하는 방법
export const FETCH_BOARDS = gql`
  ${BoardForLikeSet}
  ${BoardForBoardAddressSet}

  query fetchBoards(
    $mysearch: String
    $mypage: Int
    $isBoardForLikeSet: Boolean = false
    $isBoardForBoardAddressSet: Boolean = false
  ) {
    fetchBoards(search: $mysearch, page: $mypage) {
      _id
      writer
      title
      contents

      ...BoardForLikeSet @include(if: $isBoardForLikeSet)
      ...BoardForBoardAddressSet @include(if: $isBoardForBoardAddressSet)
    }
  }
`;
