"use client";
import Navbar from "@/components/general/NavBar";
import Footer from "@/components/general/Footer";
import TravelPackButton from "@/components/payments/TravelPackButton";
import AnimatedBlobShape from '@/components/payments/BlobShape';
import WhatsAppButton from "@/components/general/WhatsAppButton";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Payments() {
  const t = useTranslations("payments");

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white min-h-screen">
      <Navbar />
      <div className="container max-w-6xl mx-auto px-4 pt-36 pb-16">
        {/* Header Section with Blob and Text */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 items-center mb-16 space-y-8 md:space-y-0 md:space-x-12"
        >
          <div className="flex justify-center">
            <AnimatedBlobShape />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
              {t("title")}
              <span className="block text-xl md:text-2xl text-gray-600 mt-3 font-normal">
                {t("subtitle")}
              </span>
            </h2>
          </div>
        </motion.div>

        {/* Travel Packs Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center"
        >
          <TravelPackButton color="#00d4ff" amount={50} />
          <TravelPackButton color="#57ff00" amount={100} />
          <TravelPackButton color="#ffc400" amount={500} />
        </motion.div>

        {/* Additional Information Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            {t("help.title")}
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t("help.description")}
          </p>
        </motion.div>
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
