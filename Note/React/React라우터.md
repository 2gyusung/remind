# React 페이지 이동

# React에서 페이지 이동

## React-Router 소개

리액트는 **SPA(Single Page Application)**, 즉 **한 페이지에서 여러 화면을 구성하는 방식**으로 동작합니다. 보통 웹 사이트에서 페이지를 이동할 때마다 전체 페이지가 새로고침되면서 느리게 느껴지죠. 그런데 리액트는 **React-Router**라는 라이브러리를 이용해 화면을 부드럽게 전환할 수 있습니다. 페이지를 새로고침하지 않고, URL만 변경된 것처럼 보이게 해서 매우 빠르게 동작합니다.

**React-Router**는 이러한 URL 전환을 관리해주는 도구로, 리액트 앱 안에서 여러 화면을 쉽게 전환할 수 있도록 도와줍니다.

## react-router-dom 설치 및 실습

`react-router-dom`은 리액트에서 라우팅 기능을 담당하는 패키지입니다. 라우팅을 통해 여러 페이지로 쉽게 이동할 수 있게 해주죠.

```bash
npm install react-router-dom
```

### **라우터 사용하기**:

1. 먼저, `BrowserRouter`나 `createBrowserRouter`를 사용해 앱에 라우팅 기능을 추가합니다.
2. 그 후, `<Link />` 컴포넌트나 `<RouterProvider />`로 각 페이지를 연결합니다.

```jsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Aaa from './routes/aaa';
import Bbb from './routes/bbb';
import App from './App';

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/aaa", element: <Aaa /> },
  { path: "/bbb", element: <Bbb /> }
]);

function Root() {
  return <RouterProvider router={router} />;
}
```

## 프래그먼트(<>...</>) 소개

리액트에서는 **불필요한 HTML 요소를 생성하지 않고** 여러 컴포넌트를 한꺼번에 감싸야 할 때가 많습니다. 이때 **프래그먼트(Fragment)**를 사용합니다.

프래그먼트는 `<div>` 같은 추가적인 DOM 요소 없이, 여러 요소를 감쌀 수 있는 도구입니다. 이렇게 하면 불필요한 HTML 태그가 생기는 것을 막을 수 있죠.

```jsx
return (
  <>
    <div>첫 번째 요소</div>
    <div>두 번째 요소</div>
  </>
)
```

여기서 `<>...</>`는 사실상 아무것도 그리지 않고 요소들을 감싸는 역할을 합니다.

## `<Link />`와 `<a />`의 차이: SPA vs MPA

- **`<a href="...">`**: 전통적인 HTML 태그로, 사용자가 링크를 클릭하면 **전체 페이지가 새로고침**되면서 해당 URL로 이동합니다. 이 방식을 **MPA(Multi Page Application)**라고 합니다. 페이지를 새로고침하는 동안 시간이 걸리기 때문에 느릴 수 있어요.
- **`<Link to="...">`**: 리액트 라우터에서 사용하는 링크 태그입니다. 페이지 전체를 새로고침하지 않고 **JS로 현재 페이지의 일부만 업데이트**합니다. 이 방식을 **SPA(Single Page Application)**이라고 하며, 화면 전환이 매우 빠릅니다.

```jsx
<Link to="/bbb">Bbb로 이동</Link>  {/* SPA 방식 */}
<a href="/bbb">Bbb로 이동</a>  {/* MPA 방식 */}
```

## `<Link />`에서 `'/'`와 `'./'`의 차이

리액트에서 **`<Link to="/...">`**와 **`<Link to="./...">`**는 URL 경로 처리 방식에 차이가 있습니다.

- **`<Link to="/bbb">`**: 절대 경로로 이동합니다. 즉, **사이트의 루트 경로에서 `/bbb`로 이동**합니다.
- **`<Link to="./bbb">`**: 상대 경로로 이동합니다. 즉, **현재 경로에 `./bbb`를 붙여서** 이동합니다. 만약 현재 경로가 `/aaa`라면, `./bbb`는 `/aaa/bbb`로 이동하려는 것이므로 경로가 잘못될 수 있어요.

```jsx
<Link to="/bbb">Bbb로 이동 (절대 경로)</Link>
<Link to="./bbb">Bbb로 이동 (상대 경로)</Link>
```

절대 경로를 사용하면 어디서든지 원하는 URL로 정확하게 이동할 수 있지만, 상대 경로는 현재 위치에 따라 달라지므로 주의해야 합니다.