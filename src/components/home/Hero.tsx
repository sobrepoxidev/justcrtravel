// components/Hero.tsx
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const images = [
  '/home/carrucel1.jpg',
  '/home/carrucel2.jpg',
  '/home/carrucel3.jpg',
  '/home/carrucel4.jpg',
  '/home/carrucel.jpg',
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

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
    <div className="relative h-screen">
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
            priority={index === 0} // Carga con prioridad la primera
          />
        </div>
      ))}
        {/* <Image
          src="/home/carrucel1.jpg"
          alt="Costa Rica bridge with volcano view"
          fill
          style={{ objectFit: 'cover' }}
          priority
        /> */}
      </div>
      {/* Opcional: Overlay para mejorar la visibilidad del texto */}
      <div className="absolute inset-0"></div>
      {/* Contenido centrado si es necesario */}
    </div>
  );
};

export default Hero;