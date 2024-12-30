import React from 'react';
import "./Banner.scss";
import Image from 'next/image';
import Hero from "./assets/Hero.png";
import Adidas from "./assets/adidas.png";
import Defacto from "./assets/defacto.png";
import Guess from "./assets/guess.png";
import Lacoste from "./assets/lacoste.png";
import Mango from "./assets/mango.png";

const Banner = () => {
  return (
    <div className='banner flex justify-center'>
      <div className="container">
        <Image src={Hero} alt='hero' loading="lazy" className='min-h-40 w-full' />
        <div className="logos">
          <Image src={Adidas} alt='Adidas' loading="lazy" />
          <Image src={Defacto} alt='Defacto' loading="lazy" />
          <Image src={Guess} alt='Guess' loading="lazy" />
          <Image src={Lacoste} alt='Lacoste' loading="lazy" />
          <Image src={Mango} alt='Mango' loading="lazy" />
          <Image src={Adidas} alt='Adidas' loading="lazy" />
          <Image src={Defacto} alt='Defacto' loading="lazy" />
          <Image src={Guess} alt='Guess' loading="lazy" />
          <Image src={Lacoste} alt='Lacoste' loading="lazy" />
          <Image src={Mango} alt='Mango' loading="lazy" />
          <Image src={Adidas} alt='Adidas' loading="lazy" />
          <Image src={Defacto} alt='Defacto' loading="lazy" />
          <Image src={Guess} alt='Guess' loading="lazy" />
          <Image src={Lacoste} alt='Lacoste' loading="lazy" />
          <Image src={Mango} alt='Mango' loading="lazy" />
        </div>
      </div>
    </div>
  )
}

export default Banner