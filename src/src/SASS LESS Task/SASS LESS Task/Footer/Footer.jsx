import React from 'react';
import './Footer.less';

const Footer = () => {
  return (
    <footer className="footer">
        <form action="">
            <input type="text" placeholder='Enter Name'/>
            <br /><br />
            <input type="text" placeholder='Enter feedback'/>
            <br /><br />
            <input type="button" value="Submit" />
        </form> 

        <p className="footer-text">© 2024 My Website. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
