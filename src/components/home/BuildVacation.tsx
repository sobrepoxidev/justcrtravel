'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { memo } from 'react';

/**
 * BuildVacation Component:
 * Modern promotional section encouraging users to build their custom vacation package.
 * Features dynamic gradients, parallax effects, and engaging animations.
 * Optimized with next/image and React.memo for performance.
 */
const BuildVacation = () => {
  const t = useTranslations('buildvacation');

  return (
    <section className="relative h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 scale-110">
        <Image
          src="/home/barmar.webp"
          alt={t('imageAlt')}
          fill
          sizes="100vw"
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-1000 hover:scale-105"
          loading="lazy"
          quality={85}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
      </div>

      {/* Modern gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 via-blue-900/60 to-teal-900/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-500/20 to-blue-500/30" />

      {/* Floating decorative elements - optimized for mobile */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-4 w-16 h-16 sm:w-32 sm:h-32 sm:top-20 sm:left-10 bg-white/5 rounded-full blur-2xl animate-pulse" />
        <div className="absolute top-20 right-4 w-12 h-12 sm:w-24 sm:h-24 sm:top-40 sm:right-20 bg-blue-300/10 rounded-full blur-xl animate-bounce" style={{animationDelay: '1s'}} />
        <div className="absolute bottom-16 left-1/4 w-20 h-20 sm:w-40 sm:h-40 sm:bottom-32 bg-purple-300/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
        <div className="absolute bottom-10 right-1/3 w-14 h-14 sm:w-28 sm:h-28 sm:bottom-20 bg-teal-300/10 rounded-full blur-2xl animate-bounce" style={{animationDelay: '3s'}} />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 sm:px-6">
        {/* Badge */}
        <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-xs sm:text-sm font-medium mb-4 sm:mb-6 md:mb-8 border border-white/20">
          <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
          </svg>
          {t('badge')}
        </div>

        {/* Main title with gradient text */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight px-2">
          <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            {t('title')}
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-3 sm:mb-4 md:mb-6 max-w-xs sm:max-w-2xl md:max-w-3xl leading-relaxed font-light px-2">
          {t('subtitle')}
        </p>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg text-white/80 mb-6 sm:mb-8 md:mb-10 max-w-xs sm:max-w-xl md:max-w-2xl leading-relaxed px-2">
          {t('description')}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full max-w-sm sm:max-w-none px-4">
          <Link
            href="/build-your-vacation"
            className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-sm sm:text-base font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
            aria-label={t('ariaLabel')}
          >
            {t('cta')}
            <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          
          <Link
            href="/packages"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/30 hover:border-white/60 text-white text-sm sm:text-base font-semibold rounded-full transition-all duration-300 backdrop-blur-sm hover:bg-white/10 flex items-center justify-center"
          >
            {t('viewPackages')}
          </Link>
        </div>

        {/* Features */}
        <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12 md:mt-16 max-w-xs sm:max-w-4xl px-4">
          <div className="text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 border border-white/20">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xs sm:text-sm font-semibold text-white mb-1">{t('feature1.title')}</h3>
            <p className="text-white/70 text-xs leading-tight hidden sm:block">{t('feature1.description')}</p>
          </div>
          
          <div className="text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 border border-white/20">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xs sm:text-sm font-semibold text-white mb-1">{t('feature2.title')}</h3>
            <p className="text-white/70 text-xs leading-tight hidden sm:block">{t('feature2.description')}</p>
          </div>
          
          <div className="text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 border border-white/20">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xs sm:text-sm font-semibold text-white mb-1">{t('feature3.title')}</h3>
            <p className="text-white/70 text-xs leading-tight hidden sm:block">{t('feature3.description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Export the component wrapped in React.memo for performance optimization.
// This prevents re-renders if the component's props (or dependencies like the 't' function reference) haven't changed.
export default memo(BuildVacation);

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