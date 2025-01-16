"use client";

import { useState } from "react";

export default function RestGetPage() {
  // react-hook-form에 이미 만들어져 있음
  //   const { formState } = useForm();
  //   formState.isSubmitting;

  const [isSubmitting, setIsSubmitting] = useState(false);

  // 게시글 등록하기 버튼이라고 가정!!
  const onClickSync = async () => {
    setIsSubmitting(true);

    const result = await fetch("https://koreanjson.com/posts/1");
    const data = await result.json();
    console.log(data); // 제대로된 결과 => { title: "....",  }
    console.log(data.title); // "정당의 ~~~"

    setIsSubmitting(false);
  };

  return (
    <div>
      <button onClick={onClickSync} disabled={isSubmitting}>
        게시글 등록하기
      </button>
    </div>
  );
}
