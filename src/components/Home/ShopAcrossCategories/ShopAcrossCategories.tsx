'use client';
import React, { useEffect, useState } from 'react';
import './ShopAcrossCategories.scss';
import SectionTitleByCategories from '../SectionTitle/SectionTitleByCategories';
import Axios from 'axios';
import Card from '../../Card/Card';

type ShopAcrossCategoriesContextType = {
  categoryType: string;
  setCategoryType: React.Dispatch<React.SetStateAction<string>>;
};
export const ShopAcrossCategoriesContext = React.createContext<ShopAcrossCategoriesContextType | null>(null);

const ShopAcrossCategories = () => {
  const [categoryType, setCategoryType] = React.useState<string>("beauty");
  const [products, setProducts] = useState([]);

  const getProductsOfCategories = async (): Promise<void> => {
    try {
      const { data } = await Axios.get(`https://dummyjson.com/products/category/${categoryType}`);
      setProducts(data.products)
    }
    catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    getProductsOfCategories();
  }, [categoryType]);

  return (
    <div className='shop-across-categories'>
      <ShopAcrossCategoriesContext.Provider value={{ categoryType, setCategoryType }}>
        <SectionTitleByCategories />
      </ShopAcrossCategoriesContext.Provider>
      <div className="flex justify-center">
        <div className="container flex justify-center gap-3 md:gap-5 flex-wrap">
          {products.map((item) => (
            <div key={item.id}>
              <Card
                image={item.thumbnail}
                name={item.title}
                description={item.description}
                price={item.price}
                rate={item.rating}
                quntity={item.stock}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopAcrossCategories;