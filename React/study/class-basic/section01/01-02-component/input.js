// 만약 영어로 만들면? 대문자로 시작해야함 => 소문자로 만들면 진짜HTML input, div 등 겹침
const 영희의인풋 = () => {

    const 초기메시지 = "비밀번호를 입력하세요"

    /* 바벨이 진짜 HTML로 바꿔줌(이건 JS로 흉내낸 가짜 HTML => JSX) */
    return (
        <input type="text" placeholder={초기메시지} />
    )
}