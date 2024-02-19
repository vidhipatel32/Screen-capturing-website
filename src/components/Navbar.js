import './navbar.css'
import { Link, NavLink } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll';
import Logo from '../images/logo.png'
import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { MdOutlineClose } from 'react-icons/md'
// import {MdScreenshotMonitor} from 'react-icons/md'

export const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);
  return (
    <nav>
      <div className='container nav_container'>
        <Link to="/" className='logo' onClick={() => setIsNavShowing(false)} >
          <img src={Logo} alt="Nav Logo" />
        </Link>
        <ul className={`nav_link ${isNavShowing ? 'show_nav ' : 'hide_nav'}`}>
          <li><NavLink to="/" className={({isActive})=>isActive ? 'active-nav':''} onClick={() => setIsNavShowing(prev => !prev)}>Home</NavLink></li>
          <li><ScrollLink to="about" className={({isActive})=>isActive ? 'active-nav':''}  onClick={() => setIsNavShowing(prev => !prev)}>About</ScrollLink></li>
          <li><ScrollLink to="faqs" className={({isActive})=>isActive ? 'active-nav':''}  onClick={() => setIsNavShowing(prev => !prev)}>FAQs</ScrollLink></li>
          <li><ScrollLink to="contact" className={({isActive})=>isActive ? 'active-nav':''}  onClick={() => setIsNavShowing(prev => !prev)}>Contact</ScrollLink></li>
        </ul>
        <button className='nav__toggle-btn' onClick={() => setIsNavShowing(prev => !prev)}>

          {
            isNavShowing ? <MdOutlineClose /> : <FaBars />
          }
        </button>
      </div>
    </nav>
  )
}
