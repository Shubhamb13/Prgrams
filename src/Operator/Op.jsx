import React, { useState } from 'react'

const Op = () => {
    const[open,Setopen]=useState(false)
  return (
    <div>
        <button onClick={()=>Setopen(true)}>Read More</button>
        {open &&(<div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium alias mollitia consequatur nam repellat magni provident dolor, voluptates autem omnis?</p>
            <button onClick={()=>Setopen(false)}>Close</button>
        </div>)}
    </div>
  )
}

export default Op