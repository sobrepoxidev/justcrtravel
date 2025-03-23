import Image from "next/image";
import Navbar from "@/components/general/NavBar";
import About from "@/components/about/About";
import Footer from "@/components/general/Footer";
import WhatsAppButton from "@/components/general/WhatsAppButton";


export default function AboutPage() {
    return (
        <main className="relative min-h-screen">


            <Navbar />
            <About />
            <Footer />
            <WhatsAppButton />

        </main>
    );
}