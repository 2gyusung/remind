"use client";

import {
  CreateBoardDocument,
  DeleteBoardDocument,
  FetchBoardsDocument,
  FetchBoardsQuery,
} from "@/commons/graphql/graphql";
import { useQuery, gql, useMutation } from "@apollo/client";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

const 나의그래프큐엘셋팅 = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage() {
  const { data } = useQuery(FetchBoardsDocument);

  const [deleteBoard] = useMutation(DeleteBoardDocument);
  const [나의함수] = useMutation(CreateBoardDocument);

  const onClickDelete = (boardId: string) => () => {
    void deleteBoard({
      variables: { boardId },
      //   refetchQueries: [{ query: FETCH_BOARDS }],
      update(cache, { data }) {
        cache.modify<FetchBoardsQuery>({
          fields: {
            fetchBoards: (prev, { readField }) => {
              console.log(prev);
              const deletedId = data?.deleteBoard; // 삭제 완료된 ID
              const filteredPrev = prev.filter(
                (el) => readField("_id", el) !== deletedId
              );
              return [...filteredPrev]; // 삭제된ID를 제외한 나머지 9개만 리턴
            },
          },
        });
      },
    });
  };

  const onClickSubmit = () => {
    void 나의함수({
      variables: {
        createBoardInput: {
          writer: "철수",
          password: "1234",
          title: "제목입니다~~",
          contents: "내용입니다@@@",
        },
      },
      //   refetchQueries: [{ query: FETCH_BOARDS }],
      update(cache, { data }) {
        cache.modify<FetchBoardsQuery>({
          fields: {
            fetchBoards: (prev) => {
              return [data?.createBoard, ...prev];
            },
          },
        });
      },
    });
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
          <button onClick={onClickDelete(el._id)}>삭제하기</button>
        </div>
      ))}
      <button onClick={onClickSubmit}>등록하기</button>
    </div>
  );
}
