# 내장함수(타이머)

내장함수라는 것은 자바스크립트가 함수 선언을 미리 해놔서 호출만으로 사용할 수 있는 함수를 뜻합니다.

### alert : 메세지를 지정할 수 있는 경고 대화 상자를 띄웁니다.
```javascript
//alert 만들어보기 _ 콘솔에서 해보세요!
alert("이렇게 만드시면 경고창이 생겨요!")
```

### setTimeout : 시간 지연함수로 입력 시간이 만료된 후 함수나 지정함 코드를 실행합니다.
```
setTimeout(기능, 시간) // 기능은 함수이고, 시간은 밀리세컨드 단위입니다.
```
### setInterval : 시간 반복함수로 입력한 시간마다 함수를 반복적으로 호출하거나 코드를 실행합니다.
```
setInterval(기능, 시간)         // 기능은 함수이고, 시간은 밀리세컨드 단위입니다.
```
### 내장함수 예제
```javascript
// setTimeout 예제
console.log("로딩을 시작합니다.")
setTimeout(function(){
		console.log("로딩 완료.")                        // 로딩을 시작합니다.
}, 3000)                                           // 로딩 완료.

// setInterval 예제
setInterval(function(){
		const now = new Date()
		const minutes = now.getMinutes()
		const seconds = now.getSeconds()

		console.log(minutes + "분" + seconds + "초")         // 16분 11초
                                                        // 16분 12초
}, 1000)                                                // 16분 13초
                                                        // 16분 14초
																									      //	  ...

```
```javascript
let timer = 180
setInterval(function(){
		timer = timer - 1;
		const minutes = Math.floor(timer / 60)
		const seconds = timer - minutes * 60
		console.log(minutes + ":" + seconds)
}, 1000)
```
```javascript
// 시간지연함수 강제종료
const time = setTimeout(기능, 시간)    // 시간지연함수를 임시로 변수/상수에 저장해놓습니다.
clearTimeout(time)              // 저장했던 시간지연함수를 종료합니다.

// 시간반복함수 강제종료
const time = setInterval(기능, 시간)   // 시간반복함수를 임시로 변수/상수에 저장해놓습니다.
clearInterval(time)                   // 저장했던 **시간반복함수를 종료**합니다.
```
