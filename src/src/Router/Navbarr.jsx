import React from 'react'
import { Link } from 'react-router-dom'
const Navbarr = () => {
  return (
    <div>
        <Link to={'/'} >Home</Link>
        <Link to={'/about'}>About</Link>
    </div>
  )
}

export default Navbarr