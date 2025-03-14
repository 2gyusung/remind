"use client"

import { useQuery, gql } from '@apollo/client'
import {useParams, useRouter} from 'next/navigation'

const FETCH_BOARD = gql`
    query fetchBoard($number: Int){
        fetchBoard(number: $number){
            number
            writer
            title
            contents
        }
    }
`

export default function StaticRoutingMovedPage(){
    const router = useRouter()
    const params = useParams()
    console.log(params)

    const { data } = useQuery(FETCH_BOARD, {
        variables: { number: Number(params.number) }
    })

    console.log(data)

    const onClickMove = () => {
        router.push(`/section09/09-06-boards-validation-refactoring-typescript/${params.number}/edit`)
    }

    return (
        <div>
            <div>{params.number}번 게시글 이동이 완료되었습니다.</div>
            <div>작성자: {data?.fetchBoard?.writer}</div>
            <div>제목: {data?.fetchBoard?.title}</div>
            <div>내용: {data?.fetchBoard?.contents}</div>
            <button onClick={onClickMove}>수정하러가기</button>
        </div>
    )

}