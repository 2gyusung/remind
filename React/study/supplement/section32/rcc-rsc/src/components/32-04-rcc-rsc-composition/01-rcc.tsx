"use client"; // 클라이언트 컴포넌트

export default function Rcc({ children }: { children: React.ReactNode }) {
  console.log("클라이언트 컴포넌트가 렌더링되었습니다.");

  return (
    <>
      <div>클라이언트 컴포넌트입니다.</div>
      <div>{children}</div>
    </>
  );
}
