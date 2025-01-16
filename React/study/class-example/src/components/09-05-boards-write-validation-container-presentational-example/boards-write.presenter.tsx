"use client";

import { useParams, useRouter } from "next/navigation";
import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

export const 나의그래프큐엘셋팅 = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export const UPDATE_BOARD = gql`
  mutation updateBoard(
    $number: Int
    $writer: String
    $title: String
    $contents: String
  ) {
    updateBoard(
      number: $number
      writer: $writer
      title: $title
      contents: $contents
    ) {
      _id
      number
      message
    }
  }
`;

export default function BoardsWriteUI(props) {
  return (
    <div>
      <div>@@@@@@@@@@@ 여기는 프리젠터입니다 @@@@@@@@@</div>
      <div>
        작성자: <input type="text" onChange={onChangeWriter} />
        제목: <input type="text" onChange={onChangeTitle} />
        내용: <input type="text" onChange={onChangeContents} />
        <button onClick={props.isEdit ? onClickUpdate : onClickSubmit}>
          {props.isEdit ? "수정" : "등록"}하기
        </button>
      </div>
      <div>@@@@@@@@@@@ 여기는 프리젠터입니다 @@@@@@@@@</div>
    </div>
  );
}
