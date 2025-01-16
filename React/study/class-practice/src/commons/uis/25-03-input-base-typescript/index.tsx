"use client";

import { useFormContext } from "react-hook-form";
import styles from "./styles.module.css";
import { IInputBaseProps } from "./types";
import { ISchema } from "@/app/section25/25-03-common-components-base-typescript/02-after/schema";

// 1. 인풋뼈대 만들기
function InputBase(props: IInputBaseProps) {
  const { register } = useFormContext<ISchema>();

  return (
    <input
      className={styles.myinput}
      type={props.type}
      {...register(props.qqq)}
    />
  );
}

// 2. 인풋 짹어내기
// 2-1) 부드러운인풋(사이즈: S-Full)
export default function InputSoftSFull(props: IInputBaseProps) {
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