"use client";

import { useQuery, gql, useApolloClient } from "@apollo/client";
import { useRouter } from "next/navigation";
import _ from "lodash";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
    }
  }
`;

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage() {
  const { data } = useQuery(FETCH_BOARDS);

  const router = useRouter();
  const client = useApolloClient();

  const prefetchBoardDebounce = _.debounce((boardId) => {
    client.query({
      query: FETCH_BOARD,
      variables: { boardId },
    });
  }, 200);

  const prefetchBoard = (boardId) => async () => {
    prefetchBoardDebounce(boardId);
  };

  const onClickMove = (boardId) => () => {
    void router.push(`/section31/31-18-data-prefetch-moved/${boardId}`);
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span
            style={{ margin: "10px" }}
            onMouseOver={prefetchBoard(el._id)}
            onClick={onClickMove(el._id)}
          >
            {el.title}
          </span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
    </div>
  );
}
