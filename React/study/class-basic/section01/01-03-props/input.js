const inputEl = (훈이의props) => {
  console.log(훈이의props.철수가방);
  console.log(훈이의props.영희가방);
  
  const msg = '비밀번호 입력하세요'
  // 바벨로 변환
    return(
      <input text="text" placeholder={msg}></input> 
    )
  }