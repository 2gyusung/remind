import { FieldValues, UseFormReturn } from "react-hook-form";
import { ZodSchema } from "zod";

export interface IForm<폼스키마 extends FieldValues> {
  children: React.ReactNode;
  schema: ZodSchema<폼스키마>;
  useInitialize: (methods: UseFormReturn<폼스키마>) => {
    onSubmit: (data: 폼스키마) => void;
  };
}
