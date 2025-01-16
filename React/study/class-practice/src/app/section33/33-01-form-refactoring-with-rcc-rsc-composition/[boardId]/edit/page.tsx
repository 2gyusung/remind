// "use client"; => 페이지는 서버컴포넌트

import { ISchema, schema } from "./form.schema";
import { MyInput, MyButton } from "@my-frontend/ui"; // npm 조직레포지토리
import Form from "@/commons/uis/33-01-form-refactoring-with-rcc-rsc-composition";
import { useInitialize } from "./form.initialize";

export default function GraphqlMutationPage() {
  return (
    <Form<ISchema> schema={schema} useInitialize={useInitialize}>
      제목: <MyInput<ISchema> type="text" qqq="title" />
      내용: <MyInput<ISchema> type="text" qqq="contents" />
      <MyButton<ISchema>>GRAPHQL-API 요청하기</MyButton>
    </Form>
  );
}
