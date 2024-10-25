 # position
 position이란 HTML 요소가 배치되는 방식을 결정하는 속성입니다.

 ### position의 속성값
 포지션이라는 속성에는 총 다섯가지 속성값을 줄 수 있습니다.

 - static(기본값)
- relative
- absolute
- fixed
- sticky

position에 어떠한 속성값을 입력했느냐에 따라,
top, left, bottom, right 속성을 이용해 요소의 좌표값을 변경하는 방식이 달라집니다.
이 부분에 유의하여 position의 속성값을 하나씩 살펴보도록 하겠습니다.

### position : static(기본값)

문서상 원래 있어야 하는 위치에 배치됩니다.

❗️**`이때는 top, left, bottom, right 속성을 사용할 수 없습니다.`**
즉, **위치 조정이 불가능한 기본 HTML 요소의 상태**라고 생각하시면 됩니다.

### position : relative

**`원래 있던 자리를 기준`** 으로 **요소의 위치를 조정**할 수 있습니다.
top, left, bottom, right 속성 적용이 가능합니다.

### position : absolute

**`절대 좌표를 기준`** 으로 **요소의 위치를 조정**할 수 있습니다.

기준이 절대 좌표인 만큼, **절대 좌표의 기준이 되는 축**이 있어야 겠죠?
대상 요소의 부모 중 **`relative가 적용 된 요소`** 를 찾아서 **절대 좌표의 기준**으로 삼게 됩니다.

만일, relative가 적용 된  요소가 없다면, HTML의 바디 전체를 기준으로 잡게 됩니다.
top, left, bottom, right 속성 적용이 가능합니다.

### position : fixed

**`viewport를 기준`** 으로 **요소의 위치를 조정**할 수 있습니다.

스크롤을 내려도 사라지지않고 화면 어딘가에 고정되어 있는 메뉴를 보신적 있으신가요?
그런 메뉴들은 대부분 position : fixed를 이용해서 만듭니다.
top, left, bottom, right 속성 적용이 가능합니다.

### position : sticky

**`부모 요소의 좌표 기준`** 으로 **요소의 위치를 조정**할 수 있습니다.
position : sticky는 최근에 추가된 속성입니다.

**스크롤을 내려가지 않았을 때**는 **static처럼 작동**하다가,
해당요소의 위치 **아래로 스크롤이 내려가면** **지정한 좌표에 고정**시켜 줍니다.