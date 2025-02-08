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
      <body className="pb-20 md:pb-0 flex flex-col justify-end min-h-full">
        <Header />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Footer />
      </body>
    </html>
  );
}
