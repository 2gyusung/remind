import { HTMLInputTypeAttribute } from "react";
import { Path } from "react-hook-form";

export interface IInputBaseProps<AAA> {
  qqq: Path<AAA>;
  type: HTMLInputTypeAttribute;
  className?: string;
}
