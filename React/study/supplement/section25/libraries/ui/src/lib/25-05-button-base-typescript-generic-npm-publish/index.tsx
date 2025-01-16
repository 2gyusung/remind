"use client";

import { FieldValues, useFormContext } from "react-hook-form";
import styles from "./styles.module.css";
import { IButtonBaseProps } from "./types";

// 1. 버튼뼈대 만들기
function ButtonBase<버튼의제네릭타입 extends FieldValues>(
  props: IButtonBaseProps
) {
  const { formState } = useFormContext<버튼의제네릭타입>();

  return (
    <button className={props.className} disabled={!formState.isValid}>
      {props.children}
    </button>
  );
}

// 2. 버튼 짹어내기   =>   중괄호로 쉽게 꺼내오도록 export 변경
// 2-1) 부드러운버튼(사이즈: M-Full)
export function ButtonSoftMFull<버튼의제네릭타입 extends FieldValues>(
  props: IButtonBaseProps
) {
  return (
    <ButtonBase<버튼의제네릭타입>
      className={styles.button__soft__m__full}
      {...props}
    />
  );
}

// 2-2) 얇은버튼(사이즈: Fit-S)
// export default function ButtonThinFitS(props) {
//   return <ButtonBase styles={styles.button__thin__fit__s} {...props} />;
// }

// 2-3) 둥근버튼(사이즈: M-M)
// export default function ButtonCircleMM(props) {
//   return <ButtonBase styles={styles.button__circle__m__m} {...props} />;
// }
