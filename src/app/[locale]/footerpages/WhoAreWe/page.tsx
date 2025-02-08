import { useTranslations } from "next-intl";
import FooterPage from "../../../../components/FooterPage/FooterPage";
import "./whoarewe.scss";
import React from 'react'

const Whoarewe = () => {
  const t = useTranslations('WhoAreWe');
  return (
    <div className="whoarewe">
      <FooterPage title={t('title')} />
    </div>
  )
}

export default Whoarewe;