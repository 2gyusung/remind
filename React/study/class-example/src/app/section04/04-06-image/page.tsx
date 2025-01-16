"use client";

import Image from "next/image";
import styles from "./styles.module.css";

export default function ImagePage() {
  return (
    <>
      {/* 이미지 고전 방식 */}
      <img
        src="/images/04-01-dog.jpg"
        className={styles.이미지를보여주자}
        alt="강아지이미지"
      />

      {/* 이미지 Next 방식 */}
      <Image
        className={styles.이미지를보여주자}
        src="/images/04-01-dog.jpg"
        alt="강아지이미지"
        width={0}
        height={0}
        sizes="100vw"
      />
    </>
  );
}
