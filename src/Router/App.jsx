import React from 'react'
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Home from './Router/Home'
import Navbarr from './Router/Navbarr'
import Aboutt from './Router/Aboutt'

function App(){


  const router = createBrowserRouter([
    {
      path: "/home",
      element:<Home/>,
    },
    {
      path: "/about",
      element:<Aboutt/>,
    },
    {
      path: "/",
      element:<Navbarr/>,
    },
    {
      path: "*",
      element: <h1>Error 404</h1>,
    },


  ]);


  return(
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}
export default App
