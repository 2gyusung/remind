"use client"

import { useQuery, gql } from '@apollo/client'
import { useParams } from 'next/navigation'

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
    const params = useParams()

    const { data } = useQuery(FETCH_BOARD, {
        variables: { number: Number(params.qqq) },
    })

    console.log(data)

    return (
        <div>
            <div>{params.qqq}번 게시글 이동이 완료되었습니다.</div>
            <div>작성자: {data?.fetchBoard?.writer}</div>
            <div>제목: {data?.fetchBoard?.title}</div>
            <div>내용: {data?.fetchBoard?.contents}</div>
        </div>
    )

}