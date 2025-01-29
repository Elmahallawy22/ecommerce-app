import React from 'react';
import "./Brands.scss";
import Image from 'next/image';
import AdidasBrand from "../assets/AdidasBrand.png";
import HMBrand from "../assets/HMBrand.png";
import ZaraBrand from "../assets/ZaraBrand.png";

const Brands = () => {
  return (
    <div className='brands'>
      <div className="images flex">
        <Image src={AdidasBrand} alt='adidas-brand' className='quarter' />
        <Image src={HMBrand} alt='hm-brand' className='half' />
        <Image src={ZaraBrand} alt='zara-brand' className='quarter' />
      </div>
    </div>
  )
}

export default Brands