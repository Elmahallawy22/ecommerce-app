import React from 'react';
import "./Header.scss";
import NavbarLng from './navbarLng/NavbarLng';
import { useTranslations } from "next-intl";
import Navbar from './navbar/Navbar';
import NavCategories from './navCategories/NavCategories';

const Header = () => {
  const t = useTranslations("Header");

  return (
    <header className='header'>
      <NavbarLng offer={t('offer')} />
        <Navbar
          search={t('search')}
          login={t('login')}
          wishlist={t('wishlist')}
          cart={t('cart')}
        />
      <NavCategories />
    </header>
  )
}

export default Header