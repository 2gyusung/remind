"use client"

import { ApolloClient, ApolloLink, ApolloProvider, InMemoryCache } from "@apollo/client";
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs'
import { useAccessTokenStore } from "../stores/22-01-access-token-store";

interface IApolloSetting {
    children: React.ReactNode
}
export default function ApolloHeaderSetting(props: IApolloSetting) {
    const { accessToken } = useAccessTokenStore()

    const uploadLink = createUploadLink({
        uri: "http://main-practice.codebootcamp.co.kr/graphql",
        headers: { Authorization: `Bearer ${accessToken}` }
    });

    const client = new ApolloClient({
        link: ApolloLink.from([uploadLink]),
        cache: new InMemoryCache(),
    })    

    return (
        <ApolloProvider client={client}>
            {props.children}
        </ApolloProvider>
    )
}