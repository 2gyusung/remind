"use client";

import { useState } from "react";

export default function BoardsPage() {
  // state도 사용 가능(따라서, 클라이언트/서버컴포넌트 상관 없음)
  // => 주소만 동적으로 변하지 않으면 맵핑되는 폴더/파일 미리 생성 가능
  // => ex, /boards/index.html 가능
  // =>     /boards/[boardId]/index.html 불가능
  const [state] = useState("게시판");

  return <div>안녕하세요 {state} 정적페이지입니다.</div>;
}
