'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import MenuIcon from './assets/menu.png';
import CloseIcon from './assets/close.png';
import UserIcon from "./assets/user.svg";
import HeartIcon from "./assets/heart.png";
import CartIcon from "./assets/cart.svg";
import { Link } from '../../../i18n/routing';
import { usePathname } from 'next/navigation';

type SidebarParams = {
  login: string;
  wishlist: string;
  cart: string;
}

const Sidebar = ({ login, wishlist, cart }: SidebarParams) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const currentPath = usePathname();
  const convertShowMenu = () => {
    setShowMenu(true);
  }

  return (
    <div className='sidebar md:hidden'>
      <button onClick={convertShowMenu}>
        <Image
          src={MenuIcon}
          alt='menu-icon'
          width={32}
        />
      </button>
      {showMenu &&
        <div className="sidebar-menu" >
          <div className="sidebar-list right-0">
            <button
              className={`close ${currentPath.slice(0, 3) === "/ar" ? 'right-8' : 'left-8'}`}
              onClick={() => { setShowMenu(false) }}
            >
              <Image
                src={CloseIcon}
                alt='close-icon'
                width={20}
              />
            </button>
            <ul>
              <li>
                <Link href={'/login'} onClick={() => { setShowMenu(false) }}>
                  {login}
                  <Image src={UserIcon} alt='user-icon' />
                </Link>
              </li>
              <li>
                <Link href={'/wishlist'} onClick={() => { setShowMenu(false) }}>
                  {wishlist}
                  <Image src={HeartIcon} alt='heart-icon' />
                </Link>
              </li>
              <li>
                <Link href={'/cart'} onClick={() => { setShowMenu(false) }}>
                  {cart}
                  <Image src={CartIcon} alt='cart-icon' />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      }
    </div>
  )
}
export default Sidebar;