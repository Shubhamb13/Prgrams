import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from './Axois/Home'
import Create from './Axois/Create'
import Edit from './Axois/Edit'

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Create' element={<Create/>}></Route>
        <Route path='/edit/:id' element={<Edit/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App