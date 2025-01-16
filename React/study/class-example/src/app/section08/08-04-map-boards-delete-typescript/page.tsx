"use client"

import { useQuery, gql, useMutation } from '@apollo/client'
import { MouseEvent } from 'react'

const FETCH_BOARDS = gql`
    query{
        fetchBoards{
            number
            writer
            title
            contents
        }
    }
`

const DELETE_BOARD = gql`
    mutation deleteBoard($number: Int){
        deleteBoard(number: $number){
            message
        }
    }
`

interface IFetchBoard {
    number: number
    title: string
    writer: string
}

export default function StaticRoutingMovedPage(){
    const { data } = useQuery(FETCH_BOARDS)

    const [deleteBoard] = useMutation(DELETE_BOARD)

    console.log(data?.fetchBoards)

    const onClickDelete = (event: MouseEvent<HTMLButtonElement>) => {
        deleteBoard({
            // @ts-ignore
            variables: { number: Number(event.target.id) }, // event.target.id 에서 타입스크립트 에러 나는 문제 뒤에서 해결
            refetchQueries: [{query: FETCH_BOARDS}]
        })
    }

    return (
        <div>
            {data?.fetchBoards.map((el: IFetchBoard, index: number) => (
                // 특별한 이유가 없으면? Fragment로 감싸자! <div />는 1개 더 그려야됨
                // 1. 프레그먼트란? <></> , <Fragment></Fragment>
                // 2. 프레그먼트에 key입력하는 방법? <Fragment key={1}></Fragment>
                <div key={el.number}> {/* index는 게시글을 삭제할 때, 다음 게시글이 올라오면서 기존 index와 동일한 값을 갖게 됨. 즉, 유일하지 않음 */}
                    <span>
                        <input type="checkbox" />
                    </span>
                    <span style={{ margin: "10px" }}>{el.number}</span>
                    <span style={{ margin: "10px" }}>{el.title}</span>
                    <span style={{ margin: "10px" }}>{el.writer}</span>
                    <span>
                        <button id={String(el.number)} onClick={onClickDelete}>삭제</button>
                    </span>
                </div>
            ))}
        </div>
    )

}