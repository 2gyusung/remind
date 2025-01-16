"use client"

import { FetchUserLoggedInDocument } from "@/commons/graphql/graphql";
import { with로그인체크 } from "@/commons/hocs/23-04-with로그인체크";
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

function LoginPage() {
  const { data } = useQuery(FetchUserLoggedInDocument);

  return <>{data?.fetchUserLoggedIn.name}님 환영합니다!</>;
}

export default with로그인체크(LoginPage)
