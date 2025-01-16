"use client";

import {
  FetchBoardWithLikeDocument,
  LikeBoardDocument,
} from "@/commons/graphql/graphql";
import { gql, useMutation, useQuery } from "@apollo/client";

const FETCH_BOARD = gql`
  query fetchBoardWithLike($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export default function OptimisticUiPage() {
  const { data } = useQuery(FetchBoardWithLikeDocument, {
    variables: { boardId: "66fa65fa9dcdac0029c47ebb" },
  });

  const [likeBoard] = useMutation(LikeBoardDocument);

  const onClickLike = () => {
    void likeBoard({
      variables: {
        boardId: "66fa65fa9dcdac0029c47ebb",
      },
      //   refetchQueries: [{}],
      optimisticResponse: {
        likeBoard: (data?.fetchBoard.likeCount ?? 0) + 1,
      },
      update: (cache, { data }) => {
        cache.writeQuery({
          query: FetchBoardWithLikeDocument,
          variables: { boardId: "66fa65fa9dcdac0029c47ebb" },
          data: {
            fetchBoard: {
              _id: "66fa65fa9dcdac0029c47ebb",
              __typename: "Board",
              likeCount: data?.likeBoard ?? 0, // 좋아요 갯수(6)
            },
          },
        });
      },
    });
  };

  return (
    <>
      <div>현재카운트(좋아요): {data?.fetchBoard.likeCount}</div>
      <button onClick={onClickLike}>좋아요 올리기!!</button>
    </>
  );
}
