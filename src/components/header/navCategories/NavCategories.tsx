import React from 'react';
import "./navCategories.scss";
import { Link } from "../../../i18n/routing";

const NavCategories = () => {
  return (
    <div className="nav-categories flex justify-center">
      <div className="container flex gap-3 md:gap-6 items-center">
        <p>
          <Link href={'/categories'}>كل قائمة الفئات</Link>
        </p>
        <ul className='gap-2 md:gap-4'>
          <li>
            <Link href={'/categories/women'}>النساء</Link>
          </li>
          <li>
            <Link href={'/categories/men'}>الرجال</Link>
          </li>
          <li>
            <Link href={'/categories/children'}>الاطفال والالعاب</Link>
          </li>
          <li>
            <Link href={'/categories/beauty'}>الجمال والعطور</Link>
          </li>
          <li>
            <Link href={'/categories/sports'}>رياضة</Link>
          </li>
          <li>
            <Link href={'/categories/home'}>المنزل</Link>
          </li>
          <li>
            <Link href={'/categories/electonics'}>الالكترونيات</Link>
          </li>
          <li>
            <Link href={'/categories/shoes'}>احذية</Link>
          </li>
          <li>
            <Link href={'/categories/bags'}>شنط</Link>
          </li>
          <li>
            <Link href={'/categories/brands'}>ماركات</Link>
          </li>
          <li>
            <Link href={'/categories/premium'}>بريميوم</Link>
          </li>
          <li>
            <Link href={'/categories/new-arrival'}>وصل حديثا</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default NavCategories