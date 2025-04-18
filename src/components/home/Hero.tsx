// Indicates that this component needs to run on the client side (uses React hooks)
'use client';

import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';

// Array of image paths for the carousel slides
const images = [
  '/home/hero/carrucel1Resize.webp',
  '/home/hero/carrucel2Resize.webp',
  '/home/hero/carrucel3Resize.webp',
  '/home/hero/carrucel4Resize.webp',
  '/home/hero/carrucel5Resize.webp',
];

// Constant for the slideshow interval duration in milliseconds
const SLIDESHOW_INTERVAL = 3000; // 3 seconds

/**
 * Hero Component: Renders a full-screen background image carousel
 * with automatic playback, manual navigation, indicators, and pause/play controls.
 */
const Hero = () => {
  // State to track the index of the currently displayed image
  const [currentIndex, setCurrentIndex] = useState(0);
  // State to track whether the automatic slideshow is paused
  const [isPaused, setIsPaused] = useState(false);

  // Effect to handle the automatic slideshow interval
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    // Start the interval only if the slideshow is not paused
    if (!isPaused) {
      timer = setInterval(() => {
        // Update the current index, looping back to 0 from the last image
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, SLIDESHOW_INTERVAL);
    }

    // Cleanup function: Clear the interval when the component unmounts
    // or when the dependencies (isPaused, images.length) change.
    return () => {
      if (timer) clearInterval(timer);
    };
    // Dependencies: The effect should re-run if the paused state changes
    // or if the number of images changes.
  }, [isPaused, images.length]);

  // Memoized callback function to navigate to the previous slide
  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      // If current index is 0, loop to the last image, otherwise decrement
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]); // Depends on the number of images

  // Memoized callback function to navigate to the next slide
  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      // If current index is the last image, loop to 0, otherwise increment
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]); // Depends on the number of images

  // Memoized callback function to toggle the paused state of the slideshow
  const togglePause = useCallback(() => {
    setIsPaused((prev) => !prev);
  }, []); // No dependencies, as setIsPaused is stable

  return (
    // Main container: Relative positioning, full screen height, hides overflow, enables group-hover state
    <div className="relative h-screen overflow-hidden group">
      {/* Image container: Absolutely positioned to fill the parent */}
      <div className="absolute inset-0">
        {/* Map through the images array to render each slide */}
        {images.map((src, index) => (
          <div
            key={index}
            className={`
              absolute inset-0 transition-opacity duration-1000 ease-in-out
              ${/* Control visibility based on the current index */''}
              ${index === currentIndex ? 'opacity-100 z-0' : 'opacity-0 z-0'}
            `}
            // Consider adding aria-hidden={index !== currentIndex} for accessibility
            // if the opacity transition alone isn't sufficient for screen readers.
          >
            <Image
              src={src}
              alt={`Slide ${index + 1}`} // Descriptive alt text
              fill // Makes the image fill the parent div
              sizes="100vw" // Informs Next.js about the image size relative to viewport width
              style={{ objectFit: 'cover', objectPosition: 'center' }} // Ensures image covers the area without distortion
              priority={index === 0} // Prioritize loading the first image
              quality={90} // Set image quality (adjust as needed)
              loading={index === 0 ? 'eager' : 'lazy'} // Eager loading for first image, lazy loading for others
            />
          </div>
        ))}

        {/* Decorative bouncing down arrow indicator */}
        <div className="absolute bottom-16 sm:bottom-10 left-1/2 transform -translate-x-1/2 flex justify-center z-10">
          <svg
            className="w-8 h-8 sm:w-10 sm:h-10 animate-bounce text-white drop-shadow-lg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true" // Hide decorative element from screen readers
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

      {/* Slide Indicators (Dots) */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)} // Go to the clicked slide index
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ease-in-out ${
              // Style the active indicator differently
              index === currentIndex
                ? 'bg-white w-6' // Active indicator is wider
                : 'bg-white/60 hover:bg-white/80' // Inactive indicators
            }`}
            aria-label={`Go to slide ${index + 1}`} // Accessibility label
          />
        ))}
      </div>

      {/* Carousel Controls (Previous/Next Buttons) */}
      {/* Container for controls, appears on hover over the main container */}
      <div className="absolute inset-0 flex items-center justify-between px-2 sm:px-4 z-10">
        {/* Previous Button */}
        <button
          onClick={goToPrevious}
          className="p-1 sm:p-2 rounded-full bg-black/30 text-white hover:bg-black/50 focus:bg-black/50 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none"
          aria-label="Previous slide" // Accessibility label
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 sm:w-8 sm:h-8"
            aria-hidden="true" // Icon is decorative, label is on the button
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        {/* Next Button */}
        <button
          onClick={goToNext}
          className="p-1 sm:p-2 rounded-full bg-black/30 text-white hover:bg-black/50 focus:bg-black/50 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none"
          aria-label="Next slide" // Accessibility label
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 sm:w-8 sm:h-8"
            aria-hidden="true" // Icon is decorative, label is on the button
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>

      {/* Play/Pause Button */}
      {/* Positioned at the bottom right, appears on hover */}
      <button
        onClick={togglePause}
        className="absolute bottom-16 right-4 sm:bottom-14 sm:right-6 p-1.5 sm:p-2 rounded-full bg-black/30 text-white hover:bg-black/50 focus:bg-black/50 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none z-10"
        aria-label={isPaused ? 'Play slideshow' : 'Pause slideshow'} // Dynamic accessibility label
      >
        {/* Conditionally render Play or Pause icon based on isPaused state */}
        {isPaused ? (
          // Play Icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 sm:w-7 sm:h-7"
            aria-hidden="true" // Icon is decorative, label is on the button
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347c-.75.412-1.667-.13-1.667-.986V5.653z"
            />
          </svg>
        ) : (
          // Pause Icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 sm:w-7 sm:h-7"
            aria-hidden="true" // Icon is decorative, label is on the button
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 5.25v13.5m-7.5-13.5v13.5"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default Hero;