"use client"

import { useCountStore } from "@/commons/stores/21-04-count-store-typescript";

export default function Child2() {
  const { count, setCount } = useCountStore()

  const onClickCountUp = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <div>자식2의 카운트: {count}</div>
      <button onClick={onClickCountUp}>카운트 올리기!!!</button>
    </div>
  );
}
