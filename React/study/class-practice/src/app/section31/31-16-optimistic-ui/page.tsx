"use client";

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
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: "63fdcd44aef9f000281b2f8d" },
  });

  const [likeBoard] = useMutation(LIKE_BOARD);

  const onClickLike = () => {
    void likeBoard({
      variables: {
        boardId: "63fdcd44aef9f000281b2f8d",
      },
      //   refetchQueries: [{}],
      optimisticResponse: {
        likeBoard: (data?.fetchBoard.likeCount ?? 0) + 1,
      },
      update: (cache, { data }) => {
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: "63fdcd44aef9f000281b2f8d" },
          data: {
            fetchBoard: {
              _id: "63fdcd44aef9f000281b2f8d",
              __typename: "Board",
              likeCount: data?.likeBoard, // 좋아요 갯수(6)
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
