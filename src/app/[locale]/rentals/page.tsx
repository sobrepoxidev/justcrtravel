import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/general/NavBar";
import Footer from "@/components/general/Footer";
import WhatsAppButton from "@/components/general/WhatsAppButton";
import { useTranslations } from "next-intl";

export default function Rentals() {
  const t = useTranslations("rentals");
  const imgsrc = "/rentals/rentals.jpg";

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 pt-20 sm:pt-36 ">
      <div className="flex flex-col md:flex-row items-start ga">
          {/* Texto izquierda */}
          <div className="md:w-1/2">
          <h1 className="text-3xl sm:text-5xl font-bold mb-1 tracking-tight text-gray-950">
              {t("subtitle")}
            </h1>
            <p className="text-justify whitespace-pre-line text-base font-thin md:pr-2">{t("description")}</p>
            <p className="text-justify whitespace-pre-line text-sm font-thin md:pr-2">{t("locations")}</p>

            {/* Botón */}
            <div className="flex flex-col sm:flex-row justify-center items-center max-md:py-3 md:py-6">
              <Link
                href="/en/contact"
                className="border-2 border-green-400 text-green-400 hover:bg-green-300/20 hover:text-green-500 transition-colors duration-300 px-8 py-3"
              >
                {t("moreInfo")}
              </Link>
            </div>
          </div>

          {/* Imagen derecha */}
          <div className="md:w-1/2 w-full flex flex-col justify-center items-center">
            <Image
              src={imgsrc}
              alt={t("altImage")}
              width={800}
              height={600}
              className="w-full h-auto rounded shadow-md"
              priority
            />
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </main>
  );

  // return (
  //   <div className="relative flex flex-col ">
  //     <Navbar />
  //     <section className="relative w-full min-h-screen flex items-center justify-center">
  //       {/* Imagen de fondo */}
  //       <div className="absolute inset-0 overflow-hidden">
  //         <Image
  //           src="/rentals/rentals.jpg"
  //           alt={t("title")}
  //           fill
  //           className="object-cover object-center transition-transform duration-[10000ms] ease-in-out scale-105 animate-subtle-zoom "
  //           quality={30}
  //           priority
  //         />
  //       </div>

  //       {/* Capa de gradiente y contenido */}
  //       <div className="absolute bg-gradient-to-b from-blue-50/20 to-black/50 z-10  w-full h-full flex items-center justify-center px-4 py-8">
  //         <div
  //           className="backdrop-blur-sm bg-black/40 rounded-lg p-6 sm:p-10 max-w-4xl text-center"
  //           style={{ boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)" }}
  //         >
  //           <div className="text-xs uppercase tracking-wide font-mono mb-2 text-green-400">
  //             {t("title")}
  //           </div>
  //           <h1 className="text-3xl sm:text-5xl font-bold mb-4 tracking-tight text-white">
  //             {t("subtitle")}
  //           </h1>
  //           <p className="text-base md:text-xl mb-4 md:mb-6 max-w-md drop-shadow-md text-white">
  //             {t("description")}
  //           </p>
  //           <p className="text-sm md:text-base mb-6 text-white text-justify whitespace-pre-line">
  //             {t("locations")}
  //           </p>

  //           {/* Botón de más información */}
  //           <div className="flex justify-center">
  //             <Link
  //               href="/en/contact"
  //               className="inline-block border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white transition-colors duration-300 px-8 py-3 rounded"
  //             >
  //               {t("moreInfo")}
  //             </Link>
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //     <Footer />
  //     <WhatsAppButton />
  //   </div>
  // );
}
