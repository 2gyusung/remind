# React 신입 개발자가 알아야 할 주요 Hooks 정리

## 1. useState - 상태 관리
`useState`는 컴포넌트 내에서 상태를 관리하는 훅이다.

### ✅ 기본 사용법
```jsx
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

export default Counter;
```

---

## 2. useEffect - 사이드 이펙트 처리
`useEffect`는 컴포넌트가 렌더링될 때 특정 작업을 실행할 수 있게 해준다.

### ✅ 기본 사용법
```jsx
import React, { useState, useEffect } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component mounted or updated");
  }, [count]); // count 값이 변경될 때마다 실행

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

export default Timer;
```

---

## 3. useRef - DOM 요소 접근 및 값 유지
`useRef`는 DOM 요소에 직접 접근하거나, 컴포넌트가 리렌더링 되어도 값이 유지되도록 할 때 사용한다.

### ✅ 기본 사용법
```jsx
import React, { useRef } from "react";

const InputFocus = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default InputFocus;
```

---

## 4. useMemo - 성능 최적화
`useMemo`는 연산 비용이 큰 작업의 결과를 메모이제이션하여 불필요한 연산을 방지한다.

### ✅ 기본 사용법
```jsx
import React, { useState, useMemo } from "react";

const ExpensiveCalculation = ({ number }) => {
  const computedValue = useMemo(() => {
    console.log("Calculating...");
    return number * 2;
  }, [number]);

  return <p>Computed Value: {computedValue}</p>;
};

export default ExpensiveCalculation;
```

---

## 5. useCallback - 함수 메모이제이션
`useCallback`은 함수를 메모이제이션하여 불필요한 재생성을 방지한다.

### ✅ 기본 사용법
```jsx
import React, { useState, useCallback } from "react";

const Button = React.memo(({ onClick }) => {
  console.log("Button rendered");
  return <button onClick={onClick}>Click me</button>;
});

const CallbackExample = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={handleClick} />
    </div>
  );
};

export default CallbackExample;
```

---

## 6. useContext - 전역 상태 관리
`useContext`는 컴포넌트 트리에서 props를 거치지 않고 데이터를 전달할 때 사용한다.

### ✅ 기본 사용법
```jsx
import React, { createContext, useContext } from "react";

const ThemeContext = createContext("light");

const ThemedComponent = () => {
  const theme = useContext(ThemeContext);
  return <p>Current theme: {theme}</p>;
};

const App = () => {
  return (
    <ThemeContext.Provider value="dark">
      <ThemedComponent />
    </ThemeContext.Provider>
  );
};

export default App;
```

---

## 7. useReducer - 복잡한 상태 관리
`useReducer`는 `useState`보다 복잡한 상태 로직을 다룰 때 사용한다.

### ✅ 기본 사용법
```jsx
import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
};

export default Counter;
```

---

## ✨ 정리
| Hook | 사용 목적 |
|------|----------|
| `useState` | 상태 값 관리 |
| `useEffect` | 사이드 이펙트 처리 (API 호출, 이벤트 리스너 등) |
| `useRef` | DOM 요소 접근 및 값 유지 |
| `useMemo` | 값 메모이제이션 (비싼 연산 방지) |
| `useCallback` | 함수 메모이제이션 (불필요한 렌더링 방지) |
| `useContext` | 전역 상태 관리 |
| `useReducer` | 복잡한 상태 관리 |

React에서 가장 자주 사용하는 주요 훅들을 정리했어! 🚀
더 깊이 공부하면 효율적인 상태 관리와 최적화된 컴포넌트를 만들 수 있어! 😊

