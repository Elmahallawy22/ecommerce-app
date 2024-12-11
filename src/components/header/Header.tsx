import React from 'react';
import "./Header.scss";
import NavbarLng from './navbarLng/NavbarLng';

const Header = () => {
  return (
    <header className='header'>
      <NavbarLng />
    </header>
  )
}

export default Header