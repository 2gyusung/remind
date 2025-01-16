"use client"

import { useQuery, gql } from "@apollo/client";

const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage() {
  const { data } = useQuery(FETCH_BOARDS);

  console.log(data?.fetchBoards);

  const onClickAlert = (event) => {
    // event.target => 내가 클릭한 태그
    // event.currentTarget => 내 클릭이 버블링되면 부모꺼 onClick 실행되는데, 현재 실행된 그 태그
    alert(event.currentTarget.id);
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el.number} id={el.writer} onClick={onClickAlert}>
          <span>
            <input type="checkbox" />
          </span>
          <span style={{ margin: "10px" }}>{el.number}</span>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
    </div>
  );
}
