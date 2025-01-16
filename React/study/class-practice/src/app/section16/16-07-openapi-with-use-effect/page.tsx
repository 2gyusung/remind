"use client"

import { useEffect, useState } from "react";

export default function RestGetPage() {
  const [dog, setDog] = useState("");

  useEffect(() => {
    const onClickSync = async () => {
      const result = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await result.json()
      console.log(data.message); // 사진 주소
      setDog(data.message);
    };

    onClickSync();
  }, []);

  return <img src={dog} />
}
