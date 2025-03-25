import Navbar from "@/components/general/NavBar";
import Footer from "@/components/general/Footer";
import Link from "next/link";
import WhatsAppButton from "@/components/general/WhatsAppButton";

export default function Business() {
  // Tu segunda imagen, la de las mesas
  const imgsrc = "/transportation/transportation.jpg";

  return (
    <main className="relative min-h-screen">
      <Navbar />

      <div className="max-w-5xl mx-auto pt-36 px-4">


        {/* Sección con texto + imagen */}
        <div className="flex flex-col md:flex-row items-start gap-6 mb-12">
          {/* Texto en la mitad izquierda (en pantallas medianas o +) */}
          <div className="md:w-1/2">

            <h1 className="text-5xl font-bold text-start mb-4">TRANSPORTATION</h1>

            <ul className="list-disc pl-6 space-y-2">
              <li>Private car with tour guide and driver.</li>
              <li>Rent a car with our high standard associates.</li>
              <li>Family private busses or mini vans.</li>
              <li>Local Flights</li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <Link href="/en/contact" className="border-2 border-green-400 text-green-400 hover:bg-green-300/20 hover:text-green-500 transition-colors duration-300 px-8 py-3">
                More Info
              </Link>
            </div>

          </div>

          {/* Imagen en la mitad derecha (en pantallas medianas o +) */}
          <div className="md:w-1/2">
            <img
              src={imgsrc}
              alt="Business event"
              className="w-full h-auto rounded shadow-md"
            />
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
