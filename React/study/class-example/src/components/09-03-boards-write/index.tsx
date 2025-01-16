"use client"

import { useParams, useRouter } from 'next/navigation'
import { gql, useMutation } from '@apollo/client'
import { useState } from 'react'

export const 나의그래프큐엘셋팅 = gql`
    mutation createBoard($writer: String, $title: String, $contents: String){
        createBoard(writer: $writer, title: $title, contents: $contents){
            _id
            number
            message
        }
    }
`

export const UPDATE_BOARD = gql`
    mutation updateBoard($number: Int, $writer: String, $title: String, $contents: String){
        updateBoard(number: $number, writer: $writer, title: $title, contents: $contents){
            _id
            number
            message
        }
    }
`

export default function BoardsWrite(props){
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

    const onChangeWriter = (event) => {
        setWriter(event.target.value)
    }

    const onChangeTitle = (event) => {
        setTitle(event.target.value)
    }

    const onChangeContents = (event) => {
        setContents(event.target.value)
    }

    return (
        <div>
            <div>@@@@@@@@@@@ 여기는 프리젠터입니다 @@@@@@@@@</div>
            <div>
                작성자: <input type="text" onChange={onChangeWriter} />
                제목: <input type="text" onChange={onChangeTitle} />
                내용: <input type="text" onChange={onChangeContents} />
                <button onClick={props.isEdit ? onClickUpdate : onClickSubmit}>
                    {props.isEdit ? "수정" : "등록"}하기
                </button>
            </div>
            <div>@@@@@@@@@@@ 여기는 프리젠터입니다 @@@@@@@@@</div>
        </div>
    )


}