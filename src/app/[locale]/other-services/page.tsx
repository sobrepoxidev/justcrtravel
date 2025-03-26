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
      <div className="relative z-10">
        <Navbar />

        <div className="flex flex-col pt-36">
        {sections.map((section, idx) => (
          <div key={section.key} className="max-w-5xl mx-auto px-4 mb-20 ">
            <div className={`flex flex-col md:flex-row items-start gap-6 ${idx % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
              <div className="md:w-1/2">
                <h1 className="text-5xl font-bold text-start mb-4">{t(`${section.key}.title`)}</h1>
                <p className="mb-4 whitespace-pre-line">{t(`${section.key}.description`)}</p>

                <div className="flex gap-5 justify-center items-center">
                  <Link href="/en/contact" className="border-2 border-green-400 text-green-400 hover:bg-green-300/20 hover:text-green-500 transition px-8 py-3">
                    {t("moreInfo")}
                  </Link>
                </div>
              </div>

              <div className="md:w-1/2">
                <Image
                  src={section.imgSrc}
                  alt={t(`${section.key}.altImage`)}
                  width={800}
                  height={600}
                  className="w-full h-auto rounded"
                  priority
                />
              </div>
            </div>
          </div>
        ))}

        <Footer />
        <WhatsAppButton />
      </div>
        </div>
    </main>
  );
}
