"use client"

export default function Child1(props) {
  const onClickCountUp = () => {
    props.setCount(props.count + 1);
  }

  return (
    <div>
      <div>자식1의 카운트: {props.count}</div>
      <button onClick={onClickCountUp}>카운트 올리기!!!</button>
    </div>
  );
}
