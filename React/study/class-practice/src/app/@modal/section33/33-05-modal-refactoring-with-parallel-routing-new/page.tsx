import { Modal } from "antd";

export default function ModalRefactoringWithParallelRoutingNewPage() {
  return (
    <Modal open={true}>
      작성자: <input type="text" />
      <br />
      제목: <input type="text" />
      <br />
      내용: <input type="text" />
      <br />
      <button>등록하기</button>
    </Modal>
  );
}
