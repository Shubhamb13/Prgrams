import React, { useEffect, useState } from 'react'
import "./Pixabat.scss"

const Pixabay = () => {
    const[data,Setdata]=useState([])
    const[search,Setsearch]=useState("")
    
    useEffect(()=>{
        fetch(`https://pixabay.com/api/?key=39126939-3fd6eb8cb2c21bc174ce69fa4&q=${search}&image_type=photo&pretty=true`)
        .then((res)=>res.json())
        .then((d)=>Setdata(d.hits))
    })
  return (
    
   <div className='bg-gray-100'>
    <div className='head'>
    <nav className='navbar '>
      <ul className='list m-3'>
        <ul className='ul'><a href="" className='font-bold text-4xl font-mono'>PIXABAY</a></ul>
        <div className=' flex1 flex justify-items-end  items-center gap-5  '>
        {/* <ul className='in  '><input className='block' type="text" placeholder='Search'  onChange={(e)=>Setsearch(e.target.value)}/></ul> */}
        <ul className='ul'><a href="">Explore</a></ul>
        <ul className='ul'><a href=""><i class="fa-solid fa-bell"></i></a></ul>
        <ul className='ul '><button className='bg-green-500 p-2  w-35 rounded-3xl'><i class="fa-solid fa-upload"></i> Upload<a href=""></a></button></ul>
        </div>
      </ul>
    </nav><br /><br /><br />
      <center>    <h1 className='text-white  font-bold text-4xl '>Stunning royalty-free images & royalty-free stock</h1>
      <h5 className='text-white p-5 '>Over 4.4 million+ high quality stock images, videos and music shared by our talented community.</h5>
    <ul className='in  '><input className='w-4/6 p-4 rounded-3xl outline-transparent ' type="text" placeholder='Search'  onChange={(e)=>Setsearch(e.target.value)}/></ul></center>
    </div><br />

    <div className=' nav2 w-50 h-10 '>
      <ul className='flex justify-center justify-items-center gap-10 ' >
        <a className='hover:bg-green-600  ' href=""><li><i class="fa-solid fa-house "></i> Home</li></a>
        <a className='hover:bg-green-600 ' href=""><li><i class="fa-solid fa-image"></i> Photos</li></a>
        <a className='hover:bg-green-600 ' href=""><li><i class="fa-solid fa-paintbrush"></i> Illustration</li></a>
        <a className='hover:bg-green-600 ' href=""><li><i class="fa-solid fa-pen-nib fa-rotate-180"></i> Vectors</li></a>
        <a className='hover:bg-green-600 ' href=""><li><i class="fa-solid fa-video"></i> Videos</li></a>
        <a className='hover:bg-green-600 ' href=""> <li><i class="fa-solid fa-music"></i> Music</li></a>
        <a className='hover:bg-green-600 ' href=""><li><i class="fa-solid fa-tower-broadcast"></i> Sound Effects</li></a>
        <a className='hover:bg-green-600 ' href=""><li><i class="fa-solid fa-fire"></i> GIFs</li></a>
      </ul>
    </div><br />
    <div className='image-grid'>
      {
        
        data.map((item)=>{
            return(
             <span key={item.id} className='inner'>
                <img src={item.webformatURL} height={item.webformatHeight} width={item.webformatWidth} alt="" />
             </span>
            )
        })
       
      }
       </div>
   </div>
  )
}

export default Pixabay