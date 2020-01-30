import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import { FaAlignJustify } from 'react-icons/fa';

export const navLinks = [
  <Link to='/'>Home</Link>,

  <Link to='/about'>About</Link>,
  <Link to='/destinations'>Destinations</Link>
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/'>
            <img src={logo} alt='ME Travel logo' />
          </Link>
          <button type='button' className='nav-btn' onClick={toggler}>
            <FaAlignJustify className='nav-icon' />
          </button>
        </div>
        <ul
          onClick={() => setIsOpen(false)}
          className={isOpen ? 'nav-links show-nav' : 'nav-links'}
        >
          {navLinks.map((link, i) => (
            <li key={i}>{link}</li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
