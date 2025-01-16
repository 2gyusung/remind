import { HttpResponse, graphql } from "msw";

const gql = graphql.link("http://mock.com/graphql");

export const apis = [
  // 내가만드는 가짜 백엔드API => createBoard
  gql.mutation("createBoard", ({ variables }) => {
    const { writer, title, contents } = variables.createBoardInput;

    // 가짜로 등록됐다고 치고, 응답 주기
    return HttpResponse.json({
      data: {
        createBoard: {
          _id: "qqq",
          writer,
          title,
          contents,
          __typepname: "Board",
        },
      },
    });
  }),
];
