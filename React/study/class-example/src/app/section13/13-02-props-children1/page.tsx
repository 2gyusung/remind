"use client";

import Box from "@/components/13-02-props-children1";

export default function 페이지() {
  // 1. children 넘기기 1번째 방식
  // return <Box children={<button>버튼</button>} />;

  // 2. children 넘기기 2번째 방식
  return (
    <Box>
      <button>버튼</button>
    </Box>
  );
}
