"use client"

import Child1 from "@/components/14-04-lifting-state-up/Child1";
import Child2 from "@/components/14-04-lifting-state-up/Child2";
import { useState } from "react";

export default function CounterLetDocumentPage() {
  const [count, setCount] = useState(0);

  const onClickCountUp = () => {
    setCount(count + 1);
  };

  return (
    <>
      <Child1 count={count} setCount={setCount} />
      <div>=============================</div>
      <Child2 count={count} onClickCountUp={onClickCountUp} />
    </>
  );
}
