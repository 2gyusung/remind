import {Link} from 'react-router-dom'

const Aaa = ()=> {

    /* 꼭 <div />로 묶어야 하는 것은 아님, 불필요하면 <>로 묶어도 됨 */
    return (
        <>
            <div>Aaa 입니다.</div>

            {/* 1. 리액트의 이동방식: 한페이지에서 JS로 태그만 변경 => SPA */}
            <Link to="/bbb">Bbb로 갈래요</Link> {/* ./bbb 는 현위치(/aaa) 뒤에 ./bbb를 붙임 => /aaa/bbb 따라서 에러 */}

            {/* 2. 고전 HTML 이동방식: html 페이지 새로접속함(느림) => MPA */}
            <a href="/bbb">Bbb로 갈래요</a>
        </>
    )
}

export default Aaa