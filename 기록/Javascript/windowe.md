
🌿 window.event


## Event

우리는 자바스크립트에서 **window.event**를 통해 **window 객체 내의 evnet** 속성으로 접근할 수 있습니다.
여기서 window 객체는 **`현재의 DOM 문서를 담고 있는 창, 그 자체`** 를 가리킵니다.
window 객체 내부에는 기본적으로 **`내장되어 있는 함수, 변수, 객체 등이 존재`** 합니다.
그리고 그 속성 중에는 **event 속성**이 존재하죠.

**Event란,** **DOM 내에서 발생하는 이벤트를 의미**합니다.
여기서 이벤트란, **`키보드 버튼을 누르거나 마우스를 클릭 하는 등, 사용자의 액션`** 을 말합니다.
우리는 이 **event 속성을 활용해 사용자의 행동에 따른 결과값**을 만들어 낼 수 있습니다.
예를 들어 사용자가 inputbox에 이름을 적고 엔터 버튼을 눌렀을 때 어떠한 함수를 실행하도록 하고 싶다면,
아래와 같은 코드를 작성할 수 있습니다.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document</title>
		<script>
      const printName = function () {
        const inputValue = document.querySelector('#name-input-box');
        if (window.event.keyCode === 13) {
          console.log(inputValue.value);
        }
      };
    </script>
  </head>
  <body>
    <input id="name-input-box" onKeydown="printName()" />
  </body>
</html>
```
키보드의 Enter 버튼은 13이라는 keyCode 숫자를 가집니다.
해당 input 태그 내에서 버튼이 눌릴 때마다 함수가 실행 되도록 onkeydown 속성에 해당 함수를 할당해주고,
이때 발생하는 event를 체크해서 key code가 13이라면 Enter 버튼이 눌린 것이니까 조건문을 통과해서 실행
이러한 로직으로 각 event 속성에 담긴 데이터를 기반으로 특정 기능들을 실행해 줄 수 있는거죠.