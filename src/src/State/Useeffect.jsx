import React, { useEffect, useState } from 'react'

export const Useeffect = () => {
    const[count,setCount]=useState(0)
    useEffect(()=>{
        document.title =`${count}`
        let a=document.getElementById("btn")
        a.addEventListener('click',()=>{
          
            document.body.style.background="yellow"
    
        })
    },)
    
  return (
    <div>
       <h1>{count}</h1>
       <button onClick={()=>setCount(count+1)}>+</button>
       <button onClick={()=>setCount(count-1)}>-</button>
       <button id="btn">Color</button>
    </div>
  )
}
