import Navbar from "@/components/general/NavBar";
import Destinations from "@/components/destinations/destinations";
import Footer from "@/components/general/Footer";
import WhatsAppButton from "@/components/general/WhatsAppButton";

export default function DestinationsPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Destinations />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};