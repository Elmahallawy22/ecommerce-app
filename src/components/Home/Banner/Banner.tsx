import React from 'react';
import "./Banner.scss";
import Image from 'next/image';
import Hero from "../assets/Hero.png";
import Adidas from "../assets/Adidas.png";
import Defacto from "../assets/Defacto.png";
import Guess from "../assets/Guess.png";
import Lacoste from "../assets/lacoste.png";
import Mango from "../assets/Mango.png";
import Zara from "../assets/Zara.png";
import CalvinKlein from "../assets/CalvinKlein.png";
import AmericanEagle from "../assets/AmericanEagle.png";
import HugoBoss from "../assets/HugoBoss.png";
import MassimoDutti from "../assets/MassimoDutti.png";
import Nike from "../assets/Nike.png";
import Puma from "../assets/Puma.png";
import RalphLauren from "../assets/RalphLauren.png";
import Reebok from "../assets/Reebok.png";
import UnderArmour from "../assets/UnderArmour.png";

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
          <Image src={Zara} alt='Zara' loading="lazy" />
          <Image src={CalvinKlein} alt='CalvinKlein' loading="lazy" />
          <Image src={Nike} alt='Nike' loading="lazy" />
          <Image src={Puma} alt='Puma' loading="lazy" />
          <Image src={HugoBoss} alt='HugoBoss' loading="lazy" />
          <Image src={AmericanEagle} alt='AmericanEagle' loading="lazy" />
          <Image src={MassimoDutti} alt='MassimoDutti' loading="lazy" />
          <Image src={RalphLauren} alt='RalphLauren' loading="lazy" />
          <Image src={Reebok} alt='Reebok' loading="lazy" />
          <Image src={UnderArmour} alt='UnderArmour' loading="lazy" />
        </div>
      </div>
    </div>
  )
}

export default Banner;