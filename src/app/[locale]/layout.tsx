import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"

//locale
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
//navigation

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;


  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} className="">
      <body
        className={` ${geistSans.variable} ${geistMono.variable} antialiased`} //min-h-screen flex flex-col
      >
        <NextIntlClientProvider locale={locale}>
        

            {children}
            
            <SpeedInsights />
        </NextIntlClientProvider>
      </body>
    </html>

  );
}
{/* <Navbar /> */ }