import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Tablee from './Tablee/Tablee';
import View from './View/View';
import Add from './Add/Add';
const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children:[
      {
        path: "/",
        element:<Tablee/>,

      },
      {
        path: "View/:userID",
        element:<View/>,

      },
      {
        path: "Add",
        element:<Add/>,

      },
      
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>
);

