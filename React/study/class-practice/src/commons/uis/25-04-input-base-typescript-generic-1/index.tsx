"use client";

import { FieldValues, useFormContext } from "react-hook-form";
import { IInputBaseProps } from "./types";
import styles from "./styles.module.css";
import { useState } from "react";

// 1. 인풋뼈대 만들기
function InputBase(props) {
  const { register } = useFormContext();

  return (
    <input
      className={props.className}
      type={props.type}
      {...register(props.qqq)}
    />
  );
}

// 2. 인풋 짹어내기
// 2-1) 부드러운인풋(사이즈: S-Full)
export default function InputSoftSFull<인풋의제네릭타입>(props) {
  const [schema, setSchema] = useState<인풋의제네릭타입>(); // 제네릭으로 전달받은 타입 적용하기!

  return <InputBase className={styles.input__soft__s__full} {...props} />;
}

// 2-2) 얇은인풋(사이즈: Fit-S)
// export default function InputThinFitS(props) {
//   return <InputBase className={styles.input__thin__fit__s} {...props} />;
// }

// 2-3) 딱딱한인풋(사이즈: S-M)
// export default function InputHardSM(props) {
//   return <InputBase className={styles.input__hard__s__m} {...props} />;
// }
