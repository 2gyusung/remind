// "use client"; => 부모는 RSC로 시작하자! (부모가 RCC면, 하위는 모두 RCC가 되기 때문)

import Rcc from "@/components/32-04-rcc-rsc-composition/01-rcc";
import Rsc from "@/components/32-04-rcc-rsc-composition/02-rsc";

export default function RccRscCompositionPage() {
  console.log("서버 컴포넌트가 렌더링되었습니다.");

  // 1. <Rcc/>와 <Rsc />는 단지 합성된 것이므로, <Rsc />의 부모는 <Rcc />가 아닌 현재 페이지컴포넌트가 됨
  // 2. 현재 페이지컴포넌트도 서버컴포넌트이므로 <Rsc />의 부모는 서버컴포넌트임(클라이언트컴포넌트가 아님)
  // 3. 따라서, <Rsc />는 설정한 대로 서버컴포넌트로 작동 가능(즉, 불필요하게 브라우저에서 다시 실행되는 것 방지)
  return (
    <>
      <div>페이지 컴포넌트입니다.</div>
      <Rcc>
        <Rsc />
      </Rcc>
    </>
  );
}
