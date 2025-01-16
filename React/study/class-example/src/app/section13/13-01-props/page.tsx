"use client";

import Box from "@/components/13-01-props";

export default function 페이지() {
  // 1. props로 값 넘기기
  // return <Box apple={3} />;

  // 2. props로 JSX 넘기기
  return <Box apple={<button>버튼</button>} />;
}
