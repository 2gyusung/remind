"use client"

import { gql, useQuery } from "@apollo/client";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
    }
  }
`;

const FETCH_BOARDS = gql`
  query fetchBoardPolicyTests01 {
    fetchBoards {
      _id
      writer
      title
    }
  }
`;

export default function LoginPage() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const { data: data2 } = useQuery(FETCH_BOARDS);

  return <>{data?.fetchUserLoggedIn.name}님 환영합니다!</>;
}
