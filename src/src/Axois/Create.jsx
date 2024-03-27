import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Create = () => {
    const[value,setValue]=useState({name:"",email:""})
     const navigate = useNavigate()
     function handlesubmit(e){
         e.preventDefault()
         axios.post('http://localhost:3000/users',value)
         .then(res=>console.log(res))
         navigate('/')
     }
  return (
    <div className='create'>    
        <form action="" onSubmit={handlesubmit}>
            <h1>Create Users</h1>
            <input type='text' value={value.name} onChange={(e)=>setValue({...value,[e.target.name]:e.target.value})} name='name' placeholder='Enter Your Name'></input>
            <br /><br />
            <input type='email' value={value.email} onChange={(e)=>setValue({...value,[e.target.email]:e.target.value})} name='email' placeholder='Enter Your Email'></input>
            <br/><br/>
            <button type='submit'>Create</button>
        </form>

    </div>
  )
}

export default Create