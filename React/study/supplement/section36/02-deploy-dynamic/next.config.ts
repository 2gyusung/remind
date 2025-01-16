import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  trailingSlash: true,
  // output: "export", => 동적페이지 배포시 export 안됨
};

export default nextConfig;
