import React from 'react';
import "./Categories.scss";
import { useTranslations } from 'next-intl';
import { Link } from '../../../i18n/routing';
import Image, { StaticImageData } from 'next/image';
import Men from "../assets/Men.png";
import Women from "../assets/Women.png";
import Children from "../assets/Children.png";
import Beauty from "../assets/Beauty.png";
import Electonics from "../assets/electronics.png";
import Mobiles from "../assets/Mobiles.png";
import Brands from "../assets/Brands.png";
import Offers from "../assets/Offer.png";

const Categories = () => {
  const t = useTranslations("Categories");

  const categoriesList: { id: number, item: string, image: StaticImageData }[] =
    [
      { id: 1, item: "men", image: Men },
      { id: 2, item: "women", image: Women },
      { id: 3, item: "children", image: Children },
      { id: 4, item: "beauty", image: Beauty },
      { id: 5, item: "electronics", image: Electonics },
      { id: 6, item: "mobiles", image: Mobiles },
      { id: 7, item: "brands", image: Brands },
      { id: 8, item: "offers", image: Offers }
    ];

  return (
    <div className='categories flex justify-center'>
      <div className="container">
        <ul className='w-full px-1'>
          {categoriesList.map((category) => {
            return (
              <li key={category.id}>
                <Link href={`/categories/${category.item}`}>
                  <Image src={category.image} alt={`${category.image}`} loading="lazy" />
                  <span> {t(category.item)} </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Categories;