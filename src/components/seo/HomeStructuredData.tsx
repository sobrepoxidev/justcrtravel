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


interface HomeStructuredDataProps {
  locale: string;
}

/**
 * Home page structured data component
 * Generates JSON-LD structured data for better SEO
 * 
 * @component
 * @param {HomeStructuredDataProps} props - Component props
 * @returns {JSX.Element} Script tag with JSON-LD structured data
 */
export default function HomeStructuredData({ locale }: HomeStructuredDataProps): React.ReactElement {
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
          "url": `${baseUrl}/mainlogonav1.png`,
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
          "https://www.instagram.com/just_c.r_travel_com?igsh=d3diMnJqd3VpYzc4",
       
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
        "foundingDate": "2015",
        "founders": [
          {
            "@type": "Person",
            "name": "Local Costa Rican Entrepreneurs"
          }
        ],
        "numberOfEmployees": {
          "@type": "QuantitativeValue",
          "minValue": 5,
          "maxValue": 15
        },
        "areaServed": {
          "@type": "Country",
          "name": "Costa Rica"
        },
        "knowsAbout": [
          "Costa Rica Tourism",
          "Adventure Tours",
          "Eco-Tourism",
          "Beach Vacations",
          "Cultural Experiences",
          "Wildlife Watching",
          "Volcano Tours",
          "Rainforest Tours"
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${baseUrl}/#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": `${baseUrl}/${locale}`
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 0),
      }}
    />
  );
}