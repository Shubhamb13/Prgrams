import React from 'react'
import { BrowserRouter, Route, Routes,} from "react-router-dom";
import Home from './Router/Email and Password/Home'
import Login from './Router/Email and Password/Login'
import Signup from './Router/Email and Password/Signup'
function App(){

  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/Home' element={<Home/>}/>
        </Routes>  
      </BrowserRouter>
    </div>
  )
}
export default App
