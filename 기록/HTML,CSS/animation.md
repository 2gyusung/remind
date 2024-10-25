# animation

### CSS를 이용해서 애니메이션을 만드는 두 가지 방법

#### 1. transition 속성 활용

transition은 특정 이벤트를 기점(hover 등)으로 작동합니다.
지난 시간에 알아보았던 방법이며, **혹시 기억이 안난다면 지난 시간 강의를 복습**하고 오시길 바랍니다.

#### 2. animation 속성과 keyframe 활용

시작하기 위한 이벤트가 필요 없습니다.
그리고 애니메이션의 시작, 정지, 반복까지 제어가 가능합니다.

# @keyframes란?
CSS 애니메이션 의 시작, 중간, 끝 등의 중간 상태를 정의 합니다.
keyframe 작성 방법은 아래와 같습니다.
```css
/* keyframe 작성 방법 */
@keyframes 애니메이션이름 {
	from {
		left : 0;
	}
	to{
		left : 200px;
	}
}
```
from 과 to 대신 진행도(%) 표기도 가능합니다.
```css
/* keyframe 작성 방법 */
@keyframes 애니메이션이름{
	0% {
		left : 0;
	}
	50%{
		left : 200px;
	}
	100%{
		top : 200px;
		left :  200px;
	}
}
```

# animation 관련 속성들

### animation-name
어떠한 keyframes를 요소에 적용할 것인지 지정합니다.
```
animation-name: moveRight
```

​
### animation-duration
애니메이션을 한 번 재생하는데 걸리는 시간을 설정합니다.
```
animation-duration: 2s
```

- normal : 정방향으로 재생합니다.
- reverse : 역방향으로 재생합니다.
- alternate : 정방향으로 재생합니다. (단, 정방향/역방향을 번갈아 재생합니다.)
- alternate-reverse : 역방향으로 재생합니다. (단, 역방향/정방향을 번갈아 재생합니다.)

### animation-iteration-count

애니메이션 재생 횟수를 정의 합니다.
```
animation-iteration-count : infinite | 3
```

### animation-timing-function

애니메이션 재생 패턴을 정의하며, transition-timing-function과 유사합니다.
```
animation-timing-function : ease-in-out
```
###  animation-delay

애니메이션 시작을 얼마나 지연할 지 설정합니다.
```
animation-delay : 2s
```

## animation 단축속성

애니메이션 카테고리에 속한 속성들도 **`단축 속성으로 모아서 지정`** 해줄 수 있습니다.

만일 **`순서가 바뀔 경우`** , **오류**가 발생 하거나 **의도와 다른 결과**가 도출 될 수 있으니 단축 속성을 사용하실 때는 순서에 유의하시길 바랍니다.

<img src="./img/animation.png
">