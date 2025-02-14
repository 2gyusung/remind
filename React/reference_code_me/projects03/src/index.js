import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import BoardsDetail from "./routes/boards/detail/BoardsDetail";
import BoardsNew from "./routes/boards/new/BoardsNew";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const pageList = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/boards/new", element: <BoardsNew /> },
  { path: "/boards/detail", element: <BoardsDetail /> },
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={pageList} />);


