"use client";

import { FetchUserLoggedInDocument } from "@/commons/graphql/graphql";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

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
  const router = useRouter();
  const { data } = useQuery(FetchUserLoggedInDocument);

  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      alert("로그인 후 이용 가능합니다!!!");
      router.push("/section25/25-05-login-typescript-localstorage-check");
    }
  }, []);

  return <>{data?.fetchUserLoggedIn.name}님 환영합니다!</>;
}
