import React, { useEffect, useState } from 'react'

export const Index = () => {

    const[data,Setdata]=useState([])

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then((res)=>res.json())
        .then((d)=>Setdata(d))
    })
  return (
    <div>
        {
        data.map((x) =>{
         

            return(
                <p>{x.title}</p>
            )
        })

        }
    </div>
  )
}
