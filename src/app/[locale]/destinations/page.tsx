import Navbar from "@/components/general/NavBar";
import Destinations from "@/components/destinations/destinations";
import Footer from "@/components/general/Footer";

export default function DestinationsPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Destinations />
      <Footer />
    </main>
  );
};