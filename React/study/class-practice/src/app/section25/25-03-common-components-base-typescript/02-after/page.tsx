"use client";

// import { useMutation, gql } from '@apollo/client'
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ISchema, schema } from "./schema";
import MyInput from "@/commons/uis/25-03-input-base-typescript";
import MyButton from "@/commons/uis/25-03-button-base-typescript";

// const 나의그래프큐엘셋팅 = gql`
//     mutation createBoard($writer: String, $title: String, $contents: String){
//         createBoard(writer: $writer, title: $title, contents: $contents){
//             _id
//             number
//             message
//         }
//     }
// `

export default function GraphqlMutationPage() {
  const methods = useForm<ISchema>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  // const [나의함수] = useMutation(나의그래프큐엘셋팅)

  const onClickSubmit = (data: ISchema) => {
    console.log(data);
  };

  console.log("리렌더링 되나요?");

  // 한 줄일때는 괄호() 필요 없음
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onClickSubmit)}>
        {/* 작성자는 수정 불가능하므로 schema 타입에서 제외 => 에러  */}
        {/* 작성자: <input type="text" {...register("writer")} /><br />
        <div style={{ color: "red" }}>{formState.errors.writer?.message}</div> */}
        제목: <MyInput type="text" qqq="title" />
        <br />
        <div style={{ color: "red" }}>
          {methods.formState.errors.title?.message}
        </div>
        내용: <MyInput type="text" qqq="contents" />
        <br />
        <div style={{ color: "red" }}>
          {methods.formState.errors.contents?.message}
        </div>
        {/* 주소: <input type="text" {...register("boardAddress.addressDetail")} /><br /> */}
        <MyButton>GRAPHQL-API 요청하기</MyButton>
      </form>
    </FormProvider>
  );
}

/*
    <button type="button" onClick={onClickBasket}>장바구니담기</button>
    <button type="reset">지우자!!</button>
    <button type="submit">등록하자!!</button> // 기본값
*/
