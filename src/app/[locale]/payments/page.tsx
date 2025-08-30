import Navbar from "@/components/general/NavBar";
import Footer from "@/components/general/Footer";
import WhatsAppButton from "@/components/general/WhatsAppButton";
import PaymentsClient from "@/components/payments/PaymentsClient";
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';

type tParams = Promise<{ locale: string }>;
export async function generateMetadata(props: { params: tParams }): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations('payments');

  const pageTitle = t('seo.title');
  const pageDescription = t('seo.description');
  const pageKeywords = t('seo.keywords').split(', ');

  const baseUrl = 'https://justcostaricatravel.com';

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: pageKeywords,
    alternates: {
      canonical: `${baseUrl}/${locale}/payments`,
      languages: {
        'en-US': `${baseUrl}/en/payments`,
        'es-CR': `${baseUrl}/es/payments`,
        'x-default': `${baseUrl}/en/payments`
      }
    },
    openGraph: {
      title: t('seo.openGraph.title'),
      description: t('seo.openGraph.description'),
      url: `${baseUrl}/${locale}/payments`,
      siteName: 'Just Costa Rica Travel',
      images: [
        {
          url: `${baseUrl}/home/hero/hero-1.webp`,
          width: 1200,
          height: 630,
          alt: t('seo.openGraph.imageAlt')
        }
      ],
      locale: locale === 'es' ? 'es_CR' : 'en_US',
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: t('seo.twitter.title'),
      description: t('seo.twitter.description'),
      images: [`${baseUrl}/home/hero/hero-1.webp`]
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    }
  };
}

export default function Payments() {

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-green-50 min-h-screen">
      <Navbar />
      <PaymentsClient />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
