## font-family

HTML 요소의 글씨체를 바꾸고 싶다면 **`font-family`** 라는 속성을 이용하면 됩니다.

사용방법은 아래와 같이 간단합니다.
```

.선택자{
	/* 폰트이름에 공백이 있는 경우 */
	font-family:"폰트 이름","폰트 이름2","폰트 이름3"
	/* 폰트이름에 공백이 없는 경우 */
	font-family:폰트이름,폰트이름2,폰트이름3
	/* 혼용해서 사용할 경우 */
	font-family:폰트이름,"폰트 이름2"
}
```
한가지의 `font-family` 를 적용해도 되지만, 위와 같이 여러개의 `font-family` 를 적용할 수도 있습니다.
이런 경우, **앞에서부터 순서대로 지정한 폰트가 적용됩니다.**

즉, 첫 번째 폰트 파일을 찾을 수 있다면 첫 번째 폰트를 적용하고, 없다면 다음 폰트 파일을 찾아 적용하는 식으로 우선 순위를 두게 됩니다.

### ? font-family를 적용하기 위해서는…

앞서 font-family 적용 우선 순위에 대해 설명할 때 “**없으면** 다음으로 넘어간다.” 고 했습니다.

즉, **`해당 폰트 파일이 유저의 컴퓨터에 설치되어 있어야 HTML 문서에 적용이 가능하다는 뜻`** 입니다.

하지만, 폰트를 적용하기 위해 해당 웹사이트에 접속하는 모든 유저에게 “폰트를 설치 후 이용해주세요!” 라는 메시지를 띄운다면, 유저 편의성이 너무 떨어지겠죠?

## 웹폰트

위와 같은 단점을 보완하고자 만들어진 것이 바로 `웹폰트` 입니다.

**웹폰트**는 사용자가 **본인의 컴퓨터에 폰트를 직접 설치하지 않아도 특정 서버에 위치한 폰트를 다운받아 웹페이지에 표시** 할 수 있게 해줍니다.

이런 웹폰트를 적용해보는 방법을 알아보도록 하겠습니다.
- **`@font-face` 를 이용합니다.**
    1. **웹 폰트 파일**을 준비합니다.(확장자 명 : woff / woff2 / ttf / eot )
    2. **css 문서**에서 ****`@font-face`****를 이용해 폰트 파일을 불러옵니다.
3. **`@font-face`** 안에서 해당 폰트 파일을 어떤 이름의 font-family로 지정할 것인지 설정해줍니다.

### 2. **외부 서비스에서 제공하는 링크를 이용하는 방법**

> ❗️ 웹폰트 링크를 제공하는 서비스에는 여러가지가 있습니다.
오늘은 그 중 가장 대중적으로 사용되는 **Google fonts 서비스**를 이용해 볼 것입니다.
> 
- **`@import` 를 이용합니다.**
    1. **google fonts 사이트에 접속** 후 , 원하는 폰트 옆에 있는 **select this style를 클릭**합니다.

    use on web 항목에서 import를 선택하고, 해당 import 구문을 css파일 내에 입력합니다.

    css rules to specify families를 참고하여 font-family를 적용해주시면 됩니다.
    
# 폰트 관련 속성
폰트에 적용할 수 있는 속성은 다양

## font-size

텍스트의 **크기를 지정**하는 속성입니다.

사용 방법은 아래와 같습니다. 속성 값에는 px, rem, em 등의 단위를 사용할 수 있습니다.
```
font-size : 14px;
```
## font-weight

텍스트의 **두께를 지정하는 속성**입니다.

100단위의 수치를 직접 입력하거나 regular, bold등의 키워드를 속성 값으로 줄 수 있습니다.

사용 방법은 아래와 같습니다.
```
font-weight : 600
```
## text-decoration

텍스트에 **장식용 선을 추가**합니다.

사용 방법은 아래와 같습니다.
```
/* 해당 속성값들 중 택1 해서 사용할 수 있습니다. */
text-decoration: underline | overline | line-through | none
```

## color

텍스트의 **색상을 지정**합니다.

사용 방법 예시는 다음과 같습니다.
```
/* 헥스코드 입력시(헥스코드는 6자리 입니다.) */
color : #000000

/* rgb색상 이용시 */
color : rgb(0,0,0)

/* 키워드 이용시 */
color: red
```

## line-height

텍스트의 행간을 설정합니다.
```
line-height : 1.8
```

## letter-spacing
텍스트의 자간을 설정합니다.
```
letter-spacing : 0.1rem
```

## word-spacing
텍스트의 단어 간 간격을 지정합니다.
```
word-spacing : 2px
```
## text-align
블록요소나 표안에서 텍스트의 가로 정렬방식을 지정합니다.
```
text-align : center | left | right | justify
```
## vertical-align
인라인 요소나 표안에서 텍스트의 세로 정렬 방식을 지정합니다.
```
vertical-align : top | middle | bottom
```
## text-indent
텍스트의 들여쓰기를 설정합니다.
```
text-inedent: 10%
```
## text-transform
영문 텍스트의 대소문자를 바꿀 수 있습니다.
```
text-transform: cpaitalize | none | uppercase | lowercase
```
## word-break
텍스트가 콘텐츠박스 영역 밖으로 넘쳤을 때, 어떻게 줄을 바꿀지 설정
```
word-break: keep-all | break-all
```
## overflow-wrap
단어가 콘텐츠 박스 영역 밖으로 넘쳤을 때, 줄바꿈 여부를 설정
```
overflow-wrap: normal | break-word
```
## overflow
콘텐츠가 커서 요소 안에서 내용을 다 보여주기 힘들 때 어떤 방식으로 보여줄 지 설정
```
overflow: visible | hidden | scroll | auto
```

## text-overflow
줄바꿈을 하지 않을 때, 요소 밖으로 넘치는 text를 어떻게 표기 할 것인지 설정
```
text-overflow: clip | ellipsis
```