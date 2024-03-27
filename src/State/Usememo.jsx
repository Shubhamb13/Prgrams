import React, { useState,useMemo } from 'react'

const Usememo = () => {
    const[count,Setcount]=useState(0)

    const power=()=>{
        return count**2
    }
    const memo=useMemo(()=>power(count))
  return (
    <div>
        <h1>{count}</h1>
        <h1>{memo}</h1>
        <button onClick={()=>Setcount(count+1)}>Incre</button>
    </div>
  )
}

export default Usememo