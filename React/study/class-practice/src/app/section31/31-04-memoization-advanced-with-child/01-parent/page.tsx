"use client";

import { useCallback, useMemo, useState } from "react";
import MemoizationWithChildPage from "../02-child/page";

export default function MemoizationPage() {
  console.log("부모 컴포넌트가 렌더링 되었습니다.");

  let countLet = 0;
  const [countState, setCountState] = useState(0);

  // 1. useMemo로 변수 기억
  const aaa = useMemo(() => Math.random(), []);
  console.log(aaa);

  // 2. useCallback으로 함수 기억
  const onClickCountLet = useCallback(() => {
    console.log(countLet + 1);
    countLet += 1; // countLet = countLet + 1
  }, []);

  // 3. useCallback 사용시 주의사항 => state 사용 주의
  const onClickCountState = useCallback(() => {
    // console.log(countState + 1);
    setCountState((prev) => prev + 1);
  }, []);

  // 4. useMemo로 나만의 useCallback 만들어보기
  //   const onClickCountState2 = useMemo(() => {
  //     return () => {
  //       console.log(countState + 1);
  //       setCountState(countState + 1);
  //     };
  //   }, []);

  return (
    <>
      <div>===================================</div>
      <h1>저는 부모 컴포넌트 입니다!!!</h1>
      <div>카운트(let): {countLet}</div>
      <button onClick={onClickCountLet}>카운트(let) +1 올리기</button>

      <div>카운트(state): {countState}</div>
      <button onClick={onClickCountState}>카운트(state) +1 올리기</button>

      {/* 로직과 UI가 합쳐져서 헷갈림 => 유지보수 힘듬, 메모이제이션 더 복잡함
      <div>카운트(state): {countState}</div>
      <button
        onClick={useCallback(() => {
          // console.log(countState + 1);
          setCountState((prev) => prev + 1);
        }, [])}
      >
        카운트(state) +1 올리기
      </button> */}
      <div>===================================</div>

      {/* 자식에 memo한 경우, 자식 리렌더 되지 않음 */}
      {/* <MemoizationWithChildPage /> */}

      {/* 자식에 memo하였어도, 자식 리렌더 됨(자식이 props를 사용 안하더라도 리렌더 됨) */}
      <MemoizationWithChildPage qqq={countState} />
    </>
  );
}
