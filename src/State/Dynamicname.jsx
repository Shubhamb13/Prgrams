import React, { useState } from 'react'

export const Dynamicname = () => {
    const[name,setname]=useState(" ")
  return (
    <div>
        {/* <button onClick={}></button> */}
        <input type="text" onChange={(e)=>setname(e.target.value)}/>
        <h1>My name is {name}</h1>
    </div>
  )
}
