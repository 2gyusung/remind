# CSS-Module과 Tailwind CSS 조합 기초

## CSS-Module 소개

**CSS-Module**은 CSS를 컴포넌트별로 모듈화하여 사용하는 방법입니다. CSS-Module을 사용하면 각 컴포넌트의 스타일이 다른 컴포넌트와 충돌하지 않도록 할 수 있습니다. 이것은 CSS 클래스 이름이 로컬화되어 자동으로 고유해지기 때문입니다.

### **장점:**

- **스타일의 격리**: 다른 컴포넌트의 스타일과 충돌하지 않습니다.
- **유지보수 용이**: 스타일을 컴포넌트와 함께 관리할 수 있어 유지보수가 편리합니다.

### **사용법:**

1. **CSS 파일 작성**: CSS 파일의 확장자를 `.module.css`로 합니다.


```css
/* styles.module.css */
.버튼스타일 {
    background-color: yellow;
}

.네모상자스타일 {
    width: 200px;
    height: 200px;
}
```
2. 컴포넌트에서 사용: CSS-Module을 import하여 사용할 수 있습니다.

```javascript
// CssModulePage.jsx
import styles from './styles.module.css';

export default function CssModulePage() {
    return (
        <>
            <button className={styles.버튼스타일}>버튼</button>
            <div className={styles.네모상자스타일}>네모상자</div>
        </>
    );
}
```

## Tailwind CSS 소개

**Tailwind CSS**는 유틸리티 기반의 CSS 프레임워크로, 클래스 이름으로 스타일을 직접 적용할 수 있게 해줍니다. Tailwind는 스타일을 작성하는 대신, 미리 정의된 유틸리티 클래스들을 사용하여 빠르게 디자인할 수 있도록 도와줍니다.

### **장점:**

- **빠른 스타일링**: 미리 정의된 클래스를 사용하여 스타일을 빠르게 적용할 수 있습니다.
- **일관성 유지**: 디자인 시스템을 통해 일관된 스타일을 유지할 수 있습니다.

### **사용법:**

1. **Tailwind 설치 및 설정**: Tailwind CSS를 프로젝트에 설치하고 설정합니다. (프로젝트 설치 시, 테일윈드 설치했다면 바로 사용하시면 됩니다.)

```shell
yarn install tailwindcss
```
tailwind.config.js에서 설정을 합니다.
```javascript
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

2. Tailwind 유틸리티 클래스 사용: 컴포넌트 내에서 직접 Tailwind의 유틸리티 클래스를 사용할 수 있습니다.

```javascript
// TailwindExample.jsx
export default function TailwindExample() {
    return (
        <div className="bg-blue-500 text-white p-4">
            Tailwind CSS를 사용한 예제
        </div>
    );
}
```

## CSS-Module과 Tailwind CSS의 조합

CSS-Module과 Tailwind CSS를 함께 사용하는 것은 두 기술의 장점을 모두 활용할 수 있게 해줍니다. CSS-Module을 통해 컴포넌트의 스타일을 로컬화하고, Tailwind CSS를 사용하여 유틸리티 클래스로 빠르게 디자인을 적용할 수 있습니다.

1. **CSS-Module과 Tailwind CSS의 조합**

```css
/* styles.module.css */
.버튼스타일 {
    @apply bg-yellow-500; /* Tailwind 유틸리티 클래스를 사용하여 배경 색상 적용 */
}

.네모상자스타일 {
    width: 200px;
    height: 200px;
    @apply bg-blue-500; /* Tailwind 유틸리티 클래스를 사용하여 배경 색상 적용 */
}
```

2. React 컴포넌트에서 사용

```javascript
// CssModulePage.jsx
import styles from './styles.module.css';

export default function CssModulePage() {
    return (
        <>
            <button className={styles.버튼스타일}>버튼</button>
            <div className={styles.네모상자스타일}>네모상자</div>
        </>
    );
}
```
이 조합을 사용하면 CSS-Module의 로컬화된 스타일과 Tailwind CSS의 유틸리티 클래스를 동시에 활용할 수 있습니다. CSS-Module은 스타일의 격리를 보장하고, Tailwind CSS는 빠른 스타일 적용을 가능하게 합니다.


<!-- 섹션 04 css-module 참고 노션 -->