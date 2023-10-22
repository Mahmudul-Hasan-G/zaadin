import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Men from './component/Men/Men';
import Home from './component/Layout/Home';
import Shop from './component/Shop/Shop';
import Women from './component/Women/Women';
import Kids from './component/Kids/Kids';
import Leather from './component/Leather/Leather';
import Jewelry from './component/Jewelry/Jewelry';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children:[
      {
        path: '/',
        element: <Shop />
      },
      {
        path: '/men',
        element: <Men />
      },
      {
        path: '/women',
        element: <Women />
      },
      {
       path:'/kids',
       element: <Kids />
      },
      {
        path: '/leather',
        element: <Leather />
      },
      {
        path: '/jewelry',
        element: <Jewelry />
      }

    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
