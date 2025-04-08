'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const images = [
  '/home/carrucel1.webp',
  '/home/carrucel2.webp',
  '/home/carrucel3.webp',
  '/home/carrucel4.webp',
  '/home/carrucel5.webp',
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Cada vez que currentIndex o isPaused cambie,
  // este efecto limpiará el intervalo anterior y creará uno nuevo.
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (!isPaused) {
      timer = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [currentIndex, isPaused]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  return (
    <div className="relative h-screen overflow-hidden group">
      <div className="absolute inset-0">
      {images.map((src, index) => (
        <div
        key={index}
        className={`
          absolute inset-0 transition-opacity duration-1000 
          ${index === currentIndex ? 'opacity-100 z-0' : 'opacity-0 z-0'}
        `}
        >
        <Image
          src={src}
          alt={`Slide ${index + 1}`}
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority={index === 0}
          quality={90}
        />
        </div>
      ))}
      
      {/* Flecha mejorada y responsiva */}
      <div className="absolute bottom-16 sm:bottom-10 left-1/2 transform -translate-x-1/2 flex justify-center z-10">
        <svg className="w-8 h-8 sm:w-10 sm:h-10 animate-bounce text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
      </div>

      {/* Indicadores de diapositivas */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
      {images.map((_, index) => (
        <button
        key={index}
        onClick={() => setCurrentIndex(index)}
        className={`w-2.5 h-2.5 rounded-full transition-all ${
          index === currentIndex 
          ? 'bg-white w-6' 
          : 'bg-white/60 hover:bg-white/80'
        }`}
        aria-label={`Go to slide ${index + 1}`}
        />
      ))}
      </div>

      {/* Controles del carrusel */}
      <div className="absolute inset-0 flex items-center justify-between px-2 sm:px-4">
      {/* Botón Previous */}
      <button
        onClick={goToPrevious}
        className="p-1 sm:p-2 rounded-full bg-black/30 text-white hover:bg-black/50 focus:bg-black/50 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none"
        aria-label="Previous slide"
      >
        <svg
        xmlns="http://www.w3.org/2000/svg" fill="none"
        viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
        className="w-6 h-6 sm:w-8 sm:h-8"
        >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      {/* Botón Next */}
      <button
        onClick={goToNext}
        className="p-1 sm:p-2 rounded-full bg-black/30 text-white hover:bg-black/50 focus:bg-black/50 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none"
        aria-label="Next slide"
      >
        <svg
        xmlns="http://www.w3.org/2000/svg" fill="none"
        viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
        className="w-6 h-6 sm:w-8 sm:h-8"
        >
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
      </div>

      {/* Botón Play/Pause */}
      <button
      onClick={togglePause}
      className="absolute bottom-16 right-4 sm:bottom-14 sm:right-6 p-1.5 sm:p-2 rounded-full bg-black/30 text-white hover:bg-black/50 focus:bg-black/50 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none"
      aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
      >
      {isPaused ? (
        <svg
        xmlns="http://www.w3.org/2000/svg" fill="none"
        viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
        className="w-6 h-6 sm:w-7 sm:h-7"
        >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347c-.75.412-1.667-.13-1.667-.986V5.653z" />
        </svg>
      ) : (
        <svg
        xmlns="http://www.w3.org/2000/svg" fill="none"
        viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
        className="w-6 h-6 sm:w-7 sm:h-7"
        >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
        </svg>
      )}
      </button>
    </div>
  );
};

export default Hero;
