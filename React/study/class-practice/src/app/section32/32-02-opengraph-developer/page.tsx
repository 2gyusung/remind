"use client";

// 개발자일때 => 디스코드, 카카오톡, 슬랙 등

export default function OpengraphDeveloperPage(): JSX.Element {
  const onClickEnter = async (): Promise<void> => {
    // 1. 채팅데이터에 주소가 있는지 찾기(ex, http~~로 시작하는 것)

    // 2. 해당 주소로 스크래핑하기
    const result = await fetch(
      "http://localhost:3000/section32/32-02-opengraph-provider" // CORS: https://www.naver.com
    );
    const data = await result.text();
    console.log(data);

    // 3. 메타태그에서 오픈그래프(og:) 찾기
    console.log(
      data.split("<meta").filter((el: string) => el.includes('property="og:'))
    );
  };

  return <button onClick={onClickEnter}>채팅 입력 후 엔터치기!!</button>;
}
