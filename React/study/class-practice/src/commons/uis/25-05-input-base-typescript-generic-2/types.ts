import { HTMLInputTypeAttribute } from "react";
import { Path } from "react-hook-form";

export interface IInputBaseProps<AAA> {
  qqq: Path<AAA>; // AAA는 결국 ISchema를 전달 받게됨 => 따라서, Path<ISchema>
  type: HTMLInputTypeAttribute;
  className?: string;
}
