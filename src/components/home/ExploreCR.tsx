// components/ExploreCR.tsx

import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

/**
 * ExploreCR Component
 *
 * Renders a full-screen promotional section encouraging users to explore Costa Rica.
 * Includes decorative top and bottom SVG waves, a localized title and description,
 * and a call-to-action button leading to a vacation builder.
 *
 * The component is memoized with React.memo to avoid unnecessary re-renders
 * if no props are added or changed.
 */
const ExploreCR = () => {
  const t = useTranslations('exploreCR');

  return (
    <div className="min-h-screen flex flex-col">
      {/* Decorative top SVG wave */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        className="w-full h-16 sm:h-20 transform transition-transform duration-300 hover:scale-105"
      >
        <path
          className="elementor-shape-fill fill-current text-white"
          d="M700,70l300-40V0H0v30L700,70z"
        />
      </svg>

      {/* Main content */}
      <div className="flex-grow flex items-center justify-center px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-semibold text-center leading-relaxed mb-6">
            {t('title')}
          </h2>

          {/* Description */}
          <p className="text-white text-center text-lg opacity-90 mt-4">
            {t('description')}
          </p>

          {/* Call-to-Action Button */}
          <div className="mt-8 text-center">
            <Link
              href="/build-your-vacation"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 focus:bg-white focus:text-blue-600 transition-colors duration-300 px-6 md:px-8 py-2 md:py-3 rounded-md font-medium transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              aria-label={t('ariaLabel')}
            >
              {t('cta')}
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative bottom SVG wave */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        className="w-full h-16 sm:h-20 rotate-180 transform transition-transform duration-300 hover:scale-105"
      >
        <path
          className="elementor-shape-fill fill-current text-white"
          d="M700,70l300-40V0H0v30L700,70z"
        />
      </svg>
    </div>
  );
};

// Export memoized component for performance optimization
export default React.memo(ExploreCR);
