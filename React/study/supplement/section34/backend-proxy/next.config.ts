import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // 백엔드 API로 브라우저에 HTML 데이터 보내기 => /mynaver2와 같은 역할
  rewrites() {
    return [
      {
        source: "/mynaver3",
        destination: "https://www.naver.com/",
      },
    ];
  },
};

export default nextConfig;
