"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function KakaoMapPage() {
  const router = useRouter();

  const onClickMove1 = () => {
    router.push("/section29/29-02-kakao-map-routing-moved");
  };

  const onClickMove2 = () => {
    location.href = "./29-02-kakao-map-routing-moved";
  };

  return (
    <>
      <div>SPA</div>
      <button onClick={onClickMove1}>페이지 이동하기!!!-router</button>
      <br />
      {/* next에서 제공하는 a태그 이므로, SPA 활용 가능 */}
      <Link href="/section29/29-02-kakao-map-routing-moved">페이지 이동하기!!!-link tag</Link>

      <br />
      <br />

      <div>MPA</div>
      <button onClick={onClickMove2}>페이지 이동하기!!!-location</button>
      <br />
      {/* 매 페이지를 새로 다운로드 받으므로 SPA 활용 못함 */}
      <a href="/section29/29-02-kakao-map-routing-moved">페이지 이동하기!!!-a tag</a>

      {/* 의미가 있는 시멘틱 태그의 장점(SEO) */}
      {/* 
        <h1></h1>
        <div>요리</div>
        <section>요리</section> 
      */}

      {/* 웹 접근성(SEO) */}
      {/* <img src="asdfasdf" alt="강아지이미지.jpg" /> */}
    </>
  );
}
