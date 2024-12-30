'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import MenuIcon from './assets/menu.png';
import CloseIcon from './assets/close.png';
import UserIcon from "./assets/user.png"
import HeartIcon from "./assets/heart.png";
import CartIcon from "./assets/cart.png";
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

  const menuIconClicked = () => {
    setShowMenu(true);
    document.body.style.overflow = 'hidden';
  }

  const menuIconUnclicked = () => {
    setShowMenu(false);
    document.body.style.overflow = 'auto';
  }

  return (
    <div className='sidebar md:hidden'>
      <button onClick={menuIconClicked}>
        <Image
          src={MenuIcon}
          alt='menu-icon'
          loading="lazy"
        />
      </button>
      {showMenu &&
        <div className="sidebar-menu" >
          <div className="sidebar-list right-0">
            <button
              className={`close ${currentPath.slice(0, 3) === "/ar" ? 'right-8' : 'left-8'}`}
              onClick={menuIconUnclicked}
            >
              <Image
                src={CloseIcon}
                alt='close-icon'
                width={20}
                loading="lazy"
              />
            </button>
            <ul>
              <li>
                <Link href={'/login'} onClick={menuIconUnclicked}>
                  {login}
                  <Image src={UserIcon} alt='user-icon' loading="lazy" />
                </Link>
              </li>
              <li>
                <Link href={'/wishlist'} onClick={menuIconUnclicked}>
                  {wishlist}
                  <Image src={HeartIcon} alt='heart-icon' loading="lazy" />
                </Link>
              </li>
              <li>
                <Link href={'/cart'} onClick={menuIconUnclicked}>
                  {cart}
                  <Image src={CartIcon} alt='cart-icon' loading="lazy" />
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