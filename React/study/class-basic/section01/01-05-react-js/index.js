const 메인페이지 = () => {
    const 목록페이지가기 = () => {
        document.getElementById("목록페이지보여주는곳").style = "display: block"
        document.getElementById("민지채널페이지보여주는곳").style = "display: none"
    }

    const 민지채널페이지가기 = () => {
        document.getElementById("목록페이지보여주는곳").style = "display: none"
        document.getElementById("민지채널페이지보여주는곳").style = "display: block"
    }

    const [구독자수담는통, 구독자수변경해줘] = React.useState(0)

    const 구독자올리는기능 = () => {
        구독자수변경해줘(구독자수담는통 + 1)
    }

    return (
        <div>
            <div className="배너">배너화면입니다.</div>
            <div className="내비게이션">
                <button onClick={목록페이지가기}>유튜브목록</button>
                <button onClick={민지채널페이지가기}>유튜버민지채널</button>
            </div>

            <div id="목록페이지보여주는곳">
                <목록페이지 구독자수담는통={구독자수담는통} />
            </div>
            <div id="민지채널페이지보여주는곳">
                <민지채널페이지 구독자수담는통={구독자수담는통} 구독자올리는기능={구독자올리는기능} />
            </div>
        </div>
    )
}