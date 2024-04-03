import React from 'react'
import { createBrowserRouter } from "react-router-dom";


const routers = createBrowserRouter([
  {
    path: "/",
    element: <div>Router: Hello World</div>,
  },
  {
    path: "/test",
    element: <div>Router: test</div>,
  }
])

export default routers