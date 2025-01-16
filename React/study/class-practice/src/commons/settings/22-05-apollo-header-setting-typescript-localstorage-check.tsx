"use client"

import { ApolloClient, ApolloLink, ApolloProvider, InMemoryCache } from "@apollo/client";
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs'
import { useAccessTokenStore } from "../stores/22-03-access-token-store-typescript";
import { useEffect } from "react";

const GLOBAL_STATE = new InMemoryCache();

interface IApolloSetting {
    children: React.ReactNode
}
export default function ApolloHeaderSettingLocalstorageCheck(props: IApolloSetting) {
    const { accessToken, setAccessToken } = useAccessTokenStore()

    // 1. 프리렌더링 예제 - process.browser 방법
    // if (process.browser) {
    //   console.log("나는 지금 브라우저다!!!");
    //   alert("반가워요!!");
    // } else {
    //   console.log("지금은 프론트엔드 서버다!!!(즉, yarn dev로 실행시킨 프로그램 내부다!)");
    // }

    // 2. 프리렌더링 예제 - typeof window 방법
    // if (typeof window !== "undefined") {
    //   console.log("나는 지금 브라우저다!!!");
    // } else {
    //   console.log("지금은 프론트엔드 서버다!!!(즉, yarn dev로 실행시킨 프로그램 내부다!)");
    // }

    // 3. 프리렌더링 무시 - useEffect 방법
    useEffect(() => {
      const result = localStorage.getItem("accessToken") ?? "";
      setAccessToken(result);
    }, []);

    const uploadLink = createUploadLink({
        uri: "http://main-practice.codebootcamp.co.kr/graphql",
        headers: { Authorization: `Bearer ${accessToken}` }
    });

    const client = new ApolloClient({
        link: ApolloLink.from([uploadLink]),
        cache: GLOBAL_STATE,
    })    

    return (
        <ApolloProvider client={client}>
            {props.children}
        </ApolloProvider>
    )
}