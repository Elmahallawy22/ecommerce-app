import React from 'react'
import Banner from './Banner/Banner'
import Categories from './Categories/Categories'

const Home = () => {
  return (
    <div className='home flex flex-col gap-[10px] md:gap-5 py-2 sm:py-4 md:py-5 lg:py-8'>
      <Banner />
      <Categories />
    </div>
  )
}

export default Home