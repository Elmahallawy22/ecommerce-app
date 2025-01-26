import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.dummyjson.com'], // أضف النطاق هنا
  },
};

export default withNextIntl(nextConfig);