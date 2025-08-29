'use client';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaArrowRight } from 'react-icons/fa';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function Footer() {
  const t = useTranslations('footer');

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 px-4 py-12 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl" />
      </div>

      <motion.div 
        className="relative z-10 container mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {/* Logo section */}
          <motion.div 
            className="flex justify-center md:justify-start"
            variants={itemVariants}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
              <Image
                src="/mainlogonav1.png"
                alt="Just Costa Rica Travel"
                width={100}
                height={100}
                className="relative rounded-full bg-white shadow-lg ring-4 ring-white/50 group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
          </motion.div>

          {/* Build your vacation button */}
          <motion.div 
            className="flex justify-center"
            variants={itemVariants}
          >
            <Link
              href="/build-your-vacation"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">{t("buildVacation")}</span>
              <FaArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>

          {/* Contact info */}
          <motion.div 
            className="text-sm text-center md:text-right px-4 space-y-3"
            variants={itemVariants}
          >
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-white/40">
              <p className="max-w-xs mx-auto md:ml-auto md:mr-0 text-gray-700 leading-relaxed">
                {t("rights")} © 2025. {t("builtBy")}{' '}
                <Link
                  href="https://sobrepoxi.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-orange-500 hover:text-orange-600 transition-colors duration-200 hover:underline"
                >
                  SobrePoxi
                </Link>
              </p>
              <div className="mt-4 space-y-2 text-gray-600">
                <p className="max-w-xs mx-auto md:ml-auto md:mr-0">
                  {t("office")}: <a href="tel:+50685850000" className="font-medium text-blue-600 hover:text-blue-700 transition-colors duration-200 hover:underline">(+506) 8585-0000</a>
                </p>
                <p className="max-w-xs mx-auto md:ml-auto md:mr-0">
                  WhatsApp: <a href="https://wa.me/50660252461" className="font-medium text-green-600 hover:text-green-700 transition-colors duration-200 hover:underline">(+506) 6025 2461</a>
                </p>
                <p className="max-w-xs mx-auto md:ml-auto md:mr-0">
                  {t("tollFree")}: <a href="tel:8663196020" className="font-medium text-purple-600 hover:text-purple-700 transition-colors duration-200 hover:underline">866-319-6020</a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social media links */}
        <motion.div 
          className="flex flex-row justify-center mt-12 pt-8 border-t border-white/30 space-x-8"
          variants={itemVariants}
        >
          <Link 
            href="https://www.facebook.com/justcostaricatravel" 
            aria-label="Facebook" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group relative p-3 bg-white/60 backdrop-blur-sm rounded-full shadow-sm border border-white/40 hover:shadow-lg transition-all duration-300 hover:scale-110"
          >
            <div className="absolute inset-0 bg-blue-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <FaFacebook className="relative w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
          </Link>
          <Link 
            href="https://www.instagram.com/just_c.r_travel_com/" 
            aria-label="Instagram" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group relative p-3 bg-white/60 backdrop-blur-sm rounded-full shadow-sm border border-white/40 hover:shadow-lg transition-all duration-300 hover:scale-110"
          >
            <div className="absolute inset-0 bg-pink-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <FaInstagram className="relative w-6 h-6 text-gray-600 group-hover:text-pink-600 transition-colors duration-300" />
          </Link>
        </motion.div>
      </motion.div>
    </footer>
  );
}
