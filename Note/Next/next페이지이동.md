Next.js의 **App Router**를 사용하면, 폴더 구조만으로 간단하게 페이지를 만들고 주소를 관리할 수 있습니다. 파일이나 폴더의 이름에 따라 자동으로 URL이 생성되며, 코드 내에서 별도의 라우팅 설정을 할 필요가 없습니다.

## 기본 폴더 구조와 URL 매핑

- **`app` 폴더**: Next.js 13부터는 `app` 폴더를 사용하여 페이지를 생성합니다. 폴더 구조가 URL과 자동으로 매핑됩니다.
    
    예시:
    
    - `app/page.tsx`: 홈페이지(`/`)
    - `app/about/page.tsx`: `/about`
    - `app/blog/page.tsx`: `/blog`
    
    파일 이름이 `page.tsx`라면, 그 파일이 해당 폴더의 경로로 접근 가능한 페이지가 됩니다.
    

## 폴더를 이용한 다중 페이지 구현

- 각 페이지를 새로운 폴더로 만들면, 해당 경로에 자동으로 매핑됩니다.
    
    **예시:**
    
    ```bash
    /app
      /about
        page.tsx  -> /about 경로로 매핑
      /contact
        page.tsx  -> /contact 경로로 매핑
    ```
    

## Link 컴포넌트 사용

페이지 간 이동 시, Next.js에서 제공하는 **`<Link>`** 컴포넌트를 사용합니다. 이 컴포넌트는 클라이언트 사이드 라우팅을 지원하여 페이지 전환을 빠르게 처리합니다.

```javascript
import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/about">About Us</Link>
    </div>
  );
}
```
이 방식은 성능 면에서 최적화되었고, 폴더 구조만으로도 매우 직관적으로 URL을 설정할 수 있다는 장점이 있습니다.

> **💥 동적 라우팅**
> 
> 
> 동적인 경로는 **폴더 이름을 대괄호**로 감싸서 표현합니다. 이를 통해 URL 파라미터를 받을 수 있습니다.
> 
> **예시:**
> 
> `app/blog/[id]/page.tsx`: `/blog/123` 처럼 동적으로 id 값을 받을 수 있습니다.
>

<!-- 섹션 04 next 페이지이동 참고 노션 -->