import Navbar from "@/components/general/NavBar";
import Destinations from "@/components/destinations/destinations";
import Footer from "@/components/general/Footer";
import WhatsAppButton from "@/components/general/WhatsAppButton";

export default function DestinationsPage() {
  return (
    <main className="relative min-h-screen">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      
      {/* Main content */}
      <Destinations />
      
      {/* Footer */}
      <Footer />
      
      {/* WhatsApp Button */}
      <WhatsAppButton />
    </main>
  );
}