// "use client";

export const revalidate = 10; // 몇 초 동안 임시저장(캐시) 할건지 적기 => 기본값 1년(31536000초)

export default async function RscWithCache() {
  console.time("가져오는데 얼마나 걸릴까요?");
  await fetch("https://koreanjson.com/posts/1");
  console.timeEnd("가져오는데 얼마나 걸릴까요?");

  console.log("요청이 완료되었습니다.");

  return <button>요청하기</button>;
}
