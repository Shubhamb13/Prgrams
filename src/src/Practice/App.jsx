import React from 'react'
import Home from './Practice/Home'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import About from './Practice/About'
import Contact from './Practice/Contact'

const App = () => {
  return (
    <div className='App'>
    <BrowserRouter>
     
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/> 
          <Route path='/Contact' element={<Contact/>}/>
        </Routes>
      
    </BrowserRouter>
    </div>
   
  )
}

export default App