// 함수 선언식
function hello(name) {
    alert(name + '님 안녕하세요')
}

// 함수 표현식
const hello2 = function(name) {
    alert(name + '님 안녕하세요')
}

// 화살표 함수 *
const hello3 = (name)=> {
    alert(name + '님 안녕하세요')
}


let auth = ()=> {
    const token = String(Math.floor(Math.random() * 100000)).padStart(6,'0')
    document.getElementById('target').innerText = token
    document.getElementById('target').style.color = '#' + token
}

let timer = 180
let auth2 = () => {
    const token2 = String(Math.floor(Math.random() * 100000)).padStart(6,'0')
    
    setInterval(function(){
        if(timer >= 0) {
           let min = Math.floor(time / 60)
           let sec = String(time % 60).padStart(2, "0")
           document.getElementById('timer').innerText = min + ':' + sec;
           timer = timer - 1
           document.getElementById('time').innerText = token2
        }else {
            document.getElementById('finish').disabled = true
        }
    },1000)
}