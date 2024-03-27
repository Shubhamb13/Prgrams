import React, { useState } from 'react'
import User from './List'
import './Listt.scss'

export const Listt = () => {
    const[data,Setdata]=useState(User)
    const[msg,setMsg]=useState("Submit")
  return (
    <div>
         <div className='main'> <br />
           <center><b><p id='m'>{data.length} Birthdays Today</p></b></center> 
        {
            data.map((x)=>{
                return(
                    <div className='card' key={x.id}>
                    <img src={x.Image} height={'70px'} width={'70px'}  className='images'></img>
                    <div className='con'>
                    <p><b>{x.name}</b></p>
                    <p>{x.age}</p>
                    </div>
                    
                    </div>
                    
                )
            })
        
        }
        <button onClick={()=>Setdata([])  } className='btn'>Clear</button>
        </div>
    </div>
  )
}
