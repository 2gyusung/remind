# float 레이아웃

전통적으로 레이아웃을 구성할때 사용하던 방법입니다.

하지만 float 레이아웃은 PC로만 인터넷에 접속할 수 있던 시절에 고안되었기 때문에,
반응형 웹에는 적합하지 않습니다.

> ❗️ **반응형 웹이란?**
모바일, 태블릿, 데스크탑 PC 등 **접속하는 기기의 너비에 맞추어** 레이아웃이 변하는 웹페이지
>

## **float**

HTML 요소를 일반적인 흐름(normal flow)으로부터 벗어나서 특정한 컨테이너의 좌측 혹은 우측을 감싸는 형태로 강제 배치할 수 있도록 도와주는 속성입니다.

- **float: none (기본값)**
- **float: left**
- **float: right**

## **clear**

float가 적용된 요소에 추가로 줄 수 있는 속성으로, float의 영향력을 해당 요소에 한해 해제합니다.

- **clear: none (기본값)**
- **clear: left**
- **clear: right**
- **clear: both**