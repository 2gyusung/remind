"use client";

import Box from "@/components/13-03-props-children2";

export default function 페이지() {
  // 1. children 넘기기 1번째 방식
  // return <Box children={<button>버튼</button>} />;

  // 2. children 넘기기 2번째 방식
  return (
    <Box>
      <button>버튼</button>
    </Box>
  );

  // 3. 만약, 둘 다 있으면...? 안쪽 태그가 덮어 씀
  // return (
  //   <Box children={<button>버튼1</button>}>
  //     <button>버튼2</button>
  //   </Box>
  // );
}
