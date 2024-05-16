import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Shop } from './pages/Shop.jsx'
import { ErrorPage } from './pages/Error.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    errorElement: <ErrorPage />,
    // children: [
    //   {
    //     path: "shop/",
    //     element: <Shop />
    //   }
    // ]
  },
  {
    path: "shop",
    element: <Shop />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
