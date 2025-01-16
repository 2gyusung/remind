"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { IForm } from "./types";

export default function Form<폼스키마 extends FieldValues>({
  children,
  schema,
  useInitialize,
}: IForm<폼스키마>) {
  const methods = useForm<폼스키마>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const { onSubmit } = useInitialize(methods);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
}
