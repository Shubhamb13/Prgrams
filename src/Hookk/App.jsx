
import ChildA from './Hookk/ChildA'
import { createContext } from 'react'

const data1=createContext()
const data2=createContext()

const App = () => {
   

  const name="shubham"
  const age=24

  return (
    <div>
      <data1.Provider value={name}>
        <data2.Provider value={age}>
         <ChildA></ChildA>
        </data2.Provider>
      </data1.Provider>
    </div>
  )
}

export default App