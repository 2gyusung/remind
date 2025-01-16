"use client"

// import { useMutation, gql } from '@apollo/client'
import { useForm } from "react-hook-form";

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
  const { register, handleSubmit } = useForm();

  // const [나의함수] = useMutation(나의그래프큐엘셋팅)

  const onClickSubmit = (data) => {
    console.log(data);
  };

  console.log("리렌더링 되나요?");

  // 한 줄일때는 괄호() 필요 없음
  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자: <input type="text" {...register("writer")} /><br />
      제목: <input type="text" {...register("title")} /><br />
      내용: <input type="text" {...register("contents")} /><br />
      주소: <input type="text" {...register("boardAddress.addressDetail")} /><br />
      <button>GRAPHQL-API 요청하기</button>
    </form>
  );
}

/*
    <button type="button" onClick={onClickBasket}>장바구니담기</button>
    <button type="reset">지우자!!</button>
    <button type="submit">등록하자!!</button> // 기본값
*/
