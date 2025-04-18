/**
 * @fileoverview Main page of the JustCR Travel application
 * This file contains the main structure of the home page,
 * including navigation, main sections, and shared components.
 * 
 * @module pages/Home
 * @author [Your name]
 * @version 1.0.0
 */

import Navbar from '@/components/general/NavBar';
import Hero from '@/components/home/Hero';
import Specialties from "@/components/home/Specialties";
import GridImage from '@/components/home/GridImage';
import FlightSearch from '@/components/home/FlightSearch';
import Footer from '@/components/general/Footer';
import WhatsAppButton from '@/components/general/WhatsAppButton';
import dynamic from 'next/dynamic';

const LazyBuildVacation = dynamic(() => import('@/components/home/BuildVacation'), {
 loading: () => <p>Loading...</p>,
});

const LazyDestinationGallery = dynamic(() => import('@/components/home/DestinationGallery'), {
  loading: () => <p>Loading...</p>,
});

const LazyExploreCR = dynamic(() => import('@/components/home/ExploreCR'), {
  loading: () => <p>Loading...</p>,
});


/**
 * Main home page component
 * 
 * @component
 * @returns {JSX.Element} JSX element representing the complete home page
 * 
 * @description
 * This component organizes and renders all the main components of the home page,
 * including the navigation bar, content sections, and footer.
 * 
 * @example
 * // Using the Home component
 * import Home from '@/app/[locale]/page';
 * 
 * // Rendering in the application
 * <Home />
 */
export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Fixed background that covers the entire page */}
      <div
        className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('/home/bg.webp')",
          backgroundAttachment: "fixed"
        }}
      />

      {/* Content layer that sits on top of the background */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        {/* White divider with explicit height and opacity-100 to ensure it's visible */}
        <div className="py-3 bg-white h-4 w-full opacity-100" />
        <LazyBuildVacation />
        <LazyDestinationGallery />
        <LazyExploreCR />
        <Specialties />
        <GridImage />
        <FlightSearch />
        <Footer />
        <WhatsAppButton />
      </div>
    </main>
  );
};