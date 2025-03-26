import Navbar from "@/components/general/NavBar";
import Footer from "@/components/general/Footer";
import Link from "next/link";
import WhatsAppButton from "@/components/general/WhatsAppButton";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Business() {
  const t = useTranslations("business");
  const imgsrc = "/business/mesas.jpg";

  return (
    <main className="relative min-h-screen">
      <Navbar />

      <div className="max-w-5xl mx-auto pt-36 px-4">
        <div className="flex flex-col md:flex-row items-start gap-6 mb-12">
          {/* Texto izquierda */}
          <div className="md:w-1/2">
            <h1 className=" text-base sm:text-5xl font-bold text-start mb-4">
              {t("title")}
            </h1>
            <p className="mb-4">{t("description1")}</p>
            <p className="mb-4">{t("description2")}</p>
            <p className="mb-4">{t("description3")}</p>

            {/* Botón */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <Link
                href="/en/contact"
                className="border-2 border-green-400 text-green-400 hover:bg-green-300/20 hover:text-green-500 transition-colors duration-300 px-8 py-3"
              >
                {t("moreInfo")}
              </Link>
            </div>
          </div>

          {/* Imagen derecha */}
          <div className="md:w-1/2">
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
