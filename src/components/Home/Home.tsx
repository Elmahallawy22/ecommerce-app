import React from 'react';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';
import Newly from './Newly/Newly';
import FlashStyle from './FlashStyle/FlashStyle';
import Brands from './Brands/Brands';
import DistinctiveItems from './DistinctiveItems/DistinctiveItems';
import ShopAcrossCategories from './ShopAcrossCategories/ShopAcrossCategories';

const Home = () => {
  return (
    <section className='home flex flex-col gap-5 md:gap-7 lg:gap-10 py-2 sm:py-4 md:py-5 lg:py-8'>
      <Banner />
      <Categories />
      <Newly />
      <FlashStyle />
      <Brands />
      <DistinctiveItems />
      <Brands /> 
      <ShopAcrossCategories />
    </section>
  )
}

export default Home;