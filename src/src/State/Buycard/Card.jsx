 import React from 'react'
import { useState } from 'react'
import './Card.scss'

export const Card = () => {
    const[count,setCount]=useState(0)
    const[Price,setPrice]=useState(50)
    const[msg,setMsg]=useState("Submit")
    const[discount,setDiscount]=useState(0)
    const[total,setTotal]=useState(0)

  return (
   
    <div>
        <div className='md'>
        
        
        <br />
        <div className='ncls'>
        <button id='btn1' onClick={()=>setCount(count+1)} className='btn1'>+</button>
        <h1>:{count}</h1>
        <button id='btn2' onClick={()=>setCount(count-1)} className='btn1' >-</button>
        
        </div>
        <div className='vcls'><br />
        <h2>PRICE:{Price}</h2><br />
        <h2>Discount PRice:{total}</h2><br />
        <button onClick={()=>setDiscount(count*2)}>Discount:2%</button>
        <button onClick={()=>setTotal(Price-discount)}>Total</button>
        <button id='btn3' onClick={()=>setPrice(count*50)}  >Price</button><br />
        <br /><button id='btn4' onClick={()=>setMsg("Thank you")} >{msg}</button>
        </div>

        </div>
        
    
    </div>
  )
}
