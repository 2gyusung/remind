"use client";

import { UpdateBoardInput } from "@/commons/graphql/graphql";
import { ZodSchema, z } from "zod";

export interface ISchema extends Pick<UpdateBoardInput, "title" | "contents"> {}

export const schema: ZodSchema<ISchema> = z.object({
  title: z.string().min(1, { message: "제목을 입력해주세요." }),
  contents: z.string().min(1, { message: "내용을 입력해주세요." }),
});
