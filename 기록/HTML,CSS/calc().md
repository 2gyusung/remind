## calc()

**`calc()`** 이라는 함수를 이용하면, **괄호 안의 사칙연산을 수행한 결과**를 **속성값으로 사용**할 수 있습니다.
아래에서 예제를 통해 자세히 알아보도록 하겠습니다.

### 덧셈, 뺄셈
```
.item1{
	background: red;
	width: calc(50px + 50px);
	height: 50px;
}
.item2{
	background: blue;
	width: calc(100% - 120px);
	height: 50px;
}
```
#### ❗️ calc() 함수 사용시 덧셈, 뺄셈 기호 앞 뒤에 반드시 공백을 주셔야 합니다.

### 곱셈, 나눗셈
```
.item3{
	background: green;
	width: calc(2*100px);
	height: 50px;
}
.item4{
	background: orange;
	width: calc(100%/4);
	height: 50px;
}
```