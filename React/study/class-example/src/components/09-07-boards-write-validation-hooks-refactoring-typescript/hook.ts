import { ChangeEvent, useState } from "react"
import { IMyvariables } from "./types"
import { useMutation } from "@apollo/client"
import { useParams, useRouter } from "next/navigation"
import { UPDATE_BOARD, 나의그래프큐엘셋팅 } from "./queries"

export const useBoardsWrite = () => {
    const router = useRouter()
    const params = useParams()

    const [writer, setWriter] = useState("")
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")

    const [나의함수] = useMutation(나의그래프큐엘셋팅)
    const [updateBoard] = useMutation(UPDATE_BOARD)

    const onClickSubmit = async () => {
        const result = await 나의함수({
            variables: {               // variables 이게 $ 역할을 함
                writer: writer,
                title: title,
                contents: contents
            }
        })
        console.log(result)
        router.push(`/section09/09-03-boards/${result.data.createBoard.number}`)
    }

    const onClickUpdate = async () => {
        const myvariables: IMyvariables = { number: Number(params.number) }
        if(writer) myvariables.writer = writer
        if(title) myvariables.title = title
        if(contents) myvariables.contents = contents
        
        // 여기서 수정하기 하자!!
        const result = await updateBoard({
            variables: {
                number: Number(params.number),
                writer: writer,
                title: title,
                contents: contents
            }
        })
        console.log(result)
        router.push(`/section09/09-03-boards/${result.data.updateBoard.number}`)
    }

    const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
        setWriter(event.target.value)
    }

    const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => { // 만약 Textarea라면? ChangeEvent<HTMLTextAreaElement>
        setContents(event.target.value)
    }

    return {
        onClickSubmit,
        onClickUpdate,
        onChangeWriter,
        onChangeTitle,
        onChangeContents,
    }
}