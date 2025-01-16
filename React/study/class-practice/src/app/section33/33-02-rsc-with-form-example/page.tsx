"use client";

import { useFormState } from "react-dom";
import 게시글등록기능 from "./actions";

export default function Signup() {
  const [state, onSubmit] = useFormState(게시글등록기능, { 에러메시지: "" });
  console.log(state); // 서버에서 실행되고 브라우저에서 결과만 받기

  return (
    <form action={onSubmit}>
      제목: <input type="text" name="title" /> <br />
      내용: <input type="text" name="contents" /> <br />
      <button>등록하기</button>
    </form>
  );
}
