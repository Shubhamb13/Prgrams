import React, { useState } from 'react'

const Confom = () => {
    const[value,Setvalue]=useState({name:"",email:"",password:""})

    function handleSubmit(e)
    {
       e.preventDefault()
       console.log(value);
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" name='name' onChange={(e)=>Setvalue({...value,[e.target.name]:e.target.value})} ></input>
            <br /><br />
            <input type="email" name='email' onChange={(e)=>Setvalue({...value,[e.target.name]:e.target.value})} />
            <br /><br />
            <input type="Password" name='Password' onChange={(e)=>Setvalue({...value,[e.target.name]:e.target.value})} />
            <br />
            <button type='submit'>Submit</button>

        </form>
    </div>
  )
}

export default Confom