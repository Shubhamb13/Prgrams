import React from 'react';
import './Navbar.scss';

const Navbr = () => {
  return (
    <div className='navdiv'>
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item"><i class="fa-solid fa-ring navbar-link"></i></li>
                <li className="navbar-item"><a href="#" className="navbar-link">Home</a></li>
                <li className="navbar-item"><a href="#" className="navbar-link">About</a></li>
                <li className="navbar-item"><a href="#" className="navbar-link">Services</a></li>
                <li className="navbar-item"><a href="#" className="navbar-link">Contact</a></li>
            </ul>
        </nav>
    </div>
  );
}

export default Navbr;
