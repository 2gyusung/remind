// "use client"; => 서버컴포넌트

import List from "@/components/33-02-search-refactoring-with-shallow-routing/list";
import Pagination from "@/components/33-02-search-refactoring-with-shallow-routing/pagination";
import Search from "@/components/33-02-search-refactoring-with-shallow-routing/search";

export default function StaticRoutingMovedPage() {
  return (
    <div>
      <Search />
      <List />
      <Pagination />
    </div>
  );
}
