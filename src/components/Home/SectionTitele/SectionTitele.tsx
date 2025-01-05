'use client';
import React, { useEffect, useState } from 'react';
import "./SectionTitele.scss";
import { Link } from '../../../i18n/routing';
import Image from 'next/image';
import ArrowR from "../assets/ArrowR.png";
import ArrowL from "../assets/ArrowL.png";

const SectionTitele = () => {
  const [lngValue, setLngValue] = useState<string>("");

  useEffect(() => {
    if (document.body.dir === "rtl")
      setLngValue("rtl");
    else
      setLngValue("ltr");
  }, []);

  return (
    <div className="section-title flex justify-center mb-1 md:mb-2 lg:mb-3">
      <div className="container flex justify-between items-center">
        <h2>وصل حدثا</h2>
        <Link href={'/'} className='flex items-center gap-[2px] text-sm md:text-base'>
          شاهد المزيد
          {lngValue === "rtl"
            ? <Image src={ArrowR} alt="arrow-right" />
            : <Image src={ArrowL} alt="arrow-left" />
          }
        </Link>
      </div>
    </div>
  )
}

export default SectionTitele;