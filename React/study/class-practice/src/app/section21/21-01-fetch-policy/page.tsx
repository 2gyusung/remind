"use client"

import FetchPolicyExample from "@/components/21-01-fetch-policy";
import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoardPolicyTests01 {
    fetchBoards {
      _id
      writer
      title
    }
  }
`;

export default function StaticRoutingMovedPage() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const { data } = useQuery(FETCH_BOARDS);

  // 1. 새로운 컴포넌트 등장시에도 글로벌 스테이트 값이 유지되는지?
  const onClickIsOpen = () => {
    setIsOpen(true);
  };

  // 2. 새로운 페이지 이동시에도 글로벌 스테이트 값이 유지되는지?
  const onClickMove = () => {
    router.push("/section21/21-01-fetch-policy-moved");
  };

  return (
    <div>
      <button onClick={onClickIsOpen}>
        1. 버튼을 클릭하면 새로운 컴포넌트가 나타납니다!!
      </button>
      {isOpen && <FetchPolicyExample />}
      
      <br />=======================================<br />

      <button onClick={onClickMove}>
        2. 버튼을 클릭하면 페이지가 이동됩니다!!
      </button>
    </div>
  );
}
