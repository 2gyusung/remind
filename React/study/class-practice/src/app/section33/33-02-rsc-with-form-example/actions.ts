"use server";

import { z } from "zod";

const schema = z.object({
  title: z.string().min(1, "제목을 입력하세요"),
  contents: z.string().min(1, "내용을 입력하세요"),
});

export default async function 게시글등록(prevState, formData) {
  // 여기는 서버에서 실행됨
  console.log(prevState);
  console.log(formData);

  const 검사 = schema.safeParse({
    title: formData.get("title"),
    contents: formData.get("contents"),
  });

  console.log(검사);

  if (검사.success) {
    // 등록하기
  } else {
    return {
      errors: 검사.error.flatten().fieldErrors,
    };
  }
}
