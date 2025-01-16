import './App.css';
import { useState } from 'react'

function App() {

  const [count, setCount] = useState(0)

  const onChangeCountUp = () => {
    setCount(count + 1)
  }

  const onChangeCountDown = () => {
    setCount(count - 1)
  }

  return (
    <div className="철수의App">
      <div>{count}</div>
      <button onClick={onChangeCountUp}>+</button>
      <button onClick={onChangeCountDown}>-</button>
    </div>
  );
}

export default App;
