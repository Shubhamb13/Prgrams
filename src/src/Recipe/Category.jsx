import React, { useEffect, useState } from 'react'
import './Category.css'
import { Navigate, useNavigate } from 'react-router-dom'

const Category = () => {
    const[cat,Setcat]=useState([])
    const navigate=useNavigate()
    useEffect(()=>{
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then(res=>res.json())
        .then(d=>Setcat(d.categories))

    },[])
  return (
    <div className='Category'>
        <h1>Category</h1>
        <section className='sec'>
               
               {
                cat.map((item)=>{
                    return(
                        <div className="cards" key={item.idCategory}>
                         <img onClick={()=>navigate('/specificCategory',{state:{item}})} className='img2' src={item.strCategoryThumb} height={'250px'} width={'250px'} style={{borderRadius:'5px'}} alt="" />
                        
                        </div>
                    )
                })
               }
        </section>
    </div>
  )
}

export default Category