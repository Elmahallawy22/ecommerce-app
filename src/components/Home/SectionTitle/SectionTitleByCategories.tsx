'use client'
import React, { useContext, useEffect, useState } from 'react'
import "./SectionTitle.scss";
import { Link } from '../../../i18n/routing'
import Image from 'next/image';
import ArrowR from "../assets/ArrowR.png";
import ArrowL from "../assets/ArrowL.png";
import { useTranslations } from 'next-intl';
import Axios from 'axios';
import { ShopAcrossCategoriesContext } from '../ShopAcrossCategories/ShopAcrossCategories';

const SectionTitleByCategories = () => {
  const t = useTranslations("ShopAcrossCategories");
  const [lngValue, setLngValue] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<string>("beauty");
  const [categories, setCategories] = useState([]);
  const { categoryType, setCategoryType } = useContext(ShopAcrossCategoriesContext);

  const getCategories = async () => {
    try {
      const { data } = await Axios.get('https://dummyjson.com/products/category-list');
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  }

  const setTypeOfActiveCategory = (value: string): void => {
    setActiveCategory(value)
    setCategoryType(value);
  }

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    if (document.body.dir === "rtl")
      setLngValue("rtl");
    else
      setLngValue("ltr");
  }, []);

  return (
    <div className="section-title mb-7">
      <div className="flex justify-center px-[6px] mb-1 md:mb-2 lg:mb-3">
        <div className="container flex justify-between items-center gap-10">
          <h2>{t('title')}</h2>
          <ul className='hidden md:flex'>
            {categories.map((item) => (
              <li key={item}
                className={`${activeCategory == item && 'active'}`}
                onClick={() => setTypeOfActiveCategory(item)}
              >{item}</li>
            ))}
          </ul>
          <div>
            <Link href={`/${'path'}`} className='flex items-center text-sm md:text-base'>
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
      </div>
      <ul className='flex md:hidden px-1'>
        {categories.map((item) => (
          <li key={item}
            className={`${activeCategory == item && 'active'}`}
            onClick={() => setTypeOfActiveCategory(item)}
          >{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default SectionTitleByCategories;