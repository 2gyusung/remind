# useMemo, react.memo, useCallback 차이점 (쉬운 설명)

## 1. **useMemo**

### 역할
`useMemo`는 계산 결과를 저장해 두고, 값이 바뀌지 않으면 다시 계산하지 않아요.

### 사용 예시
```jsx
const result = useMemo(() => heavyWork(input), [input]);
```

### 언제 쓸까?
- 계산이 오래 걸리는 작업이 있을 때.

---

## 2. **react.memo**

### 역할
`react.memo`는 컴포넌트를 저장해 두고, props가 바뀌지 않으면 다시 그리지 않아요.

### 사용 예시
```jsx
const MyComponent = React.memo(({ value }) => {
  console.log('Rendered!');
  return <div>{value}</div>;
});
```

### 언제 쓸까?
- 부모 컴포넌트가 자주 다시 그려지지만, 자식 컴포넌트는 바뀔 일이 없을 때.

---

## 3. **useCallback**

### 역할
`useCallback`은 함수를 저장해 두고, 값이 바뀌지 않으면 같은 함수를 다시 사용해요.

### 사용 예시
```jsx
const handleClick = useCallback(() => {
  console.log('Clicked!');
}, []);
```

### 언제 쓸까?
- 함수를 자식 컴포넌트에 전달할 때, 불필요한 함수 생성을 막고 싶을 때.

---

## 주요 차이점 요약

| 기능           | 저장하는 대상          | 언제 사용하나요?            |
|----------------|-----------------------|----------------------------|
| **useMemo**    | 계산 결과             | 오래 걸리는 계산이 있을 때     |
| **react.memo** | 컴포넌트              | 자식 컴포넌트를 다시 그릴 필요 없을 때 |
| **useCallback**| 함수                  | 같은 함수 재사용이 필요할 때 |

이렇게 간단히 정리할 수 있어요!

