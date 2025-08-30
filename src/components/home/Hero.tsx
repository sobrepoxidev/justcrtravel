'use client';

import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

const Hero = () => {
  const t = useTranslations('hero');

  const images = [
    { src: '/home/hero/carrucel1Resize.webp', title: t('slide1.title'), subtitle: t('slide1.subtitle') },
    { src: '/home/hero/carrucel2Resize.webp', title: t('slide2.title'), subtitle: t('slide2.subtitle') },
    { src: '/home/hero/carrucel3Resize.webp', title: t('slide3.title'), subtitle: t('slide3.subtitle') },
    { src: '/home/hero/carrucel4Resize.webp', title: t('slide4.title'), subtitle: t('slide4.subtitle') },
    { src: '/home/hero/carrucel5Resize.webp', title: t('slide5.title'), subtitle: t('slide5.subtitle') },
  ];

  const SLIDESHOW_INTERVAL = 6000;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [contentVisible, setContentVisible] = useState(true);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setContentVisible(false);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % images.length);
          setContentVisible(true);
        }, 300);
      }, SLIDESHOW_INTERVAL);
      return () => clearInterval(interval);
    }
  }, [isPaused, images.length]);

  const nextSlide = useCallback(() => {
    setContentVisible(false);
    setTimeout(() => {
      setCurrentIndex((p) => (p + 1) % images.length);
      setContentVisible(true);
    }, 300);
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setContentVisible(false);
    setTimeout(() => {
      setCurrentIndex((p) => (p - 1 + images.length) % images.length);
      setContentVisible(true);
    }, 300);
  }, [images.length]);

  const goToSlide = useCallback((index: number) => {
    if (index !== currentIndex) {
      setContentVisible(false);
      setTimeout(() => {
        setCurrentIndex(index);
        setContentVisible(true);
      }, 300);
    }
  }, [currentIndex]);

  const togglePlayPause = useCallback(() => setIsPaused((prev) => !prev), []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out z-0 pointer-events-none ${
            index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          <Image
            src={image.src}
            alt={`${image.title} - Costa Rica`}
            fill
            className="object-cover"
            priority={index === 0}
            quality={85}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Modern gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/60 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10 pointer-events-none" />

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-start justify-center pt-24 z-40 pointer-events-none">
        <div
          className={`text-center px-6 max-w-6xl transition-all duration-500 h-[60%] transform ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold text-gray-400  leading-tight pointer-events-auto">
            <span className="bg-gradient-to-r from-white via-blue-100 to-green-100 bg-clip-text text-transparent">
              {images[currentIndex].title}
            </span>
          </h1>
          <p className="text-lg md:text-2xl lg:text-3xl text-white/95 mb-6 font-light leading-relaxed pointer-events-auto">
            {images[currentIndex].subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pointer-events-auto">
            <Link
              href="/destinations"
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl relative z-30"
            >
              <span className="flex items-center gap-2">
                {t('exploreButton')}
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>

            <Link
              href="/build-your-vacation"
              className="px-8 py-4 border-2 border-white/30 hover:border-white/60 text-white font-semibold rounded-full transition-all duration-300 backdrop-blur-sm hover:bg-white/10 relative z-30"
            >
              {t('learnMore')}
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Controls (no eventos en el contenedor) */}
      <div className="absolute inset-0 flex items-center justify-between px-0.5 md:px-6 z-40 pointer-events-none">
        <button
          onClick={prevSlide}
          className="group p-1 rounded-full bg-white/5 hover:bg-white/15 transition-all duration-300 backdrop-blur-md border border-white/15 hover:border-white/30 pointer-events-auto"
          aria-label="Previous image"
        >
          <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="group p-1 rounded-full bg-white/5 hover:bg-white/15 transition-all duration-300 backdrop-blur-md border border-white/15 hover:border-white/30 pointer-events-auto"
          aria-label="Next image"
        >
          <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Modern Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-40 pointer-events-auto">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex ? 'w-12 h-3 bg-white shadow-lg' : 'w-3 h-3 bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Play/Pause Button */}
      <div className="absolute top-14 sm:top-20 right-3 z-40 pointer-events-auto">
        <button
          onClick={togglePlayPause}
          className="group p-1 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 backdrop-blur-md border border-white/10 hover:border-white/30"
          aria-label={isPaused ? 'Play slideshow' : 'Pause slideshow'}
        >
          {isPaused ? (
            <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          )}
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-14 left-8 animate-bounce z-30 pointer-events-none">
        <div className="flex flex-col items-center text-white/70">
          <span className="text-sm font-light mb-2">{t('scrollDown')}</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
