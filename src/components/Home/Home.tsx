import React from 'react';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';
import Newly from './Newly/Newly';
import FlashStyle from './FlashStyle/FlashStyle';

const Home = () => {
  return (
    <section className='home flex flex-col gap-[10px] md:gap-5 lg:gap-10 py-2 sm:py-4 md:py-5 lg:py-8'>
      {/* <Banner />
      <Categories />
      <Newly /> */}
      <FlashStyle />
    </section>
  )
}

export default Home;