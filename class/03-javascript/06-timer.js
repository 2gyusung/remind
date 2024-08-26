let isStared = false;

let auth = () => {
    if (isStared === false) {
        //타이머가 작동중이 아닐 때
        isStared = true
        document.getElementById('finish').disabled = false
        const token = String(Math.floor(Math.random() * 100000)).padStart(6, '0')
        document.getElementById('target').innerText = token
        document.getElementById('target').style.color = "#" +token
        
        let timer = 10
        let timers 

        timers = setInterval(function () { // 타이머 기능
            if (timer >= 0) {
                let min = Math.floor(timer / 60)
                let sec = String(timer % 60).padStart(2, "0")
                document.getElementById('timer').innerText = min + ':' + sec;
                timer = timer - 1;
            } else {
                document.getElementById('finish').disabled = true;
                isStared = false
                clearInterval(timers)
            }
        },1000)
        

    }


    else {
    }    //타이머가 작동중일 때
}

    // let timer = 180
    // let auth2 = () => { }