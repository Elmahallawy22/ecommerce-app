"use client"
import React from 'react';
import { usePathname } from 'next/navigation';
import { Link } from '../../../i18n/routing';
import Image, { StaticImageData } from 'next/image';
import HomeIcon from './assets/MobHome.png';
import CartIcon from './assets/MobCart.png';
import HeartIcon from './assets/MobHeart.png';
import UserIcon from './assets/MobUser.png';
import ActiveHomeIcon from './assets/activeHome.png';
import ActiveCartIcon from './assets/ActiveCart.png';
import ActiveHeartIcon from './assets/ActiveHeart.png';
import ActiveUserIcon from './assets/ActiveUser.png';

type TabbarLinkParams = {
  link: string;
  Image1: StaticImageData;
  Image2: StaticImageData;
  title: string;
}

const TabbarLink = ({ link, Image1, Image2, title }: TabbarLinkParams) => {
  const currentPath = usePathname();
  const comparedCurrentPath = currentPath === `/en${link}` || currentPath === `/ar${link}`;

  return (
    <Link href={`/${link}`}>
      {comparedCurrentPath ?
        <Image src={Image2} alt='active-home-icon' loading="lazy" />
        :
        <Image src={Image1} alt='home-icon' loading="lazy" />
      }
      <span className={`${comparedCurrentPath && "active"}`}>{title}</span>
    </Link>
  )
}

type TabbarParams = Record<'home' | 'cart' | 'wishlist' | 'login', string>;

const Tabbar = ({ home, cart, wishlist, login }: TabbarParams) => {
  return (
    <div className='tab-bar'>
      <TabbarLink link='' Image1={HomeIcon} Image2={ActiveHomeIcon} title={home} />
      <TabbarLink link='/cart' Image1={CartIcon} Image2={ActiveCartIcon} title={cart} />
      <TabbarLink link='/wishlist' Image1={HeartIcon} Image2={ActiveHeartIcon} title={wishlist} />
      <TabbarLink link='/login' Image1={UserIcon} Image2={ActiveUserIcon} title={login} />
    </div>
  )
}

export default Tabbar;