import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
      <p className='main-logo'>Lorran's Dev Blog</p>
      <div className='me-info'>
        <p>By,</p>
        <img src="/images/me.jpg" alt="me" className='me-image'/>
      </div>
    </div>
  )
}

export default Navbar
