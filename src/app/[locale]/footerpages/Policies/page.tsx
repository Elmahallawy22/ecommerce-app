import React from 'react';
import "./Policies.scss";
import FooterPage from '../../../../components/FooterPage/FooterPage';
import { useTranslations } from 'next-intl';

const page = () => {
  const t = useTranslations("Policies");
  return (
    <div className='policies'>
      <FooterPage title={t('title')} />
    </div>
  )
}

export default page