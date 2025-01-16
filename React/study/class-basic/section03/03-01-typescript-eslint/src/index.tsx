import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Aaa from "./routes/aaa";
import Bbb from "./routes/bbb";
import Signup from "./routes/signup";
import SignupRefactoring from "./routes/signup2-refactoring";

// @ts-ignore
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const 철수의페이지목록 = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/aaa", element: <Aaa /> },
  { path: "/bbb", element: <Bbb /> },
  { path: "/signup", element: <Signup /> },
  { path: "/signup2-refactoring", element: <SignupRefactoring /> },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as ReactDOM.Container,
);
root.render(
  <RouterProvider
    router={철수의페이지목록}
  /> /* RouterProvider({ router: 철수의페이지목록 }) 과 동일 */,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
