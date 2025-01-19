"use client"
import React from 'react'
import "./FlashStyle.scss";
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import SidebarImg from "../assets/SidebarImg.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import SectionTitele from '../SectionTitele/SectionTitele';
import Product from '../assets/product.png';

const FlashStyle = () => {
  const t = useTranslations("FlashStyle")
  return (
    <div className='flash-style '>
      <SectionTitele title={t('title')} path="flash-style" />
      <div className="flex overflow-x-hidden">
        <Image src={SidebarImg} alt='sidebar-img' className='hidden lg:block w-1/4' />
        <div className="bg-[#f5f5f5] flex-grow w-1/2 px-6">
          <Swiper
            slidesPerView={1.5}
            spaceBetween={20}
            breakpoints={{
              480: { slidesPerView: 1.8 },
              540: { slidesPerView: 2 },
              640: { slidesPerView: 2.4 },
              768: { slidesPerView: 3 },
              850: { slidesPerView: 3.5 },
              1024: { slidesPerView: 3 },
              1200: { slidesPerView: 3.5 },
              1400: { slidesPerView: 4 },
              1600: { slidesPerView: 4.4 },
              1750: { slidesPerView: 5 },
            }}
            // loop={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper flex"
          >
            <SwiperSlide>
              <Image src={Product} alt='' width={250} height={30} />
              <Image src={Product} alt='' width={250} height={350} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={Product} alt='' width={250} height={30} />
              <Image src={Product} alt='' width={250} height={350} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={Product} alt='' width={250} height={30} />
              <Image src={Product} alt='' width={250} height={350} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={Product} alt='' width={250} height={30} />
              <Image src={Product} alt='' width={250} height={350} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={Product} alt='' width={250} height={30} />
              <Image src={Product} alt='' width={250} height={350} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={Product} alt='' width={250} height={30} />
              <Image src={Product} alt='' width={250} height={350} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default FlashStyle;