'use client';

import { useParams } from 'next/navigation';

interface StructuredDataProps {
  page: 'payments' | 'home' | 'about';
}

export default function StructuredData({ page }: StructuredDataProps) {
  const params = useParams();
  const locale = params.locale as string;

  const baseUrl = 'https://justcostaricatravel.com';
  const currentUrl = `${baseUrl}/${locale}/${page === 'home' ? '' : page}`;

  // TravelAgency Schema
  const travelAgencySchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Just Costa Rica Travel",
    "description": locale === 'es' 
      ? "Agencia de viajes especializada en paquetes turísticos personalizados en Costa Rica. Creamos experiencias únicas adaptadas a tus preferencias y presupuesto."
      : "Travel agency specialized in custom vacation packages in Costa Rica. We create unique experiences tailored to your preferences and budget.",
    "url": baseUrl,
    "logo": `${baseUrl}/logo.png`,
    "image": `${baseUrl}/costa-rica-travel.jpg`,
    "telephone": "+506-7032-9090",
    "email": "info@justcostaricatravel.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CR",
      "addressLocality": "San José",
      "addressRegion": "San José Province"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "9.9281",
      "longitude": "-84.0907"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Costa Rica"
    },
    "serviceType": [
      "Custom Vacation Packages",
      "Adventure Tours",
      "Beach Vacations",
      "Cultural Experiences",
      "Luxury Travel",
      "Eco-Tourism"
    ],
    "priceRange": "$$-$$$",
    "currenciesAccepted": ["USD", "CRC"],
    "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
    "openingHours": "Mo-Su 08:00-20:00",
    "sameAs": [
      "https://www.facebook.com/justcostaricatravel",
      "https://www.instagram.com/justcostaricatravel",
      "https://wa.me/50670329090"
    ]
  };

  // Service Schema for Custom Packages
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": locale === 'es' 
      ? "Paquetes Turísticos Personalizados en Costa Rica"
      : "Custom Vacation Packages in Costa Rica",
    "description": locale === 'es'
      ? "Diseñamos paquetes de viaje únicos y personalizados para Costa Rica, adaptados a tus intereses, presupuesto y duración de estadía. Incluye aventura, playa, cultura y experiencias de lujo."
      : "We design unique and personalized travel packages for Costa Rica, tailored to your interests, budget and length of stay. Includes adventure, beach, culture and luxury experiences.",
    "provider": {
      "@type": "TravelAgency",
      "name": "Just Costa Rica Travel",
      "url": baseUrl
    },
    "areaServed": {
      "@type": "Country",
      "name": "Costa Rica"
    },
    "serviceType": "Travel Package Design",
    "category": "Tourism",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "USD",
      "priceRange": "500-5000",
      "validFrom": new Date().toISOString().split('T')[0],
      "validThrough": new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": locale === 'es' ? "Tipos de Paquetes" : "Package Types",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": locale === 'es' ? "Paquetes de Aventura" : "Adventure Packages",
            "description": locale === 'es' 
              ? "Experiencias emocionantes con tirolesas, rafting, senderismo y observación de vida silvestre"
              : "Thrilling experiences with zip-lining, rafting, hiking and wildlife watching"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": locale === 'es' ? "Paquetes de Playa" : "Beach Packages",
            "description": locale === 'es'
              ? "Relajación en las mejores playas del Pacífico y Caribe con actividades acuáticas"
              : "Relaxation at the best Pacific and Caribbean beaches with water activities"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": locale === 'es' ? "Paquetes Culturales" : "Cultural Packages",
            "description": locale === 'es'
              ? "Inmersión en la rica cultura costarricense con comunidades locales y tradiciones"
              : "Immersion in rich Costa Rican culture with local communities and traditions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": locale === 'es' ? "Paquetes de Lujo" : "Luxury Packages",
            "description": locale === 'es'
              ? "Experiencias premium con hoteles de lujo, spas y servicios exclusivos"
              : "Premium experiences with luxury hotels, spas and exclusive services"
          }
        }
      ]
    }
  };

  // Product Schema for Costa Rica Tourism
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": locale === 'es' 
      ? "Vacaciones Personalizadas en Costa Rica"
      : "Custom Costa Rica Vacations",
    "description": locale === 'es'
      ? "Paquetes de viaje completamente personalizados para explorar Costa Rica. Desde aventuras en la selva hasta relajación en playas paradisíacas, creamos la experiencia perfecta para ti."
      : "Fully customized travel packages to explore Costa Rica. From jungle adventures to relaxation on paradise beaches, we create the perfect experience for you.",
    "brand": {
      "@type": "Brand",
      "name": "Just Costa Rica Travel"
    },
    "category": "Travel Package",
    "image": [
      `${baseUrl}/costa-rica-adventure.jpg`,
      `${baseUrl}/costa-rica-beach.jpg`,
      `${baseUrl}/costa-rica-culture.jpg`,
      `${baseUrl}/costa-rica-luxury.jpg`
    ],
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "500",
      "highPrice": "5000",
      "offerCount": "4",
      "availability": "https://schema.org/InStock",
      "validFrom": new Date().toISOString().split('T')[0],
      "seller": {
        "@type": "TravelAgency",
        "name": "Just Costa Rica Travel"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Sarah Johnson"
        },
        "reviewBody": locale === 'es'
          ? "Experiencia increíble! El equipo diseñó el viaje perfecto para nuestra familia. Costa Rica es mágico y ellos lo hicieron aún mejor."
          : "Amazing experience! The team designed the perfect trip for our family. Costa Rica is magical and they made it even better."
      }
    ]
  };

  // WebPage Schema
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": page === 'payments' ? (locale === 'es' ? 'Paquetes Personalizados' : 'Custom Packages') : 'Just Costa Rica Travel',
    "description": page === 'payments' 
      ? (locale === 'es' 
          ? 'Diseña tu paquete de viaje perfecto a Costa Rica. Aventura, playa, cultura y lujo - todo personalizado para ti.'
          : 'Design your perfect Costa Rica travel package. Adventure, beach, culture and luxury - all customized for you.')
      : (locale === 'es'
          ? 'Agencia de viajes especializada en paquetes turísticos personalizados en Costa Rica'
          : 'Travel agency specialized in custom vacation packages in Costa Rica'),
    "url": currentUrl,
    "inLanguage": locale === 'es' ? 'es-CR' : 'en-US',
    "isPartOf": {
      "@type": "WebSite",
      "name": "Just Costa Rica Travel",
      "url": baseUrl
    },
    "about": {
      "@type": "Thing",
      "name": "Costa Rica Tourism",
      "description": "Custom vacation packages and travel experiences in Costa Rica"
    },
    "keywords": locale === 'es'
      ? "Costa Rica, paquetes turísticos, viajes personalizados, aventura, playa, cultura, lujo, turismo"
      : "Costa Rica, vacation packages, custom travel, adventure, beach, culture, luxury, tourism"
  };

  const allSchemas = {
    "@context": "https://schema.org",
    "@graph": [travelAgencySchema, serviceSchema, productSchema, webPageSchema]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(allSchemas, null, 2)
      }}
    />
  );
}