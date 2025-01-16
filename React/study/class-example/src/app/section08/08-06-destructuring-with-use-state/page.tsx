"use client" // 리액트 기본방식(구버전)으로 실행해줘! => 이거 없으면 useState 못 씀, 고급방식(신버전)은 뒤에서 배움

import { useState } from "react"

export default function CounterPage() {
  const result = useState(0);

  function onClickCountUp() {
    result[1](result[0] + 1);
  }

  function onClickCountDown() {
    result[1](result[0] - 1);
  }

  return (
    <div className="철수의App">
      <div>{result[0]}</div>
      <button onClick={onClickCountUp}>+</button>
      <button onClick={onClickCountDown}>-</button>
    </div>
  );
}