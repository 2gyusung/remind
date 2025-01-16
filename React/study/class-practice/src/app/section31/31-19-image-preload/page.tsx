"use client";

import Link from "next/link";
import { useEffect } from "react";

const qqq = [];

export default function ImagePreloadPage() {
  useEffect(() => {
    const img = new Image();
    img.src = "/images/31-19-bigsize.jpg";
    img.onload = () => {
      qqq.push(img);
    };
  }, []);

  return (
    <Link href="/section31/31-19-image-preload-moved">페이지 이동하기</Link>
  );
}
