"use client";

import { IBoxeProps } from "./types";

export default function Box({ children, school }: IBoxeProps) {
  return (
    <div>
      <div>안녕하세요 영희입니다</div>
      <div>{school}</div>
      <div>{children}</div>
      <div>안녕하세요 맹구입니다</div>
    </div>
  );
}
