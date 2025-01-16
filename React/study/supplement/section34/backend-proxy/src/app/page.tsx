"use client";

export default function Home() {
  const onClickNextBackend1 = async () => {
    const result = await fetch("/banana1");
    const data = await result.json();
    console.log("백엔드API 엔드포인트(http://localhost:3000/banana1) 응답: ");
    console.log(data);
  };

  const onClickNextBackend2 = async () => {
    // const result = await fetch("https://www.naver.com"); // CORS 에러
    const result = await fetch("/banana2"); // 백엔드API /banana2에 요청하면, /banana2에서 www.naver.com에 대신(proxy) 요청해줌
    const data = await result.text();
    console.log("백엔드API 엔드포인트(http://localhost:3000/banana2) 응답: ");
    console.log(data);
  };

  const onClickNextBackend3 = async () => {
    // const result = await fetch("https://www.naver.com"); // CORS 에러
    const result = await fetch("/banana3"); // 백엔드API /banana2와 동일하게 작동(Next에서 기본으로 제공해주기 때문에, 굳이 직접 만들지 않아도됨)
    const data = await result.text();
    console.log("백엔드API 엔드포인트(http://localhost:3000/banana3) 응답: ");
    console.log(data);
  };

  // prettier-ignore
  return (
    <>
      <button onClick={onClickNextBackend1}>Next 백엔드API에 요청</button><br />
      <button onClick={onClickNextBackend2}>Next 백엔드API에 요청(내가만든 프록시)</button><br />
      <button onClick={onClickNextBackend3}>Next 백엔드API에 요청(Next에서 제공해주는 프록시)</button>
    </>
  );
}
