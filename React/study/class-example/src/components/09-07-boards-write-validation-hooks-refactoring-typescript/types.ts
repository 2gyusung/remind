import { FetchBoardQuery } from "@/commons/graphql/graphql";

export interface IBoardsWriteProps {
  isEdit: boolean;
  data?: any; // 백엔드에서 어떤 데이터 주는지 하나하나 입력하거나, 다운로드 받아야함 => 다운로드 받는법 뒤에서 배움
}

export interface IMyvariables {
  number: number;
  writer?: string;
  title?: string;
  contents?: string;
}
