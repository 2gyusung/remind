"use client"

import BoardsWrite from '@/components/09-04-boards-write-validation'
import { useQuery, gql } from '@apollo/client'
import {useRouter} from 'next/router'

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

export default function GraphqlMutationPage(){
    const router = useRouter()

    const { data } = useQuery(FETCH_BOARD, {
        variables: { number: Number(router.query.number) }
    })

    // 한 줄일때는 괄호() 필요 없음
    return (
        <div>
            <div>############ 여기는 페이지입니다 ############</div>
            <BoardsWrite isEdit={true} data={data} />
            <div>############ 여기는 페이지입니다 ############</div>
        </div>
    )

}