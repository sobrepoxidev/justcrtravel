'use client';

import { memo } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

/**
 * ExploreCR Component
 *
 * Modern promotional section encouraging users to explore Costa Rica.
 * Features dynamic gradients, floating elements, and engaging animations.
 * Optimized for performance with memoization and modern design patterns.
 */
const ExploreCR = () => {
  const t = useTranslations('exploreCR');

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Dynamic background with multiple gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-teal-500 to-blue-600" />
      <div className="absolute inset-0 bg-gradient-to-tr from-green-400/30 via-transparent to-blue-500/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-yellow-300/20 rounded-full blur-lg animate-bounce" style={{animationDelay: '1s'}} />
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-green-300/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}} />
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-blue-300/15 rounded-full blur-xl animate-bounce" style={{animationDelay: '3s'}} />
      </div>

      {/* Decorative top wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-16 md:h-24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            className="fill-emerald-100/15"
          />
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-8 border border-white/30">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            {t('badge')}
          </div>

          {/* Main heading with gradient text */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-yellow-100 to-green-100 bg-clip-text text-transparent">
              {t('title')}
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-6 max-w-3xl mx-auto leading-relaxed font-light">
            {t('subtitle')}
          </p>

          {/* Description */}
          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            {t('description')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/build-your-vacation"
              className="group px-8 py-4 bg-white text-emerald-600 hover:bg-emerald-50 font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-2"
              aria-label={t('ariaLabel')}
            >
              {t('cta')}
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            
            <Link
              href="/destinations"
              className="px-8 py-4 border-2 border-white/40 hover:border-white/70 text-white font-semibold rounded-full transition-all duration-300 backdrop-blur-sm hover:bg-white/10"
            >
              {t('exploreDestinations')}
            </Link>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 border border-white/30">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{t('feature1.title')}</h3>
              <p className="text-white/80 text-sm">{t('feature1.description')}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 border border-white/30">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{t('feature2.title')}</h3>
              <p className="text-white/80 text-sm">{t('feature2.description')}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 border border-white/30">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{t('feature3.title')}</h3>
              <p className="text-white/80 text-sm">{t('feature3.description')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180">
        <svg
          className="relative block w-full h-20 md:h-24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            className="fill-white"
          />
        </svg>
      </div>
    </section>
  );
};

// Export memoized component for performance optimization
export default memo(ExploreCR);
