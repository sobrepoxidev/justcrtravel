import Navbar from "@/components/general/NavBar";
import Footer from "@/components/general/Footer";
// Importamos íconos (si usas Heroicons):

import { FaPhoneSquareAlt, FaStar  } from "react-icons/fa";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div className="container max-w-5xl mx-auto pt-36">
        {/* Cabecera */}
        <h1 className="text-5xl font-bold text-start">CONTACT</h1>
        <h2 className="text-xl font-semibold text-center mt-5">
          WE ARE HAPPY TO SERVE YOU
        </h2>

        {/* Sección de teléfonos */}
        <div className="flex flex-col items-center justify-center mt-8 space-y-6 sm:flex-row sm:space-y-0 sm:space-x-12">
          {/* Columna 1 */}
          <div className="flex flex-col items-center">
            <div className="bg-green-500 w-12 h-12 flex items-center justify-center rounded">
              <FaPhoneSquareAlt className="text-white w-6 h-6" />
            </div>
            <p className="font-bold mt-2">US/Canada Toll Free:</p>
            <p className="text-blue-600 text-xl">866-319-6020</p>
          </div>

          {/* Columna 2 */}
          <div className="flex flex-col items-center">
            <div className="bg-green-500 w-12 h-12 flex items-center justify-center rounded">
              <FaPhoneSquareAlt className="text-white w-6 h-6" />
            </div>
            <p className="font-bold mt-2">Costa Rica:</p>
            <p className="text-blue-600 text-xl">(506) 40015425</p>
          </div>

          {/* Columna 3 */}
          <div className="flex flex-col items-center">
            <div className="bg-green-500 w-12 h-12 flex items-center justify-center rounded">
              <FaStar className="text-white w-6 h-6" />
            </div>
            <p className="font-bold mt-2">EMERGENCY CALLS:</p>
            <p className="text-blue-600 text-xl">(506) 72520958</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}