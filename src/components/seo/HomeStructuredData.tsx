/**
 * @fileoverview Home page structured data component for SEO
 * This component generates JSON-LD structured data for the home page
 * including TravelAgency, WebSite, and Organization schemas.
 * 
 * @module components/seo/HomeStructuredData
 * @author Just Costa Rica Travel
 * @version 1.0.0
 */

import { useTranslations } from 'next-intl';


type HomeStructuredDataProps = Promise<{ locale: string }>;

/**
 * Internal component that handles the actual structured data generation
 */
function HomeStructuredDataInternal({ locale }: { locale: string }): React.ReactElement {
  const t = useTranslations('home.seo');
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://justcostaricatravel.com';
  
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TravelAgency",
        "@id": `${baseUrl}/#travelagency`,
        "name": "Just Costa Rica Travel",
        "alternateName": "JustCR Travel",
        "url": baseUrl,
        "logo": {
          "@type": "ImageObject",
          "url": `${baseUrl}/logo.png`,
          "width": 300,
          "height": 100
        },
        "image": {
          "@type": "ImageObject",
          "url": `${baseUrl}/home/bg.webp`,
          "width": 1200,
          "height": 630
        },
        "description": t('description'),
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "CR",
          "addressLocality": "San José",
          "addressRegion": "San José Province"
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+1-866-319-6020",
            "contactType": "customer service",
            "areaServed": ["US", "CA"],
            "availableLanguage": ["English"]
          },
          {
            "@type": "ContactPoint",
            "telephone": "+506-8585-0000",
            "contactType": "customer service",
            "areaServed": "CR",
            "availableLanguage": ["Spanish", "English"]
          }
        ],
        "sameAs": [
          "https://www.facebook.com/justcostaricatravel",
          "https://www.instagram.com/justcostaricatravel",
          "https://www.tripadvisor.com/justcostaricatravel"
        ],
        "serviceArea": {
          "@type": "Country",
          "name": "Costa Rica"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Costa Rica Travel Packages",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "TouristTrip",
                "name": "Adventure Tours",
                "description": "Zip line, rafting, volcano tours, and wildlife watching"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "TouristTrip",
                "name": "Beach Vacations",
                "description": "Manuel Antonio, Guanacaste, and Caribbean coast experiences"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "TouristTrip",
                "name": "Eco-Tourism",
                "description": "Monteverde cloud forest, national parks, and biodiversity tours"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "TouristTrip",
                "name": "Cultural Experiences",
                "description": "Coffee tours, local cuisine, and authentic Costa Rican culture"
              }
            }
          ]
        }
      },
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        "url": baseUrl,
        "name": "Just Costa Rica Travel",
        "description": t('description'),
        "publisher": {
          "@id": `${baseUrl}/#travelagency`
        },
        "inLanguage": locale === 'es' ? 'es-CR' : 'en-US',
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${baseUrl}/search?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
          }
        ]
      },
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        "name": "Just Costa Rica Travel",
        "url": baseUrl,
        "logo": {
          "@type": "ImageObject",
          "url": `${baseUrl}/logo.png`,
          "width": 300,
          "height": 100
        },
        "description": t('description'),
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "CR",
          "addressLocality": "San José",
          "addressRegion": "San José Province"
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+1-866-319-6020",
            "contactType": "customer service",
            "areaServed": ["US", "CA"],
            "availableLanguage": ["English"]
          },
          {
            "@type": "ContactPoint",
            "telephone": "+506-8585-0000",
            "contactType": "customer service",
            "areaServed": "CR",
            "availableLanguage": ["Spanish", "English"]
          }
        ],
        "sameAs": [
          "https://www.facebook.com/justcostaricatravel",
          "https://www.instagram.com/justcostaricatravel",
          "https://www.tripadvisor.com/justcostaricatravel"
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2)
      }}
    />
  );
}

/**
 * Home page structured data component
 * Generates JSON-LD structured data for better SEO
 * 
 * @component
 * @param {HomeStructuredDataProps} props - Component props
 * @returns {JSX.Element} Script tag with JSON-LD structured data
 */
export default async function HomeStructuredData(params: HomeStructuredDataProps): Promise<React.ReactElement> {
  const { locale } = await params;
  return <HomeStructuredDataInternal locale={locale} />;
}