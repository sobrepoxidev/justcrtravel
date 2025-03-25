"use client"
import Navbar from "@/components/general/NavBar";
import Footer from "@/components/general/Footer";
import TravelPackButton from "@/components/payments/TravelPackButton";
import AnimatedBlobShape from '@/components/payments/BlobShape';




export default function Payments() {

  return (
    <div>
      <Navbar />
      <div className="container max-w-5xl mx-auto pt-36 ">
        {/* Sección con blob + texto */}
        <div className="flex flex-row mb-12">
          <div className="basis-1/3 flex items-center justify-center">
            <AnimatedBlobShape />
          </div>
          <h2 className="basis-2/3 pt-2 sm:pl-20 text-2xl font-mono">
            Enjoy your vacation in Costa Rica. Pay directly through Paypal or Card.
          </h2>
        </div>

        {/* Sección con los “travel packs” */}
        <div className="flex flex-row justify-center gap-8">

          <TravelPackButton color="#00d4ff" amount={50}  />
          <TravelPackButton color="#57ff00" amount={100} />
          <TravelPackButton color="#ffc400" amount={500} />
        </div>
      
      </div>
      <Footer />
    </div>
  );
}