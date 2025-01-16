import { ChangeEvent, useState } from "react"

const Signup = () => {
    const [writer, setWriter] = useState("")
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const [isActive, setIsActive] = useState(false)

    const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
        setWriter(event.target.value)

        if(event.target.value !== "" && title !== "" && content !== ""){
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }

    const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)

        if(writer !== "" && event.target.value !== "" && content !== ""){
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }

    const onChangeContent = (event: ChangeEvent<HTMLInputElement>) => {
        setContent(event.target.value)

        if(writer !== "" && title !== "" && event.target.value !== ""){
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }

    const onClickSubmit = () => {
        alert("회원가입을 축하합니다.")
    }

    return (
        <>
            작성자: <input type="text" onChange={onChangeWriter} /><br />
            제목: <input type="text" onChange={onChangeTitle} /><br />
            내용: <input type="text" onChange={onChangeContent} /><br />
            <button onClick={onClickSubmit} disabled={isActive ? false : true}>등록하기</button>
        </>
    )
}

export default Signup