import React from 'react'
import "./BeSeller.scss";
import { useTranslations } from 'next-intl';
import FooterPage from '../../../../components/FooterPage/FooterPage';

const page = () => {
  const t = useTranslations('BeSeller')
  return (
    <div className='be-seller'>
      <FooterPage title={t('title')} />
    </div>
  )
}

export default page