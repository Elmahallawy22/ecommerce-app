'use client';
import React, { useEffect, useState } from 'react';
import { Link } from "../../../i18n/routing"
import { usePathname, useRouter } from 'next/navigation';
import Image from "next/image"; 
import UserIcon from "./assets/user.svg";
import HeartIcon from "./assets/heart.png";
import CartIcon from "./assets/cart.svg";

const languages = [
  {
    code: 'en',
    name: 'English',
    dir: 'ltr',
    country_code: 'us',
  },
  {
    code: 'ar',
    name: 'العربية',
    dir: 'rtl',
    country_code: 'eg',
  },
];

type NavListParams = {
  login: string;
  wishlist: string;
  cart: string;
}

const NavList = ({ login, wishlist, cart }: NavListParams) => {
  const router = useRouter();
  const currentPath = usePathname();
  const [showList, setShowList] = useState<boolean>(false);
  const [lngValue, setLngValue] = useState<string>("");
  const [countryValue, setCountryValue] = useState<string>("");

  const convertLanguage = (value: string): void => {
    setShowList(false)
    router.push("/" + value + currentPath.slice(3));
  }

  useEffect(() => {
    if (currentPath.slice(0, 3) === "/ar") {
      document.body.dir = "rtl";
      setLngValue("ar")
      setCountryValue('eg');
    }
    else {
      document.body.dir = "ltr";
      setLngValue("en")
      setCountryValue('us');
    }
  }, []);


  return (
    <ul className='hidden md:flex nav-list'>
      <li>
        <Link href={'/login'}>
          {login}
          <Image src={UserIcon} alt='user-icon' />
        </Link>
      </li>
      <li>
        <Link href={'/wishlist'}>
          {wishlist}
          <Image src={HeartIcon} alt='heart-icon' />
        </Link>
      </li>
      <li>
        <Link href={'/cart'}>
          {cart}
          <Image src={CartIcon} alt='cart-icon' />
        </Link>
      </li>
      <li className='country'>
        <div className="flex gap-1"
          onClick={() => { setShowList(!showList) }}>
          <span className={`flag-icon flag-icon-${countryValue} mx-2`}></span>
          <ArrowIcon />
        </div>
        {showList &&
          <ul className={`${lngValue === 'ar' ? 'left-[-2px]' : 'right-[-2px]'}`}>
            {languages.map(({ code, name, country_code }) => (
              <li key={country_code} onClick={() => convertLanguage(code)}>
                <span className={`flag-icon flag-icon-${country_code}`}></span>
                {name}
              </li>
            ))}
          </ul>
        }
      </li>
    </ul>
  )
}

export default NavList;

const ArrowIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.92 8.17999H11.69H6.07999C5.11999 8.17999 4.63999 9.33999 5.31999 10.02L10.5 15.2C11.33 16.03 12.68 16.03 13.51 15.2L15.48 13.23L18.69 10.02C19.36 9.33999 18.88 8.17999 17.92 8.17999Z" fill="black" />
  </svg>
);