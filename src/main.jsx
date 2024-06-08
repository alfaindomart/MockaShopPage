import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import { Home } from './pages/Home.jsx'
import { Shop } from './pages/Shop/Shop.jsx'
import { ErrorPage } from './pages/Error.jsx'
import { SingleProduct } from './pages/SingleProduct/SingleProduct.jsx'
import { shopLoader } from './pages/Shop/Shop.jsx'
import { productLoader } from './pages/SingleProduct/SingleProduct.jsx'

import './index.css'



const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Home /> },
          {
            path: "/shop/",
            element: <Shop />,
            loader: shopLoader,
          },
          {
            path: "/shop/product/:id",
            element: <SingleProduct />,
            loader: productLoader,
          },
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
