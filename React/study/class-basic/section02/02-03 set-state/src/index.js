import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Aaa from './routes/aaa'
import Bbb from './routes/bbb'
import Board1 from './routes/board1';
import BoardRe from './routes/board2-re';

 const 철수의페이지목록 =  createBrowserRouter([
    {path: "/" , element: <App/>},
    {path: "/aaa", element :<Aaa/>},
    {path: "/bbb", element :<Bbb/>},
    {path: "/board1", element :<Board1/>},
    {path: "/board2re", element :<BoardRe/>}
    
 ])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={ 철수의페이지목록 } />

);


