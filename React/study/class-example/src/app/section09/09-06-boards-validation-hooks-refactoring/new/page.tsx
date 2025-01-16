"use client"

import BoardsWrite from "@/components/09-05-boards-write-validation-refactoring"

export default function GraphqlMutationPage(){
    
    // 한 줄일때는 괄호() 필요 없음
    return (
        <div>
            <div>############ 여기는 페이지입니다 ############</div>
                <BoardsWrite isEdit={false} />
            <div>############ 여기는 페이지입니다 ############</div>
        </div>
    )

}