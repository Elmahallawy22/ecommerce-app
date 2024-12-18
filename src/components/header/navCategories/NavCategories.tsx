import React from 'react';
import "./navCategories.scss";
import { Link } from "../../../i18n/routing";
import { useTranslations } from 'next-intl';

const NavCategories = () => {
  const t = useTranslations("Header");

  const navCategoriesList: { id: number, item: string }[] =
    [
      { id: 1, item: "women" },
      { id: 2, item: "men" },
      { id: 3, item: "children" },
      { id: 4, item: "beauty" },
      { id: 5, item: "sports" },
      { id: 6, item: "home" },
      { id: 7, item: "electronics" },
      { id: 8, item: "shoes" },
      { id: 9, item: "bags" },
      { id: 10, item: "brands" },
      { id: 11, item: "premium" },
      { id: 12, item: "newly" }
    ];

  return (
    <div className="nav-categories flex justify-center">
      <div className="container flex gap-3 md:gap-6 items-center">
        <p>
          <Link href={'/categories'}>{t("all_categories")}</Link>
        </p>
        <ul className='gap-2 md:gap-4'>
          {navCategoriesList.map((category) => {
            return (
              <li key={category.id}>
                <Link href={`/categories/${category.item}`}>
                  {t(category.item)}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default NavCategories;