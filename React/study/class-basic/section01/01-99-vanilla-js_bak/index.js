let 구독자수담는통 = 0

const 구독자올리는기능 = () => {
    구독자수담는통 = 구독자수담는통 + 1 // 1. 변수가 +1 증가하는 것이지, 화면에 자동으로 그려지는 것 아님!

    document.getElementById("구독자수변경하자").innerText = 구독자수담는통
}

const 목록페이지가기 = () => {
    document.getElementById("목록페이지보여주는곳").style = "display: block"
    document.getElementById("민지채널페이지보여주는곳").style = "display: none"
}

const 민지채널페이지가기 = () => {
    document.getElementById("목록페이지보여주는곳").style = "display: none"
    document.getElementById("민지채널페이지보여주는곳").style = "display: block"
}

const 메인페이지 = () => `
    <div>
        <div class="배너">배너화면입니다.</div>
        <div class="내비게이션">
            <button onclick="목록페이지가기()">유튜브목록</button>
            <button onclick="민지채널페이지가기()">유튜버민지채널</button>
        </div>

        <div id="목록페이지보여주는곳">
            ${목록페이지()}
        </div>
        <div id="민지채널페이지보여주는곳">
            ${민지채널페이지()}
        </div>
    </div>
`