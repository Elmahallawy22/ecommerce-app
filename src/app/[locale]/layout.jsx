import "./globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
// import { notFound } from 'next/navigation';
// import { routing } from '../../i18n/routing';
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";

export default async function LocaleLayout({
  children,
  // params: { locale },
}) {

  // const resolvedParams = Promise.resolve({ locale });
  // if (!routing.locales.includes(locale)) {
  //   notFound();
  // }

  const messages = await getMessages();

  return (
    <html>
      <body className="py-20 md:py-0">
        <Header />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Footer />
      </body>
    </html>
  );
}
