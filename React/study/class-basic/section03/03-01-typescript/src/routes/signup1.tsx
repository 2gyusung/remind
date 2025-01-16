import { ChangeEvent, useState } from "react"

const Signup = () => {
    const [writer, setWriter] = useState("")
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const [isActive, setIsActive] = useState(false)

    const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
        setWriter(event.target.value)
    }

    const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    const onChangeContent = (event: ChangeEvent<HTMLInputElement>) => {
        setContent(event.target.value)
    }

    const onClickSubmit = () => {
        alert("회원가입을 축하합니다.")
    }

    return (
        <>
            작성자: <input type="text" onChange={onChangeWriter} /><br />
            제목: <input type="text" onChange={onChangeTitle} /><br />
            내용: <input type="text" onChange={onChangeContent} /><br />
            <button onClick={onClickSubmit} style={{ backgroundColor: isActive ? "yellow" : "none" }}>등록하기</button>
        </>
    )
}

export default Signup