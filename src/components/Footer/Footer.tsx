import React from 'react';
import "./Footer.scss";
import { Link } from '../../i18n/routing';
import Image from 'next/image';
import AppStore from "./assets/App_store.png";
import GooglePaly from "./assets/Google_Play.png";
import FacebookIcon from "./assets/Facebook_icon.png";
import TwitterIcon from "./assets/Twitter_icon.png";
import LinkedinIcon from "./assets/Linkedin_icon.png";
import InstagramIcon from "./assets/Insta_icon.png";
import YoutubeIcon from "./assets/Youtube_icon.png";
import SnapchatIcon from "./assets/Snapchat_icon.png";

const Footer = () => {
  return (
    <footer className='footer hidden md:block'>
      <div className="flex justify-center px-1 lg:px-0">
        <div className="container flex justify-between py-8">
          <ul className='space-y-2'>
            <li><Link href={'/'}>من نحن</Link></li>
            <li><Link href={'/'}>كن بائع لدينا</Link></li>
            <li><Link href={'/'}>جهات الاتصال</Link></li>
            <li><Link href={'/'}>الشروط والأحكام</Link></li>
            <li><Link href={'/'}>السياسات</Link></li>
          </ul>
          <div className="subscribe flex flex-col items-center gap-3">
            <h6>اشترك في الاخبار</h6>
            <div className="inp-box flex gap-1 ">
              <div className="input-box">
                <input
                  type="text"
                  placeholder='ادخل بريدك الالكتروني'
                />
              </div>
              <input
                type="submit"
                value="اشترك"
                className='btn'
              />
            </div>
          </div>
          <div className='icons space-y-3'>
            <p>تسوق عبر التطبيق </p>
            <div className="flex gap-1">
              <Image src={AppStore} alt='AppStore-icon' />
              <Image src={GooglePaly} alt='GooglePaly-icon' />
            </div>
            <p className='pt-3'>تابعنا</p>
            <div className="flex gap-2">
              <Image src={FacebookIcon} alt='Facebook-Icon' />
              <Image src={TwitterIcon} alt='Twitter-Icon' />
              <Image src={LinkedinIcon} alt='Linkedin-Icon' />
              <Image src={InstagramIcon} alt='Instagram-Icon' />
              <Image src={YoutubeIcon} alt='Youtube-Icon' />
              <Image src={SnapchatIcon} alt='Snapchat-Icon' />
            </div>
          </div>
        </div>
      </div>
      <div className="end-footer flex justify-center items-center">الذئب | جمع الحقوق محفوظة </div>
    </footer>
  )
}

export default Footer