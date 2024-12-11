import "./globals.css";

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '../../i18n/routing';
import Header from "../../components/header/Header";

export default async function LocaleLayout({
  children,
  params: { locale },
}) {
  // Wrap params in a Promise if necessary
  const resolvedParams = Promise.resolve({ locale });

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <Header />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
