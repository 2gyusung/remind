"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function FunctionalCounterPage() {
  const [count, setCount] = useState(0);

  //
  //
  // 1. useEffect로 생명주기 적용하기
  // componentDidMount 와 동일
  useEffect(() => {
    console.log("그려지고 나서 실행!!");
  }, []);

  // componentDidMount + componentDidUpdate 와 동일
  useEffect(() => {
    console.log("변경되고 나서 실행!!");
  });

  useEffect(() => {
    // componentWillUnmount 와 동일 (채팅방 나가기, 불필요한 타이머 삭제 등 청소하기 => clean-up function 이라고 부름)
    return () => {
      console.log("사라지기 전에 실행!!");
    };
  }, []);

  //
  //
  // 2. useEffect 하나로 합치기
  // useEffect(() => {
  //   console.log("그려지고 나서 실행!!");

  //   return () => {
  //     console.log("사라지기 전에 실행!!");
  //   };
  // });

  //
  //
  // 3. useEffect 잘못된 사용법(1. 추가렌더링, 무한루프)
  // useEffect(() => {
  //   setCount((prev) => prev + 1);
  // }, [count]);

  // * 주의 *
  // => setState로 리렌더링이 일어나더라도 useEffect는 재실행 안됨!

  const onClickCountUp = () => {
    console.log(count);
    setCount(count + 1);
  };

  console.log("나는 언제 실행되게~?");

  return (
    <>
      <div>{count}</div>

      <button onClick={onClickCountUp}>카운트 올리기!!</button>

      <Link href={"/"}>나가기!!</Link>
    </>
  );
}
