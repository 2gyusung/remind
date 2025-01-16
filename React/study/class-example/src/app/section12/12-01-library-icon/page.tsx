"use client";

import { UpCircleOutlined } from "@ant-design/icons";

export default function LibraryIconPage() {
  const onClickDelete = (event) => {
    // 대부분의 아이콘 라이브러리들은 <span />을 부모로 하여,
    // 내부에 아이콘 이미지가 자식으로 들어있기 때문에,
    // 이미지 클릭시 자식 이벤트가 부모로 전파됨
    // alert(`${event.target.id}를 삭제할까요?`); // 비어있음
    alert(`${event.currentTarget.id}를 삭제할까요?`); // ID있음
  };

  return <UpCircleOutlined id="삭제할게시글ID" onClick={onClickDelete} />;
}
