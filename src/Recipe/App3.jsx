import React from 'react'
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes,} from "react-router-dom";
import Home from './Recipe/Home';
import Navbar from './Recipe/Navbar';
import SpecificCategory from './Recipe/SpecificCategory';
import Meals from './Recipe/Meals';
function App3(){




  return(
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/SpecificCategory' element={<SpecificCategory/>} ></Route>
          <Route path='/Meals'element={<Meals/>} ></Route>
       </Routes>
       
      </BrowserRouter>
    </div>
  )
}
export default App3
