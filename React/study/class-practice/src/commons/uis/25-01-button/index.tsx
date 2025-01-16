"use client";

import { useFormContext } from "react-hook-form";
import styles from "./styles.module.css";

export default function MyButton(props) {
  const { formState } = useFormContext();

  return (
    <button className={styles.mybutton} disabled={!formState.isValid}>
      {props.children}
    </button>
  );
}
