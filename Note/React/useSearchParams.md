## 🏷️ useSearchParams 쉽게 이해하기!

### 📌 useSearchParams는 뭐야?
👉 URL에서 `?key=value` 형식의 **쿼리 문자열**을 가져오고 수정하는 도구!

예를 들어,  
`https://example.com?page=2&filter=active`  
이런 URL에서 **page** 값(2)과 **filter** 값(active)을 가져오거나 변경할 수 있어요.

---

## 🛠️ 사용법  

### 1️⃣ **쿼리 값 가져오기**
```jsx
import { useSearchParams } from "react-router-dom";

function MyComponent() {
  const [searchParams] = useSearchParams(); // 사용 준비
  const page = searchParams.get("page"); // 'page' 값 가져오기

  return <p>현재 페이지: {page}</p>;
}
```
🔹 URL이 `?page=3`이면 `현재 페이지: 3`이 화면에 보임!

---

### 2️⃣ **쿼리 값 변경하기**
```jsx
setSearchParams({ page: 2 });
```
🔹 위 코드 실행 시 URL이 `?page=2`로 바뀜!

---

### 3️⃣ **버튼 클릭해서 값 바꾸기**
```jsx
function MyComponent() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  return (
    <div>
      <button onClick={() => setSearchParams({ page: 2 })}>
        페이지 2로 이동
      </button>
    </div>
  );
}
```
🖱️ **버튼 클릭 시 `?page=2`로 변경됨!**

---

### 4️⃣ **기존 값 유지하면서 변경하기**
```jsx
setSearchParams((prev) => {
  prev.set("page", "3"); // 기존 값 유지하며 'page' 값만 변경
  return prev;
});
```
🔹 기존 URL 값 지우지 않고 **일부 값만 변경**할 때 사용!  

---

### 5️⃣ **숫자 증가 버튼 만들기**
```jsx
function Counter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const count = Number(searchParams.get("count")) || 0; // 없으면 0

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setSearchParams({ count: count + 1 })}>
        +1 증가
      </button>
    </div>
  );
}
```
🖱️ 클릭할 때마다 `count` 값이 1씩 증가하고 URL도 변경됨!  

---

## 🎯 정리  
✅ `useSearchParams`는 **URL의 쿼리값을 가져오고 바꾸는 역할**  
✅ `.get("key")` → 특정 값 가져오기  
✅ `setSearchParams({ key: value })` → 값 변경  
✅ `(prev) => prev.set()` → 기존 값 유지하며 변경  

이제 URL 값을 쉽게 다룰 수 있어요! 🚀

