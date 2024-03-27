import React from 'react'
import { useId } from 'react'

const App = () => {
  const id1=useId()
  const id2=useId()
  return (
    <div id={id1}>
      <h1 id={id2}>Hello we are using UseId</h1>
    </div>
  )
}

export default App