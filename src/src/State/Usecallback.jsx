import React, { useCallback, useState } from 'react'

const Usecallback = () => {
    const[count,Setcount]=useState(0)

    const decrement =useCallback(
        ()=>{
            Setcount(count-1)
        },[count]
    )
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>Setcount(count+1)}>+</button>
        <button onClick={decrement}>-</button>
    </div>
  )
}

export default Usecallback