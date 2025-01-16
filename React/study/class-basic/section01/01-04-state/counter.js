const 카운터 = () => {
   const [카운트, 카운트변경해라] = React.useState(0)

   const 카운트올리는기능 = () => {
      카운트변경해라(카운트 + 1)
   }

   const 카운트내리는기능 = () => {
      카운트변경해라(카운트 - 1)
   }

   /* 함수의 리턴은 1개만 할 수 있음 => 따라서, 어떻게든 하나로 묶어서 리턴해야됨  */
   return (
       <div>
           <div>{카운트}</div>
           <button onClick={카운트올리는기능}>카운트 올리기!!!</button>
           <button onClick={카운트내리는기능}>카운트 내리기!!!</button>
       </div>
   )
}