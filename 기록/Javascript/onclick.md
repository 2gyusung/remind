# onclick 이벤트 추가

# onclick

HTML의 태그에는 부여할 수 있는 속성이 다수 존재합니다.

각 태그를 구분하기 위한 id, class와 같은 속성은 물론
onclick과 같은 속성도 존재하죠

onclick 속성은 해당 속성을 부여받은 태그가 사용자에 의해 클릭 되었을 때, 할당되어 있는 수식, 혹은 코드를 실행합니다.

```javascript
<head>
    <script>
        const btnFunc = function() {
            console.log("버튼이 눌렸어요!")
        }
    </script>
</head>
<body>
    <button onclick="btnFunc()">버튼</button>
</body>
```
위의 코드는 버튼 태그를 눌렀을 때, 콘솔 창에 "버튼이 눌렸어요!"라는 메세지가 출력되는 코드입니다.

# querySelector

`querySelector`를 사용하면 JavaScript 내에서 HTML의 요소를 참조할 수 있습니다.
태그 그 자체를 참조할 수도 있고, input 태그와 같이 그 값이 입력 가능한 태그라면 해당 데이터도 참조해 올 수 있죠.

querySelector를 활용할 때는 태그명, 예를 들어 div 태그라면 "div"라는 문자열을 그대로 입력해서 해당 태그를 참조해 올 수 있죠.

하지만 대부분의 태그는 중복됩니다.

이러한 경우 id, class로 태그를 특정해 주어야 하는데,
`id`는 `"#"`, `class`는 `"."`을 `querySelector()`의 소괄호 안에 입력되는 id 혹은 class명 앞에 붙여주면 됩니다.

