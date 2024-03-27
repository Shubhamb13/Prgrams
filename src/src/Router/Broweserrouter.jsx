import React from 'react'
import { BrowserRouter,  Route, Routes,} from "react-router-dom";
import Home from './Router/Home'
import Navbarr from './Router/Navbarr'
import Aboutt from './Router/Aboutt'

function App(){




  return(
    <div>
      <BrowserRouter>
      <Navbarr>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<Aboutt/>}/>
        </Routes>
      </Navbarr>
      </BrowserRouter>
    </div>
  )
}
export default App
