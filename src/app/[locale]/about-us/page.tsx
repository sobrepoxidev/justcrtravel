import Navbar from "@/components/general/NavBar";
import About from "@/components/about/About";
import Footer from "@/components/general/Footer";
import WhatsAppButton from "@/components/general/WhatsAppButton";

import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';



type tParams = Promise<{ locale: string }>;
export async function generateMetadata(props: { params: tParams }): Promise<Metadata> {
  // Extraer "locale"
  const { locale } = await props.params;

  const t = await getTranslations('about');

  const pageTitle = `${t('title')} | Just Costa Rica Travel`;
  const pageDescription = t('description.part1');
  const pageKeywords = [
    'Costa Rica Travel',
    'About Just Costa Rica Travel',
    'Tourism in Costa Rica',
    'Travel Agency',
    'Vacation Packages',
    'Costa Rica Adventures'
  ];

  const baseUrl = 'https://justcostaricatravel.com';

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: pageKeywords,
    alternates: {
      canonical: `${baseUrl}/${locale}/about-us`,
      languages: {
        en: `${baseUrl}/en/about-us`,
        es: `${baseUrl}/es/about-us`
      }
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: `${baseUrl}/${locale}/about-us`
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [`${baseUrl}/about/main.jpg`]
    }
  };
}

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Navbar />
      <About />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
