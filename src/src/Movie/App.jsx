import React from 'react'
import Home from './Movie/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App