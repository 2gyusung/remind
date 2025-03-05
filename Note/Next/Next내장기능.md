# Font

Next.js는 폰트 최적화 기능을 제공하는데, 이를 통해 외부 폰트를 쉽게 불러오고 성능을 높일 수 있습니다. Next.js의 폰트 기능은 특히 구글 폰트와 같은 웹폰트 사용 시 유용합니다.

현 최신 버전의 Next.js에서는 fonts를 모아두는 폴더가 src 폴더 내에 위치합니다.

<img src="../img/next 내장기능.webp"/>

### **기능**

- **자동 최적화**: Next.js의 폰트 기능은 폰트를 자동으로 최적화해 **성능**과 **사용자 경험**을 개선합니다. 폰트가 필요한 범위 내에서만 로드되도록 하여 **불필요한 리소스 로드**를 방지합니다.
- **사용법**: Next.js 13부터는 `next/font` 패키지를 사용해 Google Fonts나 로컬 폰트를 손쉽게 불러올 수 있습니다.

```javascript
import localFont from 'next/font/local';

const 철수의폰트 = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--철수의폰트",
  weight: "100 900",
});
const 글로벌폰트 = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--글로벌폰트",
  weight: "100 900",
});

export default function RootLayout(props) {
  return (
    <html lang="en">
      <body className={`${철수의폰트.variable} ${글로벌폰트.variable}`}>
        <div>==============레이아웃? 모든 페이지의 공통 조상=============</div>
        <ApolloSetting>
          <Layout>{props.children}</Layout>
        </ApolloSetting>
        <div>==============레이아웃? 모든 페이지의 공통 조상=============</div>
      </body>
    </html>
  );
}

```

로컬 폰트를 불러오려면 `next/font/local`을 사용합니다. 폰트 파일을 프로젝트에 저장하고 경로를 지정하면 됩니다.

이번에는 원하는 영역에 폰트를 적용해보도록 합시다.

```typescript
// page.tsx
import styles from "./styles.module.css";

export default function FontPage() {
  return (
    <>
      {/* 1. 글로벌폰트를 기본으로 보여주기 */}
      <div> font 를 보여줍니다.</div>

      {/* 2. 지정한 폰트를 보여주기 */}
      <div className={styles.폰트를보여주자}>font 를 보여줍니다.</div>
    </>
  );
}
```
```css
// styles.module.css
.폰트를보여주자 {
  font-family: var(--철수의폰트);
}
```
위 예시처럼, css 파일에 폰트를 클래스에 추가하고, 원하는 영역에 클래스를 지정해주면 됩니다.

```javascript
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
});

export default function MyComponent() {
  return (
    <div style={{ fontFamily: roboto.style.fontFamily }}>
      이 문장은 Roboto 폰트로 표시됩니다.
    </div>
  );
}
```
}
​
- next/font/google을 사용하여 Google Fonts를 불러오고, 다양한 속성(서브셋, 가중치, 스타일)을 쉽게 지정할 수 있습니다.

# Image

Next.js에서 **`Image`** 컴포넌트는 이미지를 최적화하고 성능을 극대화하는데 중점을 둡니다. 이 컴포넌트를 사용하면 브라우저 호환성, 이미지 크기 조정, 지연 로드 등 다양한 성능 관련 최적화 기능을 자동으로 적용할 수 있습니다.

### **기능**

- **자동 최적화**: 이미지를 자동으로 필요한 크기만큼 조정하고, 다양한 포맷(WebP, JPEG 등)으로 변환하여 최적의 성능을 제공합니다.
- **지연 로드**: 이미지를 사용자가 화면에 도달할 때까지 로드하지 않고, **지연 로드(Lazy Loading)**를 지원해 페이지 로딩 속도를 높입니다.
- **반응형 이미지**: `Image` 컴포넌트를 사용하면 화면 크기에 맞게 이미지를 자동으로 조정해 모바일과 데스크톱에서 최적의 해상도를 제공할 수 있습니다.

```typescript
"use client";

import Image from "next/image";
import styles from "./styles.module.css";

export default function ImagePage() {
  return (
    <>
      {/* 이미지 고전 방식 */}
      <img
        src="/images/04-01-dog.jpg"
        className={styles.이미지를보여주자}
        alt="강아지이미지"
      />

      {/* 이미지 Next 방식 */}
      <Image
        className={styles.이미지를보여주자}
        src="/images/04-01-dog.jpg"
        alt="강아지이미지"
        width={100}
        height={100}
        sizes="100vw"
      />
    </>
  );
}

```

- **`src`**: 이미지 경로를 지정합니다. **`/public`** 폴더 내의 이미지는 경로에 **`/`**로 시작하는 절대 경로를 사용합니다.
- **`width`와 `height`**: 이미지를 보여줄 크기를 지정합니다. 이 값은 브라우저에서 이미지의 비율을 유지하게 도와줍니다.

> ‼️ ***Next.js Image tag의 width, height 속성***
`Next.js`에서 제공하는 `Image` 컴포넌트는 **이미지 최적화**를 위해 `width`와 `height` 속성을 필수로 요구합니다. 하지만 `width`와 `height` 값을 `0`으로 설정했을 때, 이미지를 감싸고 있는 부모 요소나 CSS 클래스에 의해 크기가 조정될 수 있습니다.
> 
> 
> 이 경우, `width={0}`와 `height={0}`로 설정하더라도, `className`에 적용된 스타일을 통해 이미지의 크기가 결정되기 때문에 이미지를 정상적으로 표시할 수 있습니다. 즉, 이미지 자체의 크기는 `0`으로 지정되었지만, **CSS 클래스에서 지정된 스타일이 우선 적용**되어 이미지의 크기가 반영되는 것이죠.
> 
> 예를 들어:
> 
> ```css
> .이미지를보여주자 {
>   width: 200px;
>   height: auto;
> }
> ```
> 
> 이러한 스타일이 적용된 경우, `Image` 컴포넌트는 `width={0}`과 `height={0}`의 속성을 무시하고, CSS에서 지정한 `500px`로 이미지를 렌더링합니다.
> 
> **정리하자면**, `Image` 컴포넌트의 `width`와 `height` 값이 `0`이라도, CSS에서 설정된 `width`, `height`가 있으면 그 스타일이 적용되어 이미지가 해당 크기로 표시됩니다.
>

### **외부 이미지 사용하기**

Next.js에서 외부 이미지 URL을 사용하려면, `next.config.js`에서 **도메인을 허용**해야 합니다.

https://nextjs.org/docs/messages/next-image-unconfigured-host


```javascript
// next.config.js
module.exports = {
  images: {
    domains: ['example.com'], // 허용할 이미지 도메인 추가
  },
};
```
그 후 외부 이미지를 Image 컴포넌트에서 사용할 수 있습니다.
```javascript
<Image
  src="https://example.com/myimage.jpg"
  alt="설명"
  width={500}
  height={300}
/>
```