'use client';
import React, { useEffect, useState } from 'react';
import "./SectionTitele.scss";
import { Link } from '../../../i18n/routing';
import Image from 'next/image';
import ArrowR from "../assets/ArrowR.png";
import ArrowL from "../assets/ArrowL.png";

type SectionTitelePrams = {
  title: string;
  path: string;
}
const SectionTitele = (props: SectionTitelePrams) => {
  const [lngValue, setLngValue] = useState<string>("");

  useEffect(() => {
    if (document.body.dir === "rtl")
      setLngValue("rtl");
    else
      setLngValue("ltr");
  }, []);

  return (
    <div className="section-title flex justify-center px-[6px] mb-1 md:mb-2 lg:mb-3">
      <div className="container flex justify-between items-center">
        <h2>{props.title}</h2>
        <Link href={`/${props.path}`} className='flex items-center text-sm md:text-base'>
          {lngValue === "rtl" ?
            <>
              شاهد المزيد
              <Image src={ArrowR} alt="arrow-right" />
            </>
            :
            <>
              Show More
              <Image src={ArrowL} alt="arrow-left" />
            </>
          }
        </Link>
      </div>
    </div>
  )
}

export default SectionTitele;