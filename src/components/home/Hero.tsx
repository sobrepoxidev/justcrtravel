'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const images = [
  '/home/carrucel1.jpg',
  '/home/carrucel2.jpg',
  '/home/carrucel3.jpg',
  '/home/carrucel4.jpg',
  '/home/carrucel5.jpg',
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
    <div className="relative h-screen group">
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <div
            key={index}
            className={`
              absolute inset-0 transition-opacity duration-700 
              ${index === currentIndex ? 'opacity-100 z-0' : 'opacity-0 z-0'}
            `}
          >
            <Image
              src={src}
              alt={`Slide ${index}`}
              fill
              style={{ objectFit: 'cover' }}
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Controles del carrusel */}
      <div className="absolute inset-0 flex items-center justify-between p-4">
        {/* Botón Previous */}
        <button
          onClick={goToPrevious}
          className="p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-all opacity-0 group-hover:opacity-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
            className="w-9 h-9"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* Botón Next */}
        <button
          onClick={goToNext}
          className="p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-all opacity-0 group-hover:opacity-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
            className="w-9 h-9"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      {/* Botón Play/Pause */}
      <button
        onClick={togglePause}
        className="absolute bottom-20 right-6 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-all opacity-0 group-hover:opacity-100"
      >
        {isPaused ? (
          <svg
            xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
            className="w-9 h-9"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347c-.75.412-1.667-.13-1.667-.986V5.653z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
            className="w-9 h-9"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default Hero;
