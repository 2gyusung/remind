"use client";

import { useQuery, gql } from "@apollo/client";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
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
  const [hasMore, setHasMore] = useState(true);
  const { data, fetchMore } = useQuery(FETCH_BOARDS);

  const onNext = () => {
    if (data === undefined) return;

    fetchMore({
      variables: { page: Math.ceil((data?.fetchBoards.length ?? 10) / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoards?.length) {
          setHasMore(false);
          return;
        }

        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };

  return (
    <div>
      <InfiniteScroll
        dataLength={data?.fetchBoards.length ?? 0}
        next={onNext}
        hasMore={hasMore}
        loader={<div>로딩중입니다</div>} // 전체개수(fetchBoardsCount)보다 작다면 ? 로딩중 : <></>
      >
        {data?.fetchBoards.map((el) => (
          <div key={el._id + "1"}>
            <span style={{ margin: "10px" }}>{el.title}</span>
            <span style={{ margin: "10px" }}>{el.writer}</span>
          </div>
        ))}
        {data?.fetchBoards.map((el) => (
          <div key={el._id + "2"}>
            <span style={{ margin: "10px" }}>{el.title}</span>
            <span style={{ margin: "10px" }}>{el.writer}</span>
          </div>
        ))}
        {data?.fetchBoards.map((el) => (
          <div key={el._id + "3"}>
            <span style={{ margin: "10px" }}>{el.title}</span>
            <span style={{ margin: "10px" }}>{el.writer}</span>
          </div>
        ))}
      </InfiniteScroll>
      <Link href="/section31/31-21-infinite-scroll-without-windowing-moved">
        페이지 이동하기
      </Link>
    </div>
  );
}