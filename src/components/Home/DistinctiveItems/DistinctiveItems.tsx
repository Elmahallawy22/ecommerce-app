'use client';
import React, { useEffect, useState } from 'react';
import './DistinctiveItems.scss';
import SectionTitle from '../SectionTitle/SectionTitle';
import { useTranslations } from 'next-intl';
import Axios from 'axios';
import Card from '../../Card/Card';

const DistinctiveItems = () => {
  const t = useTranslations("DistinctiveItems");
  const [products, setProducts] = useState([]);

  const getDistinctiveProducts = async () => {
    try {
      const { data } = await Axios.get("https://dummyjson.com/products?limit=10");
      setProducts(data.products)
    }
    catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    getDistinctiveProducts()
  }, []);

  return (
    <div className='distinctive-items'>
      <SectionTitle title={t('title')} path="distinctive-items" />
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
  )
}

export default DistinctiveItems