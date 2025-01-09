import {Link} from 'react-router-dom'

const Aaa = () => {
  return (
    <>
    <div>
      Aaa 페이지 입니다
    </div>
    {/* {리액트 이동방식 :  현재페이지에서 js로 태그만 바꿔치기} spa*/}
    <Link to="/bbb">BBB  페이지로 갈래요</Link>
        {/* {고전 html 이동방식} mpa*/}
    <a href="/bbb">Bbb 페이지</a>
    </>
  )
}

export default Aaa