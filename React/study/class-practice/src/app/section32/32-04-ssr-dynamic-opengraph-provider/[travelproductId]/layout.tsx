// "use client"; => 이걸 지우면 서버컴포넌트가 되고, 서버에서 조회하고 모두 그려서 내려보내줌(SSR: 서버사이드렌더링). 따라서, 브라우저에서 하이드레이션은 안함

import { gql, useQuery } from "@apollo/client";
import { GraphQLClient } from "graphql-request";

const FETCH_TRAVELPRODUCT = gql`
  query fetchTravelproduct($travelproductId: ID!) {
    fetchTravelproduct(travelproductId: $travelproductId) {
      _id
      name
      remarks
      contents
    }
  }
`;

export default async function OpengraphProviderHead({ children, params }) {
  // const params = useParams();

  // const { data } = useQuery(FETCH_PRODUCT, {
  //   variables: { travelproductId: params.travelproductId },
  // });

  console.log("여기는 서버입니다.");
  console.log(params);

  const graphQLClient = new GraphQLClient(
    "https://main-practice.codebootcamp.co.kr/graphql"
  );
  const result = await graphQLClient.request(FETCH_TRAVELPRODUCT, {
    travelproductId: params.travelproductId,
  });
  console.log(result);

  return (
    <>
      <meta
        property="og:title"
        content={`${result?.fetchTravelproduct?.name}`}
      />
      <meta
        property="og:description"
        content={`${result?.fetchTravelproduct?.remarks}`}
      />
      <meta
        property="og:image"
        content={`${result?.fetchTravelproduct?.images?.[0]}`}
      />
      <>{children}</>
    </>
  );
}
