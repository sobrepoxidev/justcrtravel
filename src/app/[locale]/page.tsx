
import Navbar from '@/components/general/NavBar';
import Hero from '@/components/home/Hero';
import BuildVacation from '@/components/home/BuildVacation';
import DestinationGallery from '@/components/home/DestinationGallery';
import ExploreCR from "@/components/home/ExploreCR";
import Specialties from "@/components/home/Specialties";
import GridImage from '@/components/home/GridImage';
import FlightSearch from '@/components/home/FlightSearch';
import Footer from '@/components/general/Footer';
import WhatsAppButton from '@/components/general/WhatsAppButton';

export default function Home() {

  return (
    <main className="relative min-h-screen">
      {/* Background image that covers the entire page */}
      <div
        className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('/home/carrucel1.jpg')",
          backgroundAttachment: "fixed"
        }}
      />

      {/* Content layer that sits on top of the background */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        {/* White divider with explicit height and opacity-100 to ensure it's visible */}
        <div className="py-3 bg-white h-4 w-full opacity-100" />
        <BuildVacation />
        <DestinationGallery />
        <ExploreCR />
        <Specialties />
        <GridImage />
        <FlightSearch />
        <Footer />
        <WhatsAppButton />
      </div>
    </main>
  );
};
