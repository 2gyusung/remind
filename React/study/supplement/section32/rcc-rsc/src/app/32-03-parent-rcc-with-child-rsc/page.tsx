"use client"; // 클라이언트 컴포넌트

import Rsc from "@/components/32-03-parent-rcc-with-child-rsc";

export default function ParentRccWithChildRscPage() {
  console.log("클라이언트 컴포넌트가 렌더링되었습니다.");

  /* 부모가 RCC이므로, 자식은 RSC로 작동 안됨(자식까지 모두 RCC로 작동) => 콘솔이 서버 1번, 브라우저 1번 찍힘 */
  return (
    <>
      <div>부모입니다</div>
      <Rsc />
    </>
  );
}
