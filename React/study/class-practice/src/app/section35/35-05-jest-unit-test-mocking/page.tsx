"use client";

import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import type { ChangeEvent } from "react";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [나의함수] = useMutation(나의그래프큐엘셋팅);

  const onClickSubmit = async () => {
    try {
      const result = await 나의함수({
        variables: {
          // variables 이게 $ 역할을 함
          createBoardInput: {
            writer,
            title,
            contents,
            password: "1234",
          },
        },
      });
      console.log(result);
      const boardId = result.data.createBoard._id;
      router.push(`/boards/${boardId}`);
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>): void => {
    setWriter(event.target.value);
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>): void => {
    setContents(event.target.value);
  };

  return (
    <div>
      작성자:
      <input role="input-writer" type="text" onChange={onChangeWriter} />
      제목:
      <input role="input-title" type="text" onChange={onChangeTitle} />
      내용:
      <input role="input-contents" type="text" onChange={onChangeContents} />
      <button role="submit-button" onClick={onClickSubmit}>
        GRAPHQL-API 요청하기
      </button>
    </div>
  );
}
