import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './Component/Navbar'
import Form from './Component/Form'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar/>,
  },
  {
    path: "/form",
    element: <Form/>,
  }

]);


createRoot(document.getElementById('root')).render(

   <RouterProvider router={router} />,
 
)
