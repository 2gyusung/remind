"use client"

import { FetchBoardsQuery } from "@/commons/graphql/graphql";
import { useState } from "react";

interface ICommentItemProps {
  el: FetchBoardsQuery["fetchBoards"][0]
}

export default function CommentItem(props: ICommentItemProps) {
  const [isEdit, setIsEdit] = useState(false);

  const onClickEdit = () => {
    setIsEdit(true);
  };

  return (
    <div>
      {!isEdit ? (
        <div>
          <span style={{ margin: "10px" }}>{props.el.title}</span>
          <span style={{ margin: "10px" }}>{props.el.writer}</span>
          <button onClick={onClickEdit}>수정하기</button>
        </div>
      ) : (
        <input type="text" />
      )}
    </div>
  );
}
