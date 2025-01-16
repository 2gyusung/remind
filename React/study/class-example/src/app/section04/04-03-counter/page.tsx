"use client" // 리액트 기본방식(구버전)으로 실행해줘! => 이거 없으면 useState 못 씀, 고급방식(신버전)은 뒤에서 배움

import { useState } from "react"

export default function CounterPage() {
    const [count, setCount] = useState(0)

  const onChangeCountUp = () => {
    setCount(count + 1)
  }

  const onChangeCountDown = () => {
    setCount(count - 1)
  }

  return (
    <div className="철수의App">
      <div>{count}</div>
      <button onClick={onChangeCountUp}>+</button>
      <button onClick={onChangeCountDown}>-</button>
    </div>
  );
}