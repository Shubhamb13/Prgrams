import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import {auth} from './Config'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import './Sp.scss'

const Signup = () => {
    const[email,Setemail]=useState("")
    const[password,Setpassword]=useState("")

    const navigate=useNavigate()

    async function handlesubmit(e){
        e.preventDefault()
        try{
            const userCredential = await createUserWithEmailAndPassword(auth,email,password)
            const user =userCredential.user
            console.log(user);
            navigate('/login')
        }
        catch(error) 
        {
           console.log(error);
        }
    }
  return (
    <div className='Signup'>
        <form action="" onSubmit={handlesubmit}>
        <h1>Signup Here</h1>
        <input type="email" value={email} placeholder='Enter Your Email' onChange={(e)=>Setemail(e.target.value)} /> <br />
        <input type="password" value={password} placeholder='Enter Your Password' onChange={(e)=>Setpassword(e.target.value)}/> <br />
        <button type='submit'>Signup</button><br />
        <h4>Already have account <Link to={'/login'} >Login</Link> </h4>
        </form>
    </div>
  )
}

export default Signup