import { ISchema } from "@/app/section25/25-03-common-components-base-typescript/02-after/schema";
import { HTMLInputTypeAttribute } from "react";
import { Path } from "react-hook-form";

export interface IInputBaseProps {
  qqq: Path<ISchema>;
  type: HTMLInputTypeAttribute;
  className?: string;
}
