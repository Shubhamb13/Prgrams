import React, { useEffect, useState } from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import axios from 'axios'

const Edit = () => {
    const[value,setValue]=useState({name:"",email:""})
     const navigate = useNavigate()
     const {id}=useParams()
        
      useEffect(()=>{
        axios.get('http://localhost:3000/users/'+id)
        .then(res=>setValue(res.data))
      },[])

     function handlesubmit(e){
         e.preventDefault()
         axios.put('http://localhost:3000/users/'+id,value)
         .then(res=>console.log(res))
         navigate('/')
     }
  return (
    <div className='create'>    
        <form action="" onSubmit={handlesubmit}>
            <h1>Create Users</h1>
            <input type='text' value={value.name} onChange={(e)=>setValue({...value,[e.target.name]:e.target.value})} name='name' placeholder='Enter Your Name'></input>
            <br /><br />
            <input type='email' value={value.email} onChange={(e)=>setValue({...value,[e.target.name]:e.target.value})} name='email' placeholder='Enter Your Email'></input>
            <br/><br/>
            <button type='submit'>Create</button>
        </form>

    </div>
  )
}

export default Edit