const App = () => {

  const [email,setEmail] = React.useState('')
  const [password,setPassword] = React.useState('')

  const [emailError ,setEmailError] = React.useState('')

  // 이벤트핸들러 함수 => (handleChangeEmail 형태로 만드는 회사도 많음)
  const onChangeEmail = (event) => {
     setEmail(event.target.value)
  }
  const onChangePassword =(event) => {
    setPassword(event.target.value)
  }

  const onClickSignup = (event) => {
    console.log(email); // 확인
    console.log(password); // 확인    
    if(email.includes("@")=== false) {
      // alert("이메일이 올바르지 않습니다!")
      // document.getElementById("idError").innerText = "이메일이 올바르지 않습니다!"
      setEmailError("이메일이 올바르지 않습니다!")
    
    }else {
      alert('회원가입을 축하합니다')
    }
  }

    return(
 <div className="철수의App">
  이메일 : <input type ='text'onChange={onChangeEmail}></input><br/>
  {/* <div id="idError"></div> */}
  <div>{emailError}</div>
  비밀번호 : <input type ='password' onChange={onChangePassword}></input><br/>
      <button onClick={onClickSignup}>회원가입</button>
 </div>
    )
  }