"use client";

import { useFormContext } from "react-hook-form";
import styles from "./styles.module.css";
import { IButtonBaseProps } from "./types";
import { ISchema } from "@/app/section25/25-03-common-components-base-typescript/02-after/schema";

// 1. 버튼뼈대 만들기
function ButtonBase(props: IButtonBaseProps) {
  const { formState } = useFormContext<ISchema>();

  return (
    <button className={props.className} disabled={!formState.isValid}>
      {props.children}
    </button>
  );
}

// 2. 버튼 짹어내기
// 2-1) 부드러운버튼(사이즈: M-Full)
export default function ButtonSoftMFull(props: IButtonBaseProps) {
  return <ButtonBase className={styles.button__soft__m__full} {...props} />;
}

// 2-2) 얇은버튼(사이즈: Fit-S)
// export default function ButtonThinFitS(props) {
//   return <ButtonBase styles={styles.button__thin__fit__s} {...props} />;
// }

// 2-3) 둥근버튼(사이즈: M-M)
// export default function ButtonCircleMM(props) {
//   return <ButtonBase styles={styles.button__circle__m__m} {...props} />;
// }
