const 카운터 = () => {

 const [count, setConunt] = React.useState(0)

 const 카운트올리는기능 = () => {
  setConunt(count + 1)
 }
 const 카운트내리는기능 = () => {
  setConunt(count - 1)
 }
  // 바벨로 변환
  // 함수의 리턴은 1개만 할 수 있음 -> 따라서 하나로 묶자!
    return(
   <>
    <div>{count}</div>
     <button onClick={카운트올리는기능}> +</button>
     <button onClick={카운트내리는기능}> -</button>
   </>
    )
  }