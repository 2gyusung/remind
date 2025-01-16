"use client";

import { useBoardsWrite } from "./hook";
import { IBoardsWriteProps } from "./types";

export default function BoardsWrite(props: IBoardsWriteProps) {
  const {
    onClickSubmit,
    onClickUpdate,
    onChangeWriter,
    onChangeTitle,
    onChangeContents,
  } = useBoardsWrite();

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
