"use client"

import List from "@/components/14-06-pagination-last-refactoring-typescript/list";
import Pagination from "@/components/14-06-pagination-last-refactoring-typescript/pagination";
import { useQuery } from "@apollo/client";
import { FetchBoardsCountDocument, FetchBoardsDocument } from "@/commons/graphql/graphql";

export default function StaticRoutingMovedPage() {
  const { data, refetch } = useQuery(FetchBoardsDocument);
  const { data: dataBoardsCount } = useQuery(FetchBoardsCountDocument);
  const lastPage = Math.ceil((dataBoardsCount?.fetchBoardsCount ?? 10) / 10);

  return (
    <div>
      <List data={data} />  
      <Pagination refetch={refetch} lastPage={lastPage} />
    </div>
  );
}
