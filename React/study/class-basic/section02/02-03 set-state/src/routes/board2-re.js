import { useState } from "react";
// 리팩토링
const Board = () => {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isActive, setIsActive] = useState(false);

  const onChangewriter = (event) => {
    setWriter(event.target.value);
    if (event.target.value !== "" && title && content)  return  setIsActive(true);
      setIsActive(false);
  };
  const onChangeTitile = (event) => {
    setTitle(event.target.value);
    if (writer && event.target.value  && content)  return  setIsActive(true);
      setIsActive(false);
  };
  const onChangeContent = (event) => {
    setContent(event.target.value);
    if (writer && title  && event.target.value) return setIsActive(true)
      setIsActive(false);
  };

  const onClickSubmit = () => [
    console.log(writer),
    console.log(title),
    console.log(content),
    alert("게시물 등록이 완료되었습니다"),
  ];

  return (
    <>
      작성자 : <input type="text" onChange={onChangewriter} />
      <br />
      제목 : <input type="text" onChange={onChangeTitile} />
      <br />
      내용: <input type="text" onChange={onChangeContent} />
      <br />
      <button
        onClick={onClickSubmit}
        style={{ backgroundColor: isActive === true ? "yellow" : "none" }}
      >
        등록
      </button>
    </>
  );
};

export default Board;
