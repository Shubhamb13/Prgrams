import React, { useLayoutEffect, useState } from 'react'

const Uselayouteffect = () => {
    const[count,Setcount]=useState(0)
    useLayoutEffect(()=>{
        document.title=`${count}`
    },[])
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>Setcount(count+1)}>Click</button>
    </div>
  )
}

export default Uselayouteffect