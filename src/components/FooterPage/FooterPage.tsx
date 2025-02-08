import React from 'react';
import "./FooterPage.scss";
import FooterLogo from "./assets/footer_logo.png";
import Image from 'next/image';
import { useTranslations } from 'next-intl';

type FooterPageParams = {
  title: string;
};

const FooterPage = ({ title }: FooterPageParams) => {
  const t = useTranslations("FooterPage");

  return (
    <div className='footer-page flex justify-center'>
      <div className="container py-6 md:py-10 lg:py-12">
        <div className="page-content">
          <div className="footer-page-header flex justify-between items-end mb-3 md:mb-5">
            <h4>{title}</h4>
            <Image src={FooterLogo} alt="logo" />
          </div>
          <ul className='space-y-1 md:space-y-2 lg:space-y-3'>
            <li>{t('item1')}</li>
            <li>{t('item2')}</li>
            <li>{t('item3')}</li>
            <li>{t('item4')}</li>
            <li>{t('item5')}</li>
            <li>{t('item6')}</li>
            <li>{t('item7')}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterPage;