'use client';

import { memo } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

/**
 * DestinationGallery Component
 *
 * Modern destination showcase with interactive cards, gradients, and animations.
 * Features enhanced visual design with hover effects and call-to-action buttons.
 * Optimized with next/image and React.memo for performance.
 */
const DestinationGallery = () => {
  const t = useTranslations('destinationGallery');

  // Enhanced destination data with additional properties
  const destinations = [
    {
      src: '/home/destinations/destination1.webp',
      alt: t('destination1.alt'),
      label: t('destination1.label'),
      description: t('destination1.description'),
      href: '/destinations#manuelAntonio',
      gradient: 'from-blue-600/80 to-purple-600/80'
    },
    {
      src: '/home/destinations/destination2.webp',
      alt: t('destination2.alt'),
      label: t('destination2.label'),
      description: t('destination2.description'),
      href: '/destinations#arenal',
      gradient: 'from-green-600/80 to-teal-600/80'
    },
    {
      src: '/home/destinations/destination3.webp',
      alt: t('destination3.alt'),
      label: t('destination3.label'),
      description: t('destination3.description'),
      href: '/destinations#monteverde',
      gradient: 'from-emerald-600/80 to-cyan-600/80'
    },
    {
      src: '/home/destinations/destination4.webp',
      alt: t('destination4.alt'),
      label: t('destination4.label'),
      description: t('destination4.description'),
      href: '/destinations#papagayo',
      gradient: 'from-orange-600/80 to-red-600/80'
    },
  ];

  return (
    <section className="py-20 px-4 md:px-6 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-100/10 to-purple-100/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header section */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-gray-700 text-sm font-medium mb-6 border border-white/40 shadow-sm">
            <svg className="w-4 h-4 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            {t('badge')}
          </div>

          {/* Main heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-800 via-blue-800 to-purple-800 bg-clip-text text-transparent">
              {t('heading')}
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        {/* Destinations grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination, index) => (
            <Link
              key={index}
              href={destination.href}
              className="group block transform transition-all duration-500 hover:scale-105 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white">
                {/* Image container */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={destination.src}
                    alt={destination.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    quality={85}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                  
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${destination.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-300`} />
                  
                  {/* Content overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-white text-xl font-bold mb-2 drop-shadow-lg">
                        {destination.label}
                      </h3>
                      <p className="text-white/90 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        {destination.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Explore button */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Card footer */}
                <div className="p-6 bg-white">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600">
                      {t('exploreText')}
                    </span>
                    <div className="flex items-center text-blue-600 group-hover:text-purple-600 transition-colors duration-300">
                      <span className="text-sm font-semibold mr-1">{t('learnMore')}</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <Link
            href="/destinations"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            {t('viewAllDestinations')}
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

// Exporting the component wrapped in React.memo
export default memo(DestinationGallery);