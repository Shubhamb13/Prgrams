
import { useContext } from 'react'
import {data1,data2} from '../../src/App'

const ChildC = () => {
    const name=useContext(data1)
    const age=useContext(data2)
  return (
    <div>My name is {name} and my age is {age}</div>
  )
}

export default ChildC