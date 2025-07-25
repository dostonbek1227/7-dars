import React from 'react'

export default function Navbar() {
  return (
    <div className='container navbar-content'>
      <img src="img/logo.png" alt="" />
      <ul>
        <li><a href="#!" className='link'>Home</a></li>
        <li><a href="#!" className='link'>About Us</a></li>
        <li><a href="#!" className='link'>Features</a></li>
        <li><a href="#!" className='link'>Solution</a></li>
      </ul>
    </div>
  )
}
