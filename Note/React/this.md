# 📌 클래스 컴포넌트와 this 쉽게 이해하기

## 1️⃣ 클래스란?
클래스는 **객체를 만드는 설계도**입니다. 예를 들어, 붕어빵 기계(클래스)를 만들면, 똑같은 모양의 붕어빵(객체)을 여러 개 찍어낼 수 있습니다.

### 🔹 클래스의 기본 구조
```jsx
class Monster {
  power = 50; // 변수 선언
  
  attack() { // 메서드(함수) 선언
    console.log("공격합니다!");
  }
}
```

- `power`는 **클래스 내부 변수(프로퍼티)**
- `attack()`은 **클래스 내부 함수(메서드)**
- `new Monster()`로 새로운 객체(인스턴스)를 만들 수 있음

### 🔹 인스턴스란?
**인스턴스는 클래스를 기반으로 실제로 만들어진 객체입니다.**
즉, 붕어빵 기계(클래스)에서 나온 붕어빵(인스턴스)입니다.
```jsx
const monster1 = new Monster();
const monster2 = new Monster();
```
- `monster1`, `monster2`는 `Monster` 클래스에서 만들어진 각각의 **인스턴스**
- 각 인스턴스는 독립적으로 동작 가능

---

## 2️⃣ `this`란?
`this`는 **현재 실행 중인 객체(인스턴스)를 가리키는 키워드**입니다.

### 🔹 `this`의 동작 방식
#### ✅ 전역에서 `this` 사용 (브라우저 기준)
```jsx
function sayHello() {
  console.log(this);
}
sayHello();
```
**결과:** `Window {...}`  
➡ 전역에서 호출하면 `this`는 `window` 객체를 가리킵니다.

#### ✅ 객체 내부에서 `this` 사용
```jsx
const user = {
  name: "철수",
  greet() {
    console.log(this.name);
  }
};
user.greet();
```
**결과:** `철수`
➡ `this`는 `user` 객체를 가리킵니다.

#### ✅ 클래스에서 `this` 사용
```jsx
class Person {
  name = "영희";
  introduce() {
    console.log(this.name);
  }
}
const person = new Person();
person.introduce();
```
**결과:** `영희`
➡ 클래스에서 `this`는 해당 인스턴스를 가리킵니다.

---

## 3️⃣ 클래스 컴포넌트에서 `this` 문제와 해결법

### ❌ 문제: `this`가 undefined가 되는 경우
```jsx
class Counter extends React.Component {
  state = { count: 0 };

  onClickCountUp() {
    console.log(this.state.count); // ❌ 오류 발생 (this가 undefined)
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return <button onClick={this.onClickCountUp}>+</button>;
  }
}
```
**문제:** `onClickCountUp` 함수에서 `this.state.count`를 찾을 수 없음 (this가 undefined)

### ✅ 해결 방법 1: 화살표 함수 사용 (가장 추천)
```jsx
onClickCountUp = () => {
  console.log(this.state.count); // ✅ 정상 동작
  this.setState({ count: this.state.count + 1 });
};
```
✔ 화살표 함수는 `this`를 자동으로 현재 클래스 인스턴스로 고정합니다.

### ✅ 해결 방법 2: `bind(this)` 사용
```jsx
constructor(props) {
  super(props);
  this.onClickCountUp = this.onClickCountUp.bind(this);
}
```
✔ `bind(this)`를 사용하면 `onClickCountUp`에서 `this`가 고정됩니다.

### ✅ 해결 방법 3: JSX에서 `bind(this)` 사용 (비추천)
```jsx
<button onClick={this.onClickCountUp.bind(this)}>+</button>
```
❌ 매번 렌더링할 때마다 `bind(this)`가 실행되므로 성능이 떨어질 수 있습니다.

---

## 🔥 결론: 어떤 방법을 써야 할까?
| 해결 방법 | 추천 여부 | 설명 |
|-----------|----------|------|
| 화살표 함수 (`onClickCountUp = () => {}`) | ✅ **가장 추천** | 가독성 좋고 `this` 문제 해결됨 |
| `bind(this)`를 `constructor`에서 사용 | ✅ 추천 | `this` 문제 해결됨, 성능 좋음 |
| `bind(this)`를 JSX에서 직접 사용 | ❌ 비추천 | 성능 이슈 발생 가능 |

✔ **React에서는 화살표 함수(`onClickCountUp = () => {}`) 방식이 가장 깔끔하고 직관적이므로 추천됩니다!** 🚀

