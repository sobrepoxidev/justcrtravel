import Navbar from "@/components/general/NavBar";
import Footer from "@/components/general/Footer";
import Link from "next/link";

export default function Business() {
  // Tu segunda imagen, la de las mesas
  const imgsrc = "/business/mesas.jpg";

  return (
    <main className="relative min-h-screen">
      <Navbar />

      <div className="max-w-5xl mx-auto pt-36 px-4">


        {/* Sección con texto + imagen */}
        <div className="flex flex-col md:flex-row items-start gap-6 mb-12">
          {/* Texto en la mitad izquierda (en pantallas medianas o +) */}
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold text-start mb-4">BUSINESS</h1>
            <p className="mb-4">
              FOR YOUR COMPANIES WE OFFER YOU THE BEST LOCATIONS AND
              ACCOMMODATIONS FOR YOUR ORGANIZATION NECESSITIES
              AT THE BEST PRICES ON THE ACTUAL MARKET.
            </p>
            <p className="mb-4">
              Our associates are designed to help actual business people
              work and relax while gaining energy. We guarantee you a
              professional treatment according to your company or
              personal requirements.
            </p>
            <p className="mb-4">
              Quote here your group and event. Choose beach, mountain,
              or city location. Transportation included.
            </p>
            {/* Botones */}
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
    </main>
  );
}
