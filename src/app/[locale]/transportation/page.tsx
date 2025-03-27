import Navbar from "@/components/general/NavBar";
import Footer from "@/components/general/Footer";
import Link from "next/link";
import WhatsAppButton from "@/components/general/WhatsAppButton";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Transportation() {
  const t = useTranslations("transportation");
  const imgsrc = "/transportation/transportation.jpg";

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 pt-20 sm:pt-36 ">
        {/* Sección con texto + imagen */}
        <div className="flex flex-col md:flex-row items-start ga">
          {/* Texto en la mitad izquierda */}
          <div className="md:w-1/2">
            <h1 className="text-3xl sm:text-5xl font-bold mb-2 tracking-tight text-gray-950">
              {t("title")}
            </h1>

            <ul className="list-disc list-inside text-justify whitespace-pre-line text-lg font-thin ml-1">
              {t.raw("services").map((service: string, index: number) => (
                <li key={index}>{service}</li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row justify-center items-center max-md:py-3">
              <Link
                href="/en/contact"
                className="border-2 border-green-400 text-green-400 hover:bg-green-300/20 hover:text-green-500 transition-colors duration-300 px-8 py-3"
              >
                {t("moreInfo")}
              </Link>
            </div>
          </div>

          {/* Imagen en la mitad derecha */}
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
}
