"use client"

import { FetchUserLoggedInDocument } from "@/commons/graphql/graphql";
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

export default function LoginPage() {
  const { data } = useQuery(FetchUserLoggedInDocument);

  return <>{data?.fetchUserLoggedIn.name}님 환영합니다!</>;
}
