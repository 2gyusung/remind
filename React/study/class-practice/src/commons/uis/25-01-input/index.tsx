"use client";

import { useFormContext } from "react-hook-form";
import styles from "./styles.module.css";

export default function MyInput(props) {
  const { register } = useFormContext();

  return (
    <input
      className={styles.myinput}
      type={props.type}
      {...register(props.qqq)}
    />
  );
}
