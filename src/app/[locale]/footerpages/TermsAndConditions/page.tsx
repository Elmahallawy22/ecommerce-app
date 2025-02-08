import React from 'react';
import "./TermsAndConditions.scss";
import { useTranslations } from 'next-intl';
import FooterPage from '../../../../components/FooterPage/FooterPage';

const page = () => {
  const t = useTranslations("TermsAndConditions");
  return (
    <div className='TermsAndConditions'>
      <FooterPage title={t("title")} />
    </div>
  )
}

export default page;