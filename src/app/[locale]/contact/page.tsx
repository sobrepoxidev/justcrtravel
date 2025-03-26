import Navbar from "@/components/general/NavBar";
import Footer from "@/components/general/Footer";
import WhatsAppButton from "@/components/general/WhatsAppButton";
import { FaPhoneSquareAlt, FaStar, FaWhatsapp } from "react-icons/fa";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white min-h-screen">
      <Navbar />
      <div className="container max-w-6xl mx-auto px-4 pt-36 pb-5">
        {/* Header Section */}
        <div className="text-center mb-5">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4 tracking-tight">
            {t("title")}
          </h1>
          <h2 className="text-xl md:text-2xl font-light text-gray-600 max-w-2xl mx-auto">
            {t("subtitle")}
          </h2>
        </div>

        {/* Contact Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-5">
          {/* US/Canada Toll Free */}
          <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="bg-green-500 w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-4 shadow-md">
              <FaPhoneSquareAlt className="text-white w-8 h-8" />
            </div>
            <h3 className="font-bold text-lg text-gray-800 mb-2">{t("usCanada.title")}</h3>
            <p className="text-2xl font-semibold text-blue-600">{t("usCanada.number")}</p>
          </div>

          {/* Costa Rica Local Number */}
          <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="bg-green-500 w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-4 shadow-md">
              <FaPhoneSquareAlt className="text-white w-8 h-8" />
            </div>
            <h3 className="font-bold text-lg text-gray-800 mb-2">{t("costaRica.title")}</h3>
            <p className="text-2xl font-semibold text-blue-600">{t("costaRica.number")}</p>
          </div>

          {/* WhatsApp Contact */}
          <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="bg-green-500 w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-4 shadow-md">
              <FaWhatsapp className="text-white w-8 h-8" />
            </div>
            <h3 className="font-bold text-lg text-gray-800 mb-2">{t("whatsapp.title")}</h3>
            <p className="text-2xl font-semibold text-blue-600">{t("whatsapp.number")}</p>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg max-w-2xl mx-auto">
          <div className="flex items-center mb-4">
            <FaStar className="text-red-500 w-8 h-8 mr-4" />
            <h3 className="text-2xl font-bold text-gray-800">{t("emergency.title")}</h3>
          </div>
          <p className="text-gray-700 text-lg">
            {t("emergency.description")}
            <span className="block text-2xl font-semibold text-red-600 mt-2">
              {t("emergency.number")}
            </span>
          </p>
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
