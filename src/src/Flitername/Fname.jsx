import React, { useEffect, useState } from 'react'

const Fname = () => {
    const[data,Setdata]=useState([])
    const[search,Setsearch]=useState("")

    useEffect(()=>{
        fetchdata()
    },[])

    function fetchdata()
    {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>res.json())
        .then((d)=>{
            Setdata(d)
            console.log(d);
        })
    }
  return (
    <div>
       <input type="text"  onChange={(e)=>Setsearch(e.target.value)}/>
        {
            data.filter((item)=>item.name.toLowerCase().includes(search)).map((item)=>{
                return(
              <div key={item}>
                <h5>{item.name}</h5>
                <h5></h5>
              </div>
                
                )
            })
        }
        
    </div>
  )
}

export default Fname