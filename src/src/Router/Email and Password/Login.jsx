import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {auth} from './Config'
import {signInWithEmailAndPassword} from 'firebase/auth'
import "./Sp.scss"
const Login = () => {
     
    const[email,Setemail]=useState("")
    const[password,Setpassword]=useState("")

    const navigate=useNavigate()

    async function handlesubmit(e){
        e.preventDefault()
        try{
            const userCredential = await signInWithEmailAndPassword(auth,email,password)
            const user =userCredential.user
            
            console.log(user);
            navigate('./home')
        }
        catch(error) 
        {
           console.log(error);
           alert(error)
        }
    }

  return (
        <div className='Signup' onSubmit={handlesubmit}>
            <form action="">
            <h1>Login Here</h1>
        <input type="email" value={email} placeholder='Enter Your Email' onChange={(e)=>Setemail(e.target.value)} /><br />
        <input type="password" value={password} placeholder='Enter Your Password' onChange={(e)=>Setpassword(e.target.value)} /> <br />
        <button>submit</button>
        <h4>Already have account <Link to={'/Login'} >Login</Link> </h4>
        </form>
    </div>
  )
}

export default Login