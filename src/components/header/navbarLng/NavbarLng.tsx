"use client";
import "./NavbarLng.scss";
import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from "next/navigation";

const NavbarLng = () => {
  const router = useRouter();
  const currentPath = usePathname();
  const [lngValue, setLngValue] = useState<string>("");

  const convertLanguage = (value: string): void =>
    router.push("/" + value + currentPath.slice(3));
    
  useEffect(() => {
    if (currentPath.slice(0, 3) === "/ar") {
      document.body.dir = "rtl";
      setLngValue("ar")
    }
    else {
      document.body.dir = "ltr";
      setLngValue("en")
    }
  }, []);

  return (
    <div className="navbar-lng flex justify-center h-7">
      <div className="container flex justify-between items-center">
        <ul className="flex items-center gap-2">
          <li className={`${lngValue === "en" && "active"}`}>
            <button onClick={() => { convertLanguage("en") }}
            >English</button>
          </li>
          <li className="line"></li>
          <li className={`${lngValue === "ar" && "active"}`}>
            <button onClick={() => { convertLanguage("ar") }}
            >العربية</button>
          </li>
        </ul>
        <h6>خصم 20% علي اول طلبية</h6>
      </div>
    </div>
  )
}

export default NavbarLng