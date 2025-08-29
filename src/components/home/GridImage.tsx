'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function GridImage() {
  const t = useTranslations('gridImage');

  const images = [
    { 
      src: '/home/thiscr1.jpg', 
      alt: t('image1Alt'),
      title: t('image1Title'),
      description: t('image1Description'),
      gradient: 'from-blue-600/80 to-purple-600/80'
    },
    { 
      src: '/home/thiscr2.jpg', 
      alt: t('image2Alt'),
      title: t('image2Title'),
      description: t('image2Description'),
      gradient: 'from-emerald-600/80 to-teal-600/80'
    },
    { 
      src: '/home/thiscr3.jpg', 
      alt: t('image3Alt'),
      title: t('image3Title'),
      description: t('image3Description'),
      gradient: 'from-orange-600/80 to-red-600/80'
    },
    { 
      src: '/home/thiscr4.jpg', 
      alt: t('image4Alt'),
      title: t('image4Title'),
      description: t('image4Description'),
      gradient: 'from-indigo-600/80 to-blue-600/80'
    },
    { 
      src: '/home/thiscr5.jpg', 
      alt: t('image5Alt'),
      title: t('image5Title'),
      description: t('image5Description'),
      gradient: 'from-pink-600/80 to-rose-600/80'
    },
    { 
      src: '/home/thiscr6.jpg', 
      alt: t('image6Alt'),
      title: t('image6Title'),
      description: t('image6Description'),
      gradient: 'from-cyan-600/80 to-blue-600/80'
    },
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-gray-700 text-sm font-medium mb-6 border border-white/40 shadow-sm">
            <svg className="w-4 h-4 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
            {t('badge')}
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{t('title')}</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {images.map((image, index) => (
            <motion.div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              variants={itemVariants}
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={320}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  quality={85}
                />
                
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${image.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Content overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-bold mb-2">
                    {image.title}
                  </h3>
                  <p className="text-sm opacity-90 leading-relaxed">
                    {image.description}
                  </p>
                </div>
              </div>
              
              {/* Bottom gradient for better text readability */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <span>{t('viewMore')}</span>
            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}