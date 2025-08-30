"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Hammer, Star } from "lucide-react";
import StructuredData from "@/components/seo/StructuredData";

export default function PaymentsClient() {
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
      type: t("packageTypes.luxury.type"),
      color: "from-purple-500 to-pink-600",
      icon: "✨",
      description: t("packageTypes.luxury.description"),
      examples: [
        t("packageTypes.luxury.example1"),
        t("packageTypes.luxury.example2"),
        t("packageTypes.luxury.example3"),
        t("packageTypes.luxury.example4")
      ],
      key: "luxury"
    }
  ];

  const howItWorksSteps = [
    {
      step: "01",
      title: t("howItWorks.steps.consultation.title"),
      description: t("howItWorks.steps.consultation.description"),
      icon: "💬"
    },
    {
      step: "02",
      title: t("howItWorks.steps.design.title"),
      description: t("howItWorks.steps.design.description"),
      icon: "🎨"
    },
    {
      step: "03",
      title: t("howItWorks.steps.approval.title"),
      description: t("howItWorks.steps.approval.description"),
      icon: "✅"
    },
    {
      step: "04",
      title: t("howItWorks.steps.enjoy.title"),
      description: t("howItWorks.steps.enjoy.description"),
      icon: "🌟"
    }
  ];

  const whatsappMessage = encodeURIComponent(t("whatsappMessage"));

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <StructuredData page="payments" />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-green-100 text-blue-800 text-sm font-medium mb-8"
          >
            <Star className="w-4 h-4 mr-2" />
            {t("badge")}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            {t("title")}{" "}
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              {t("titleHighlight")}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            {t("subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/build-your-vacation"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Hammer className="w-5 h-5 mr-2" />
              {t("designButton")}
            </Link>
            <a
              href={`https://wa.me/50670329090?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 border-2 border-green-600 text-green-600 font-semibold rounded-xl hover:bg-green-600 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              {t("whatsappButton")}
            </a>
          </motion.div>
        </div>
      </section>

      {/* Custom Package Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t("features.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("features.subtitle")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {customPackageFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-green-50 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t("packageTypes.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("packageTypes.subtitle")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {packageTypes.map((pkg, index) => (
              <motion.div
                key={pkg.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className={`h-2 bg-gradient-to-r ${pkg.color}`}></div>
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{pkg.icon}</span>
                    <h3 className="text-2xl font-bold text-gray-900">{pkg.type}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{pkg.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 mb-3">Ejemplos:</h4>
                    {pkg.examples.map((example, exampleIndex) => (
                      <div key={exampleIndex} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mr-3"></span>
                        {example}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t("howItWorks.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("howItWorks.subtitle")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorksSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <div className="text-3xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
                {index < howItWorksSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-green-200 transform -translate-x-8"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t("finalCta.title")}
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              {t("finalCta.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/build-your-vacation"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Hammer className="w-5 h-5 mr-2" />
                {t("finalCta.designButton")}
              </Link>
              <a
                href={`https://wa.me/50670329090?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                {t("finalCta.whatsappButton")}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}