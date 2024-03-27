import React, { useState } from 'react'
import "./W.scss"

const Weather = () => {

   const[search,Setsearch]=useState("")
   const[weather,Setweather]=useState({})

  const api={
     key:"8a366990127be89fffb7505288d0c4eb",
     base:"https://api.openweathermap.org/data/2.5/weather"
  }
  function handleclick(){

       fetch(`${api.base}?q=${search}&appid=${api.key}`)
       .then((res)=>res.json())
       .then((d)=>{Setweather(d)
        console.log(d);
      })
  }
  return (
    <div>
      <section><input type="text" onChange={(d)=>Setsearch(d.target.value)} />
      <button onClick={handleclick}>Click</button></section><br />
      {( typeof weather.main != 'undefined')?( 
      <div className='temp'>
      <p><b><u>City Name:</u></b> {weather.name}</p>
      <p><u><b>Temperature:</b></u> {weather.main.temp} <sup>o</sup></p>
      <p><u><b>Weather:</b></u> {weather.weather[0].main}</p>
      <p><u><b>Description:</b></u> {weather.weather[0].description}</p></div>):("not found")}
    </div>
  )
}

export default Weather