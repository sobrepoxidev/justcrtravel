import BuildYourVacations from "@/components/build-your-vacations/BuildYour";
import Footer from "@/components/general/Footer";
import Navbar from "@/components/general/NavBar";
import WhatsAppButton from "@/components/general/WhatsAppButton";

export default function BuildYourVacationPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <BuildYourVacations />
      <WhatsAppButton />
      <Footer />
    </main>
  );
}