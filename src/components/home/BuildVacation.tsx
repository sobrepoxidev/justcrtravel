// components/BuildVacation.tsx

import Link from 'next/link';
import Image from 'next/image'; // Import next/image
import { useTranslations } from 'next-intl';
import React from 'react'; // Import React for React.memo

/**
 * BuildVacation Component:
 * A promotional section encouraging users to build their custom vacation package.
 * Features a background image with an overlay, title, description, and a call-to-action button.
 * Optimized with next/image for lazy loading and image optimization, and React.memo.
 */
const BuildVacation = () => {
  // Hook to get translation functions based on the current locale
  const t = useTranslations('buildvacation');

  return (
    // Main container: Sets height (responsive), background color as fallback, hides overflow
    <div className="relative h-80 md:h-96 lg:h-[32rem] bg-blue-500 overflow-hidden">
      {/* Background Image and Overlay Container */}
      <div className="absolute inset-0">
        {/* Optimized Image using next/image */}
        <Image
          src="/home/barmar.webp" // Image source
          alt={t('imageAlt')} // Alt text from translations
          fill // Makes the image cover the parent div (absolute inset-0)
          sizes="100vw" // Responsive size hint (adjust if layout is more constrained)
          style={{ objectFit: 'cover' }} // Ensures image covers without distortion (used by fill)
          className="transition-transform duration-700 hover:scale-105" // Keep visual effects
          loading="lazy" // Explicitly set lazy loading (default for next/image without priority)
          // No 'priority' prop, ensuring it doesn't block initial page load
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-30" aria-hidden="true"></div>
      </div>

      {/* Text Content and Call-to-Action */}
      {/* Positioned above the background/overlay (z-10) and centered */}
      <div className="relative flex flex-col items-center justify-center h-full text-white text-center px-4 z-10">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 drop-shadow-lg">
          {t('title')}
        </h2>
        {/* Description */}
        <p className="text-lg md:text-xl mb-4 md:mb-6 max-w-md drop-shadow-md">
          {t('description')}
        </p>
        {/* Call-to-Action Button (Link) */}
        <Link
          href="/build-your-vacation" // Link destination
          className="border-2 border-white hover:bg-white hover:text-blue-600 focus:bg-white focus:text-blue-600 transition-colors duration-300 px-6 md:px-8 py-2 md:py-3 rounded-md font-medium transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          aria-label={t('ariaLabel')} // Accessibility label from translations
        >
          {t('cta')}
        </Link>
      </div>
    </div>
  );
};

// Export the component wrapped in React.memo for performance optimization.
// This prevents re-renders if the component's props (or dependencies like the 't' function reference) haven't changed.
export default React.memo(BuildVacation);

/*
 * --- How to Lazy Load the Entire Component ---
 * If this 'BuildVacation' component is often below the fold, you can
 * further optimize by lazy loading the component itself using next/dynamic.
 *
 * In the parent component where you use <BuildVacation />, import it like this:
 *
 * import dynamic from 'next/dynamic';
 *
 * const LazyBuildVacation = dynamic(() => import('./components/BuildVacation'), {
 * ssr: false, // Optional: Set to false if it doesn't need server-side rendering
 * // You can add a loading component here as well:
 * // loading: () => <p>Loading...</p>,
 * });
 *
 * // Then use <LazyBuildVacation /> instead of <BuildVacation /> in your JSX.
 *
 * This ensures the component's JavaScript code is only downloaded when needed.
 */