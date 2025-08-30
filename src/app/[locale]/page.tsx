/**
 * @fileoverview Main page of the JustCR Travel application
 * This file contains the main structure of the home page,
 * including navigation, main sections, and shared components.
 * 
 * @module pages/Home
 * @author [Your name]
 * @version 1.0.0
 */

import Navbar from '@/components/general/NavBar';
import Hero from '@/components/home/Hero';
import Specialties from "@/components/home/Specialties";
import GridImage from '@/components/home/GridImage';
import FlightSearch from '@/components/home/FlightSearch';
import Footer from '@/components/general/Footer';
import WhatsAppButton from '@/components/general/WhatsAppButton';
import HomeStructuredData from '@/components/seo/HomeStructuredData';
import dynamic from 'next/dynamic';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';

interface HomePageProps {
  params: {
    locale: string;
  };
}

/**
 * Generates metadata for the home page with SEO optimization
 * @param params - Page parameters including locale
 * @returns Metadata object with optimized SEO tags
 */
export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'home.seo' });
  
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://justcostaricatravel.com';
  const canonicalUrl = `${baseUrl}/${locale}`;
  
  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    authors: [{ name: 'Just Costa Rica Travel' }],
    creator: 'Just Costa Rica Travel',
    publisher: 'Just Costa Rica Travel',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en-US': `${baseUrl}/en`,
        'es-CR': `${baseUrl}/es`,
        'x-default': `${baseUrl}/en`,
      },
    },
    openGraph: {
      title: t('openGraph.title'),
      description: t('openGraph.description'),
      url: canonicalUrl,
      siteName: 'Just Costa Rica Travel',
      images: [
        {
          url: `${baseUrl}/home/bg.webp`,
          width: 1200,
          height: 630,
          alt: t('openGraph.imageAlt'),
        },
      ],
      locale: locale === 'es' ? 'es_CR' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('twitter.title'),
      description: t('twitter.description'),
      images: [`${baseUrl}/home/bg.webp`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
    },
  };
}

const LazyBuildVacation = dynamic(() => import('@/components/home/BuildVacation'), {
 loading: () => <p>Loading...</p>,
});

const LazyDestinationGallery = dynamic(() => import('@/components/home/DestinationGallery'), {
  loading: () => <p>Loading...</p>,
});

const LazyExploreCR = dynamic(() => import('@/components/home/ExploreCR'), {
  loading: () => <p>Loading...</p>,
});


/**
 * Main home page component
 * 
 * @component
 * @param params - Page parameters including locale
 * @returns {JSX.Element} JSX element representing the complete home page
 * 
 * @description
 * This component organizes and renders all the main components of the home page,
 * including the navigation bar, content sections, and footer.
 * 
 * @example
 * // Using the Home component
 * import Home from '@/app/[locale]/page';
 * 
 * // Rendering in the application
 * <Home params={{ locale: 'en' }} />
 */
export default function Home({ params }: HomePageProps) {
  const { locale } = params;
  return (
    <main className="relative min-h-screen">
      {/* Fixed background that covers the entire page */}
      <div
        className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('/home/bg.webp')",
          backgroundAttachment: "fixed"
        }}
      />

      {/* Content layer that sits on top of the background */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        {/* White divider with explicit height and opacity-100 to ensure it's visible */}
        
        <LazyBuildVacation />
        <LazyDestinationGallery />
        <LazyExploreCR />
        <Specialties />
        <GridImage />
        <FlightSearch />
        <Footer />
        <WhatsAppButton />
      </div>
      
      {/* SEO Structured Data */}
      <HomeStructuredData locale={locale} />
    </main>
  );
};