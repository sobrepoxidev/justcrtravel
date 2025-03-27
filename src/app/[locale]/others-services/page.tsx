import Navbar from "@/components/general/NavBar";
import Footer from "@/components/general/Footer";
import Link from "next/link";
import WhatsAppButton from "@/components/general/WhatsAppButton";
import { useTranslations } from 'next-intl';
import Image from "next/image";

export default function OtherServices() {
  const t = useTranslations("otherServices");

  const sections = [
    {
      key: "students",
      imgSrc: "/other-services/other-1.jpg",
    },
    {
      key: "eventPlanning",
      imgSrc: "/other-services/other-2.jpg",
    },
    {
      key: "shopProducts",
      imgSrc: "/other-services/other-31.png",
    },
  ];

  return (
    <main className="relative min-h-screen">

      <Navbar />

      <div className="max-w-6xl flex flex-col mx-auto px-4 pt-20 sm:pt-36 md:space-y-4">
        <div className="w-full h-7 sm:h-12 relative overflow-hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
            className={`absolute bottom-0 w-full h-full `}
          >
            <path
              d="M0,6V0h1000v100L0,6z"
              className={`fill-current text-green-100`}
            ></path>
          </svg>
        </div>
        {sections.map((section, idx) => {
          const rotation = idx % 2 === 1 ? "" : "transform scale-x-[-1]";

          // Alternamos los colores para el triángulo SVG
          const colors = ["text-blue-100", "text-red-100", "text-amber-100", "text-green-100",];
          const fillColorClass = colors[idx % colors.length];
          return (
            <div key={section.key} className="flex flex-col">

              <div className="flex flex-col md:flex-row items-start ga">
                <div className={`flex flex-col md:flex-row items-start md:gap-6 ${idx % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                  <div className="md:w-1/2">
                    <h1 className="text-3xl sm:text-5xl font-bold mb-2 tracking-tight text-gray-950">{t(`${section.key}.title`)}</h1>
                    <p className="text-justify whitespace-pre-line text-base font-thin md:pr-2">{t(`${section.key}.description`)}</p>

                    <div className="flex flex-col sm:flex-row justify-center items-center py-2">
                      <Link href="/en/contact" className="border-2 border-green-400 text-green-400 hover:bg-green-300/20 hover:text-green-500 transition-colors duration-300 px-8 py-3">
                        {t("moreInfo")}
                      </Link>
                    </div>
                  </div>

                  <div className="md:w-1/2 w-full flex flex-col justify-center items-center ">
                    <Image
                      src={section.imgSrc}
                      alt={t(`${section.key}.altImage`)}
                      width={800}
                      height={600}
                      className="w-full h-auto rounded shadow-md"
                      priority
                    />
                  </div>
                </div>
              </div>
              {/* SVG decorador con fondo transparente */}
              <div className="w-full h-7 sm:h-12 relative overflow-hidden mt-3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 1000 100"
                                        preserveAspectRatio="none"
                                        className={`absolute bottom-0 left-0 w-full h-full ${rotation}`}
                                    >
                                        <path
                                            d="M0,6V0h1000v100L0,6z"
                                            className={`fill-current ${fillColorClass}`}
                                        ></path>
                                    </svg>
                                </div>
            </div>
          )
        })
        }

        <Footer />
        <WhatsAppButton />

      </div>
    </main>
  );
}
