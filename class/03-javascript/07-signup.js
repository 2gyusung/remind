const checkValidation = function () {
    let email = document.getElementById('email').value
    let pw1 = document.getElementById('pw1').value
    let pw2 = document.getElementById('pw2').value

    if(email  && pw1  && pw2)  { //email != "" && pw1 !== '' && pw2 !== "" 
        //  모든  input이 비어 있지 않을 때
        document.getElementById('submit').disabled = false
    }else {
        // 하나라도 비어 있을 때
        document.getElementById('submit').disabled = true

    }
}

const checkValidation2 = function() {
    let email = document.getElementById('submit')
    let pw1 = document.getElementById('pw1').value
    let pw2 = document.getElementById('pw2').value

    if(email && pw1 && pw2) {
        document.getElementById('submit').disabled = false
    }else {
        document.getElementById('submit').disabled = true
    }
}