"use client";

import { useQuery, gql } from "@apollo/client";
import Link from "next/link";

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
  const { data, refetch } = useQuery(FETCH_BOARDS);

  console.log(data?.fetchBoards);

  const onClickPage = (event) => {
    refetch({ page: Number(event.currentTarget.id) });
  };

  //   const onClickPage1 = () => {
  //     refetch({ page: 1 });
  //   };
  //   const onClickPage2 = () => {
  //     refetch({ page: 2 });
  //   };
  //   const onClickPage3 = () => {
  //     refetch({ page: 3 });
  //   };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <Link
          key={el._id}
          href={`/section30/30-03-web-editor-hook-form-xss/${el._id}`}
        >
          <div>
            <span style={{ margin: "10px" }}>{el.title}</span>
            <span style={{ margin: "10px" }}>{el.writer}</span>
          </div>
        </Link>
      ))}
      {new Array(10).fill("철수").map((_, index) => (
        <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>
          {index + 1}
        </span>
      ))}

      {/* {["철수", "철수", "철수", "철수", "철수", "철수", "철수", "철수", "철수", "철수"].map((_, index) => (
        <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>
          {index + 1}
        </span>
      ))} */}

      {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el, index) => (
        <span key={el} id={String(el)} onClick={onClickPage}>
          {el}
        </span>
      ))} */}

      {/* <span onClick={onClickPage1}>
        1
      </span>
      <span onClick={onClickPage2}>
        2
      </span>
      <span onClick={onClickPage3}>
        3
      </span> */}
    </div>
  );
}
