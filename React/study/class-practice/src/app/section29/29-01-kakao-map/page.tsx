"use client";

import { useEffect } from "react";

declare const window: Window & {
  kakao: any;
};

export default function KakaoMapPage() {
  useEffect(() => {
    window.kakao.maps.load(function () {
      const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
      const options = {
        // 지도를 생성할 때 필요한 기본 옵션
        center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표.
        level: 3, // 지도의 레벨(확대, 축소 정도)
      };
      const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
      console.log(map);
    });
  }, []);

  return (
    <>
      <script
        type="text/javascript"
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=7c77755781e118847c44446a054e2dd5"
      ></script>
      <div id="map" style={{ width: 500, height: 400 }}></div>
    </>
  );
}
