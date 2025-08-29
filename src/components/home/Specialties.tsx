'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const specialtiesKeys = [
  'sports',
  'fishHikeFlySwim',
  'football',
  'surf'
];

const justKeys = [
  'health',
  'beautyWellness',
  'dental',
  'medical'
];

export default function Specialties() {
  const t = useTranslations('specialties');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative overflow-hidden">
      {/* Primera sección - Especialidades deportivas */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-indigo-50/30 to-purple-50/50 relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Imagen principal */}
            <motion.div 
              className="lg:w-2/5"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500" />
                <Image
                  src="/home/mainspeciaist.webp"
                  alt={t("mainImageAlt")}
                  width={500}
                  height={700}
                  className="relative w-full h-auto object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>

            {/* Contenido */}
            <div className="lg:w-3/5 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-gray-700 text-sm font-medium mb-6 border border-white/40 shadow-sm">
                  <svg className="w-4 h-4 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Especialidades Deportivas
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{t("titlePrefix")} </span>
                  <span className="text-gray-800">{t("titleSuffix")}</span>
                </h2>
              </motion.div>

              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {specialtiesKeys.map((key, index) => (
                  <motion.div 
                    key={key} 
                    className="group p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 hover:border-blue-200/50 hover:-translate-y-2"
                    variants={itemVariants}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Image
                          src={`/home/specialtiesicon${specialtiesKeys.indexOf(key)+1}.png`}
                          alt={t(`${key}.name`)}
                          width={32}
                          height={32}
                          className="w-8 h-8 object-contain filter brightness-0 invert"
                          loading="lazy"
                          quality={85}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {t(`${key}.name`)}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {t(`${key}.description`)}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Segunda sección - Servicios de salud */}
      <section className="py-20 px-4 bg-gradient-to-br from-emerald-50 via-teal-50/30 to-cyan-50/50 relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-teal-200/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-gray-700 text-sm font-medium mb-6 border border-white/40 shadow-sm">
              <svg className="w-4 h-4 mr-2 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              Turismo de Salud
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Just Costa Rica Travel </span>
              <span className="text-gray-800">{t("justTitle")}</span>
            </h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {justKeys.map((key, index) => (
              <motion.div 
                key={key} 
                className="group p-8 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 hover:border-emerald-200/50 hover:-translate-y-2"
                variants={itemVariants}
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src={`/home/just${justKeys.indexOf(key)+1}.webp`}
                        alt={t(`${key}.name`)}
                        width={48}
                        height={48}
                        className="w-12 h-12 object-contain filter brightness-0 invert"
                        loading="lazy"
                        quality={85}
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                      {t(`${key}.name`)}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {t(`${key}.description`)}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl lg:text-5xl font-bold text-gray-900">
              <span className="text-gray-700">{t("thisIs")} </span>
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">{t("costaRica")}</span>
            </h3>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
