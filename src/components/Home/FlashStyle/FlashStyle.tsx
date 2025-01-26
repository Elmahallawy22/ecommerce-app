"use client";
import React, { useEffect, useState } from 'react';
import "./FlashStyle.scss";
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import SidebarImg from "../assets/SidebarImg.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import SectionTitele from '../SectionTitele/SectionTitele';
import Card from '../../Card/Card';
import Product from '../../Card/assets/product.png';
import Axios from 'axios';

const FlashStyle = () => {
  const t = useTranslations("FlashStyle");
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const { data } = await Axios.get("https://dummyjson.com/products");
      setProducts(data.products)
    }
    catch (err) {
      console.log(err.message);
    }
  }
  const getHalfProducts = products.length / 2;

  useEffect(() => {
    getAllProducts();
  }, [])
  return (
    <div className='flash-style '>
      <SectionTitele title={t('title')} path="flash-style" />
      <div className="flex overflow-x-hidden">
        <Image src={SidebarImg} alt='sidebar-img' className='hidden lg:block w-1/4' />
        <div className="bg-[#f5f5f5] flex-grow w-1/2 px-2 md:px-4 xl:px-6">
          <Swiper
            slidesPerView={1.35}
            spaceBetween={20}
            breakpoints={{
              380: { slidesPerView: 1.6 },
              400: { slidesPerView: 1.7 },
              480: { slidesPerView: 2 },
              540: { slidesPerView: 2.2 },
              640: { slidesPerView: 2.6 },
              768: { slidesPerView: 3.2 },
              850: { slidesPerView: 3.5 },
              1024: { slidesPerView: 3.1 },
              1100: { slidesPerView: 3.3 },
              1200: { slidesPerView: 3.6 },
              1400: { slidesPerView: 4 },
              1500: { slidesPerView: 4.3 },
              1600: { slidesPerView: 4.8 },
              1750: { slidesPerView: 5.5 },
            }}
            loop={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper flex"
          >
            {Array.from({ length: products.length / 2 }, (_, index) => index + 1).map((it, index) => {
              return (
                <SwiperSlide key={index + 100}>
                  {products.map((item) => {
                    if (item.id === index + 1) {
                      return (
                        <div key={item.id}>
                          <Card
                            id={item.id}
                            image={item.thumbnail}
                            name={item.title}
                            description={item.description}
                            price={item.price}
                            rate={item.rating}
                            quntity={item.stock}
                          />
                        </div>
                      )
                    }
                  })}
                  {products.map((item) => {
                    if (item.id === index + ((products.length ) / 2)) {
                      return (
                        <div key={item.id}>
                          <Card
                            id={item.id}
                            image={item.thumbnail}
                            name={item.title}
                            description={item.description}
                            price={item.price}
                            rate={item.rating}
                            quntity={item.stock}
                          />
                        </div>
                      )
                    }
                  })}
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default FlashStyle;