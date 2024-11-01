# new Date

자바스크립트에서의 날짜 데이터는 일종의 객체로 관리가 됩니다.
그리고 그 날짜 데이터는 new Date를 사용해서 가져올 수 있죠.
```
new Date()
```
이렇게 입력해주면 사용자의 컴퓨터 시간을 기준으로 현재 날짜, 시간을 모두 구해올 수 있습니다.
```
new Date("2022-09-09")
```
이런식으로 날짜의 형태만 갖추어준다면 특정 날짜의 데이터도 받아올 수 있죠.


```
생성된 Date 객체의 메서드를 사용하여 시, 분, 초, 밀리초를 가져옵니다.

getHours() 메서드는 생성된 Date 객체에서 시간(0 ~ 23)을 가져옵니다.
getMinutes() 메서드는 생성된 Date 객체에서 분(0 ~ 59)을 가져옵니다.
getSeconds() 메서드는 생성된 Date 객체에서 초(0 ~ 59)를 가져옵니다.
getMilliseconds() 메서드는 생성된 Date 객체에서 밀리초(0 ~ 999)를 가져옵니다.
```
```javascript
var todayHours = today.getHours();
var todayMinutes = today.getMinutes();
var todaySeconds = today.getSeconds();
var todayMilliseconds = today.getMilliseconds();
```
