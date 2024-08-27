setTimeout(function() {
    console.log('펑');
    
},3000)

setInterval(function(){
    console.log('1.초가 지낫따');
    
},1000)

let time = 10

setInterval(function(){
    if(time >= 0) {
        console.log(time);
        time = time - 1;
    }
},1000)

let timer = 180

setInterval(function(){
    if(timer >= 0) {
       let min = Math.floor(time / 60)
       let sec = String(time % 60).padStart(2, "0")
       console.log(min + ':' + sec);
       timer = timer - 1
       
    }
},1000)