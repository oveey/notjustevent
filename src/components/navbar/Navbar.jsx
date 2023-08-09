import React, { useState } from 'react';
// import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css'
import logo from '../../assets/Logo.png';



const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='Navbar'>
      <div className='Navbar__links'>
        <div className='Navbar__logo'>
          <img src={logo} alt="logo"/>
        </div>
        <div className='Navbar__links-container'>
          <p><a className='active' href="#home">Home</a></p>
          <p><a href="#faq">How it works</a></p>
          <p><a href="#service">Service</a></p>
          <p><a href="#about">About</a></p>
          <p><a href="#brand">Brands</a></p>
        </div>

      </div>
      <div className='Navbar__sign'>
        <p>Log in</p>
        <button type="button">Sign up</button>

      </div>

      <div className="navbar-menu">
        {/* {toggleMenu
          ? <RiCloseLine color="#000" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#000" size={27} onClick={() => setToggleMenu(true)} />
        } */}
        {toggleMenu && (
          <div className="navbar-menu_container">
            <div className="navbar-menu_container-links">
              <p><a href="#home">Home</a></p>
              <p><a href="#service">How it works</a></p>
              <p><a href="#about">Service</a></p>
              <p><a href="#brand">About</a></p>
              <p><a href="#brand">Brand</a></p>

            </div>
            <div className="navbar-menu_container-links-sign">
              <p>Log in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>

   

  )
}

export default Navbar
