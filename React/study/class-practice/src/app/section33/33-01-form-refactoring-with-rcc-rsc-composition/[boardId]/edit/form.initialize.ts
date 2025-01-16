"use client";

import { useEffect } from "react";
import { ISchema } from "./form.schema";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "next/navigation";

const FETCH_BOARD = gql`
  query fetchBoardWithRefactoring($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      title
      contents
    }
  }
`;

export const useInitialize = ({ setValue }) => {
  const { boardId } = useParams();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId },
  });

  //
  //
  // 1. 수정하기 초기값 설정
  useEffect(() => {
    if (!data) return;

    const { title, contents } = data.fetchBoard;
    setValue("title", title);
    setValue("contents", contents);
  }, [data]);

  //
  //
  // 2. 수정완료 기능 완성
  const onSubmit = (data: ISchema) => {
    console.log(data);
  };

  return {
    onSubmit,
  };
};
