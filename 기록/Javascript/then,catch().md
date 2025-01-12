# 🌿 then(), catch()

통신을 통해 응답을 받아오는 과정은 코드가 실행되는 과정보다 느린 경우가 대다수입니다.
때문에 통신 또한 비동기 처리가 필요합니다.
```javascript
const communicationResult = fetch(HTTP Request)
console.log(communicationResult)
```
위 코드처럼 어떠한 서버로 통신을 요청한 경우 그 결과를 바로 받아와 콘솔로그로 출력해보면, Promise 객체가 담겨져 있습니다. Promise 객체는 비동기 동작의 결과로 받아올 수 있는 객체입니다.

아직은 해당 동작의 결과를 받지 못했지만 언젠간 돌려줄 것이라는 약속이 담긴 객체죠. 그 응답이 정상적인 응답일지, 에러를 돌려줄지는 알 수 없습니다. 그리고 Promise 객체가 반환되는 이유는 코드의 실행이 통신의 결과를 받는 것보다 느리기 때문이죠. 그렇기 때문에 우리는 통신의 결과를 특정 로직에 적용시키고 싶다면, 그 결과를 받아올 때까지 기다려줄 필요가 있습니다.

비동기 통신을 처리해주는 방법은 여러가지가 있는데, 우리는 then(), catch() 메서드를 사용해서 처리하는 방법을 알아볼게요.

## then()

es6 문법인 fetch()를 사용해주면 JavaScript에서 바로 통신을 수행할 수 있습니다.
```javascript
fetch(HTTP Request).then()
```
fetch()를 사용한 후에 그 응답을 받아올 때까지 기다리도록 fetch()에 붙여서 then()을 사용해주면 됩니다.
then() 메서드는 fetch()뿐만 아니라 Promise 객체를 돌려주는 함수라면 언제든 사용할 수 있습니다.
해당 요청에 의한 통신이 완료 되었다면, then() 메서드 내부로 코드의 실행이 옮겨집니다.
```javascript
fetch(HTTP Request)
	.then((res) => {
		console.log(res)
	})
```
then() 메서드 내부에 익명 함수를 하나 만들고 그 안에서 매개변수로 데이터를 받을 수 있는데,
이때, 받아오는 데이터가 바로 통신의 결과로 우리에게 돌려준 데이터입니다.
그 응답을 받아올 때까지 기다려서 정상적인 값을 받아올 수 있죠.
## catch()

만약 통신을 수행하다가 통신에서 문제가 생긴다면, 혹은 then() 메서드 내에서 로직을 수행하다가 에러를 만난다면 우리는 catch 메서드로 그 분기를 나눠줄 수 있습니다.

```javascript
fetch(HTTP Request)
	.then((res) => {
		console.log(res)
	})
	.catch((err) => {
		console.error(err)
	})
```
이런식으로 then() 메서드 뒤에 붙여서 작성해주면 됩니다. 그리고 catch() 메서드 내부에도 익명 함수를 넣어줄 수 있는데, 해당 함수의 매개변수로 error의 내용을 받아올 수도 있습니다.