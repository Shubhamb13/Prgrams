import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
  Homee

       <br />
        <Link to={'/about'}>about</Link><br />
        <Link to={'/contact'}>contact</Link>
    </div>
  )
}

export default Home