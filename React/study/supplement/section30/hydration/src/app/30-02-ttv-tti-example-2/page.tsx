"use client";

export default function TtvTti() {
  // 하이드레이션 이전(TTV까지만 완료된 상태)에는 클릭 안됨
  const onClickButton = () => {
    alert("현재까지 TTI 완료!");
  };

  return (
    <div>
      <button onClick={onClickButton}>현재까지 TTV 완료!</button>
    </div>
  );
}
