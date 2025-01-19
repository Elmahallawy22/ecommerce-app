import React from 'react';
import "./Newly.scss";
import SectionTitele from '../SectionTitele/SectionTitele';
import NewBrands from "../assets/BrandsNew.png";
import NewWomen from "../assets/WomenNew.png";
import NewMobiles from "../assets/MobilesNew.png";
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const Newly = () => {
  const t = useTranslations("NewArrival")
  return (
    <div className='newly'>
      <SectionTitele title={t('title')} path='new-arrival' />
      <div className="images flex">
        <Image src={NewBrands} alt='new-brands' className='quarter' />
        <Image src={NewWomen} alt='new-women' className='half' />
        <Image src={NewMobiles} alt='new-mobiles' className='quarter' />
      </div>
    </div>
  )
}

export default Newly;