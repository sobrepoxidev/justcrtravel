"use client";
import Navbar from "@/components/general/NavBar";
import Footer from "@/components/general/Footer";
import WhatsAppButton from "@/components/general/WhatsAppButton";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Hammer, Star } from "lucide-react";

export default function Payments() {
  const t = useTranslations("payments");

  const customPackageFeatures = [
    {
      icon: "🎯",
      title: t("features.items.personalized.title"),
      description: t("features.items.personalized.description")
    },
    {
      icon: "💰",
      title: t("features.items.budget.title"),
      description: t("features.items.budget.description")
    },
    {
      icon: "🏝️",
      title: t("features.items.destinations.title"),
      description: t("features.items.destinations.description")
    },
    {
      icon: "🤝",
      title: t("features.items.support.title"),
      description: t("features.items.support.description")
    }
  ];

  const packageTypes = [
    {
      type: t("packageTypes.adventure.type"),
      color: "from-orange-500 to-red-600",
      icon: "🏞️",
      description: t("packageTypes.adventure.description"),
      examples: [
        t("packageTypes.adventure.example1"),
        t("packageTypes.adventure.example2"),
        t("packageTypes.adventure.example3"),
        t("packageTypes.adventure.example4")
      ],
      key: "adventure"
    },
    {
      type: t("packageTypes.beach.type"),
      color: "from-blue-500 to-cyan-600",
      icon: "🏖️",
      description: t("packageTypes.beach.description"),
      examples: [
        t("packageTypes.beach.example1"),
        t("packageTypes.beach.example2"),
        t("packageTypes.beach.example3"),
        t("packageTypes.beach.example4")
      ],
      key: "beach"
    },
    {
      type: t("packageTypes.culture.type"),
      color: "from-green-500 to-emerald-600",
      icon: "🌿",
      description: t("packageTypes.culture.description"),
      examples: [
        t("packageTypes.culture.example1"),
        t("packageTypes.culture.example2"),
        t("packageTypes.culture.example3"),
        t("packageTypes.culture.example4")
      ],
      key: "culture"
    },
    {
      type: t("packageTypes.business.type"),
      color: "from-purple-500 to-indigo-600",
      icon: "💼",
      description: t("packageTypes.business.description"),
      examples: [
        t("packageTypes.business.example1"),
        t("packageTypes.business.example2"),
        t("packageTypes.business.example3"),
        t("packageTypes.business.example4")
      ],
      key: "business"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-green-50 min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 md:pt-32 pb-8 sm:pb-12">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-green-100 rounded-full text-blue-800 text-sm font-medium mb-6 border border-blue-200">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
            {t("badge")}
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-950 mb-4 sm:mb-6 leading-tight">
            {t("title")}
            <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              {t("titleHighlight")}
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed">
            {t("subtitle")}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <Link
              href="/build-your-vacation"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center"
            >
              <Hammer className="w-5 h-5 mr-2" />
              {t("designButton")}
            </Link>
            
            <a
              href={`https://wa.me/50672966451?text=${encodeURIComponent(t("whatsappMessages.general"))}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold rounded-full transition-all duration-300 flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515"/>
              </svg>
              {t("whatsappButton")}
            </a>
          </div>
         </motion.div>

        {/* Custom Package Features */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16 sm:mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-950 mb-4">
              {t("features.title")}
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              {t("features.subtitle")}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {customPackageFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/40 hover:shadow-xl transition-all duration-300 hover:scale-105 text-center"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-950 mb-3">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Package Types */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16 sm:mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-950 mb-4">
              {t("packageTypes.title")}
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              {t("packageTypes.subtitle")}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {packageTypes.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={`bg-gradient-to-br ${pkg.color} rounded-2xl p-6 sm:p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105`}
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{pkg.icon}</div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-1">{pkg.type}</h3>
                    <p className="text-white/90 text-sm sm:text-base">{pkg.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {pkg.examples.map((example, idx) => (
                    <div key={idx} className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 text-xs sm:text-sm font-medium text-center">
                      {example}
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-4 border-t border-white/20">
                  <a
                    href={`https://wa.me/50672966451?text=Hola, me interesa crear un paquete de ${pkg.type.toLowerCase()} personalizado en Costa Rica`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white font-semibold py-3 px-4 rounded-full transition-all duration-300 flex items-center justify-center text-sm sm:text-base"
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515"/>
                    </svg>
                    Consultar {pkg.type}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* How It Works */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-16 sm:mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-950 mb-4">
              {t("howItWorks.title")}
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              {t("howItWorks.subtitle")}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: t("howItWorks.steps.step1.title"),
                description: t("howItWorks.steps.step1.description"),
                icon: "💭"
              },
              {
                step: "02", 
                title: t("howItWorks.steps.step2.title"),
                description: t("howItWorks.steps.step2.description"),
                icon: "✨"
              },
              {
                step: "03",
                title: t("howItWorks.steps.step3.title"),
                description: t("howItWorks.steps.step3.description"),
                icon: "🌟"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-950 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-center bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 sm:p-12 text-white shadow-2xl"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            {t("finalCta.title")}
          </h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            {t("finalCta.subtitle")}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
            <Link
              href="/build-your-vacation"
              className="w-full sm:w-auto px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 font-semibold rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <Star className="w-5 h-5 mr-2" />
              {t("finalCta.startButton")}
            </Link>
            
            <a
              href={`https://wa.me/50672966451?text=${encodeURIComponent(t("whatsappMessages.expert"))}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold rounded-full transition-all duration-300 flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515"/>
              </svg>
              {t("finalCta.expertButton")}
            </a>
          </div>
        </motion.div>
      </div>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
