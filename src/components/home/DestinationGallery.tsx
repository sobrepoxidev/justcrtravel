// components/DestinationGallery.tsx

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

/**
 * DestinationGallery Component
 *
 * Displays a grid of destination images with hover-over labels.
 * Uses next/image for optimized loading and next-intl for translations.
 *
 * This component is memoized with React.memo for potential performance gains
 * if props are added in the future.
 */
const DestinationGallery = () => {
  const t = useTranslations('destinationGallery');

  // Destination image metadata from translation keys
  const destinations = [
    {
      src: '/home/destinations/destination1.webp',
      alt: t('destination1.alt'),
      label: t('destination1.label'),
    },
    {
      src: '/home/destinations/destination2.webp',
      alt: t('destination2.alt'),
      label: t('destination2.label'),
    },
    {
      src: '/home/destinations/destination3.webp',
      alt: t('destination3.alt'),
      label: t('destination3.label'),
    },
    {
      src: '/home/destinations/destination4.webp',
      alt: t('destination4.alt'),
      label: t('destination4.label'),
    },
  ];

  return (
    <div className="py-6 px-4 md:px-6 bg-white">
      {/* Heading section */}
      <div className="mb-8 text-center max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-light text-gray-700 leading-relaxed">
          {t('heading')}
        </h2>
      </div>

      {/* Destination cards grid */}
      <div className="flex flex-wrap justify-center items-start relative">
        {destinations.map((destination, index) => (
          <div
            key={index}
            className={`max-w-full w-full max-sm:mb-1 sm:w-1/2 md:w-80 p-1 sm:p-0 md:mx-4 z-10 transition-transform duration-300 hover:scale-105 ${
              index % 2 !== 0 ? 'mt-0 sm:mt-16' : ''
            }`}
          >
            {/* Image card */}
            <div className="overflow-hidden rounded-lg shadow-md relative group">
              <Image
                src={destination.src}
                alt={destination.alt}
                width={1920}
                height={0}
                className="w-full h-auto object-cover"
              />
              {/* Hover label overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 p-3">
                <p className="text-white text-center font-medium text-sm md:text-base">
                  {destination.label}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Exporting the component wrapped in React.memo
export default React.memo(DestinationGallery);