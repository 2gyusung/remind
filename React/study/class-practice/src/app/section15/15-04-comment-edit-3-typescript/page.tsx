"use client"

import { FetchBoardsDocument } from "@/commons/graphql/graphql";
import CommentItem from "@/components/15-03-comment-edit-3";
import { useQuery, gql } from "@apollo/client";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage() {
  const { data } = useQuery(FetchBoardsDocument);

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <CommentItem key={el._id} el={el} />
      ))}
    </div>
  );
}