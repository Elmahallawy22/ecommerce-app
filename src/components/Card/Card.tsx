'use client';
import React, { useState } from 'react'
import "./Card.scss";
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import StarIcon from "./assets/Star.png";
import HeartIcon from "./assets/heart.png";
import ActiveHeartIcon from "./assets/ActiveHeart.png";
import AddIcon from "./assets/add.png";
import ActiveAddIcon from "./assets/ActivePlus.png";
import { useTranslations } from 'next-intl';

type CardParams = {
  image: string; name: string; description: string;
  price: number; rate: number; quntity: number;
}

const Card = ({ image, name, description, price, rate, quntity }: CardParams) => {
  const currentPath = usePathname();
  const [loved, setLoved] = useState<boolean>(false);
  const [added, setAdded] = useState<boolean>(false);
  const t = useTranslations('Card');

  return (
    <div className="card">
      <Image
        src={image}
        width={232}
        height={292}
        alt={`${name}-image`}
        className="card-img"
        loading="lazy"
      />
      <div className="card-info py-2 px-3 space-y-1">
        <h4>{name}</h4>
        <p>{description}</p>
        <div className='price py-1'>{price} <span>{t('currency')}</span></div>
        <div className="rates flex gap-1">
          <div className="flex gap-[2px]">
            {Array.from({ length: Math.ceil(rate) }, (_, index) => index + 1).map((item, index) => (
              <Image src={StarIcon} alt='' key={index} />
            ))}
          </div>
          <span>( {quntity} )</span>
        </div>
      </div>
      {loved ?
        <div className={`heart ${currentPath.slice(0, 3) === "/ar" ? 'left-2' : 'right-2'}`}
          onClick={() => setLoved(false)}>
          <Image src={ActiveHeartIcon} alt='ActiveHeartIcon' width={20} height={20} />
        </div>
        :
        <div className={`heart ${currentPath.slice(0, 3) === "/ar" ? 'left-2' : 'right-2'}`}
          onClick={() => setLoved(true)}>
          <Image src={HeartIcon} alt='HeartIcon' />
        </div>
      }
      {added ?
        <div className={`add ${currentPath.slice(0, 3) === "/ar" ? 'left-2' : 'right-2'}`}
          onClick={() => setAdded(false)}>
          <Image src={ActiveAddIcon} alt='ActiveAddIcon' width={20} height={20} />
        </div>
        :
        <div className={`add ${currentPath.slice(0, 3) === "/ar" ? 'left-2' : 'right-2'}`}
          onClick={() => setAdded(true)}>
          <Image src={AddIcon} alt='AddIcon' width={16} height={16} />
        </div>
      }
    </div>
  )
}

export default Card;