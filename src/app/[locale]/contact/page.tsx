import Navbar from "@/components/general/NavBar";
import Footer from "@/components/general/Footer";
import WhatsAppButton from "@/components/general/WhatsAppButton";
import { FaPhoneSquareAlt, FaStar, FaWhatsapp } from "react-icons/fa";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 min-h-screen">
      <Navbar />
      <div className="px-4 pt-24 pb-8">
        {/* Header Section - Compact */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-3 tracking-tight">
            {t("title")}
          </h1>
          <p className="text-base sm:text-lg text-gray-600 px-4">
            {t("subtitle")}
          </p>
        </div>

        {/* Contact Cards - Mobile First */}
        <div className="space-y-4 mb-8">
          {/* US/Canada Toll Free */}
          <a href="tel:+18663190020" className="block">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-14 h-14 flex items-center justify-center rounded-xl shadow-md">
                  <FaPhoneSquareAlt className="text-white w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-800">{t("usCanada.title")}</h3>
                  <p className="text-xl font-semibold text-blue-600">{t("usCanada.number")}</p>
                  <p className="text-sm text-gray-500 mt-1">Toca para llamar</p>
                </div>
              </div>
            </div>
          </a>

          {/* Costa Rica Local Number */}
          <a href="tel:+50685850000" className="block">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 w-14 h-14 flex items-center justify-center rounded-xl shadow-md">
                  <FaPhoneSquareAlt className="text-white w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-800">{t("costaRica.title")}</h3>
                  <p className="text-xl font-semibold text-green-600">{t("costaRica.number")}</p>
                  <p className="text-sm text-gray-500 mt-1">Toca para llamar</p>
                </div>
              </div>
            </div>
          </a>

          {/* WhatsApp Contact */}
          <a href="https://wa.me/50660252461" target="_blank" rel="noopener noreferrer" className="block">
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95">
              <div className="flex items-center space-x-4">
                <div className="bg-white w-14 h-14 flex items-center justify-center rounded-xl shadow-md">
                  <FaWhatsapp className="text-green-600 w-7 h-7" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-white">{t("whatsapp.title")}</h3>
                  <p className="text-xl font-semibold text-white">{t("whatsapp.number")}</p>
                  <p className="text-sm text-green-100 mt-1">Toca para chatear</p>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Emergency Contact */}
        <a href="tel:+50672966451" className="block">
          <div className="bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95">
            <div className="flex items-center space-x-4 mb-3">
              <div className="bg-white w-12 h-12 flex items-center justify-center rounded-xl shadow-md">
                <FaStar className="text-red-500 w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">{t("emergency.title")}</h3>
            </div>
            <p className="text-red-100 text-sm mb-3 leading-relaxed">
              {t("emergency.description")}
            </p>
            <p className="text-2xl font-bold text-white">
              {t("emergency.number")}
            </p>
            <p className="text-sm text-red-100 mt-2">Toca para llamar en emergencias</p>
          </div>
        </a>
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
