'use client';

import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useMemo } from 'react';

export default function Destinations() {
    const t = useTranslations('destinations');
    const [openItems, setOpenItems] = useState<Set<string>>(new Set(['arenal']));
    
    const keys = useMemo(() => [
        'arenal',
        'jaco',
        'malpais',
        'manuelAntonio',
        'montezuma',
        'monteverde',
        'osa',
        'papagayo',
        'puertoViejo',
        'samara',
        'tamarindo'
    ], []);

    const locale = useLocale();

    const toggleItem = (key: string) => {
        const newOpenItems = new Set(openItems);
        if (newOpenItems.has(key)) {
            newOpenItems.delete(key);
        } else {
            newOpenItems.add(key);
        }
        setOpenItems(newOpenItems);
    };

    // Handle hash navigation
    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.replace('#', '');
            if (hash && keys.includes(hash)) {
                // Open the corresponding item
                setOpenItems(new Set([hash]));
                
                // Scroll to the element after a short delay to ensure it's rendered
                setTimeout(() => {
                    const element = document.getElementById(hash);
                    if (element) {
                        element.scrollIntoView({ 
                            behavior: 'smooth', 
                            block: 'start',
                            inline: 'nearest'
                        });
                    }
                }, 100);
            }
        };

        // Handle initial hash on component mount
        handleHashChange();

        // Listen for hash changes
        window.addEventListener('hashchange', handleHashChange);
        
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, [keys]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
            <div className="max-w-4xl mx-auto px-4 pt-20 sm:pt-28 pb-8">
                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-8"
                >
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                        {t('title')}
                    </h1>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
                    <p className="text-gray-600 mt-4 text-sm sm:text-base">
                        {locale === 'es' ? 'Descubre los destinos más increíbles de Costa Rica' : 'Discover the most incredible destinations in Costa Rica'}
                    </p>
                </motion.div>

                {/* Destinations Grid */}
                <div className="space-y-4">
                    {keys.map((key, idx) => {
                        const isOpen = openItems.has(key);
                        return (
                            <motion.div
                                key={key}
                                id={key}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.05 }}
                                className="group"
                            >
                                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                                    {/* Header */}
                                    <button
                                        onClick={() => toggleItem(key)}
                                        className="w-full px-4 sm:px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-3 sm:space-x-4">
                                                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r ${isOpen ? 'from-blue-500 to-cyan-500' : 'from-gray-400 to-gray-500'} flex items-center justify-center transition-all duration-300 transform ${isOpen ? 'scale-110' : 'group-hover:scale-105'} flex-shrink-0`}>
                                                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                </div>
                                                <div className="min-w-0 flex-1">
                                                    <h3 className={`text-lg sm:text-xl font-bold transition-colors duration-300 ${isOpen ? 'text-blue-700' : 'text-gray-800 group-hover:text-blue-600'} truncate`}>
                                                        {t(`${key}.title`)}
                                                    </h3>
                                                    <p className="text-gray-600 text-xs sm:text-sm mt-1">
                                                        {isOpen ? (locale === 'es' ? 'Toca para cerrar' : 'Tap to close') : (locale === 'es' ? 'Toca para explorar' : 'Tap to explore')}
                                                    </p>
                                                </div>
                                            </div>
                                            <motion.div
                                                animate={{ rotate: isOpen ? 180 : 0 }}
                                                transition={{ duration: 0.3 }}
                                                className={`w-8 h-8 rounded-full bg-gradient-to-r ${isOpen ? 'from-blue-500 to-cyan-500' : 'from-gray-300 to-gray-400'} flex items-center justify-center transition-all duration-300 flex-shrink-0`}
                                            >
                                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </motion.div>
                                        </div>
                                    </button>

                                    {/* Content */}
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.4, ease: 'easeInOut' }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-4 sm:px-6 pb-6">
                                                    <div className="bg-gradient-to-r from-blue-50/50 to-cyan-50/50 rounded-xl p-3 sm:p-4">
                                                        {/* Image container */}
                                                        <motion.div 
                                                            initial={{ scale: 0.95, opacity: 0 }}
                                                            animate={{ scale: 1, opacity: 1 }}
                                                            transition={{ duration: 0.5, delay: 0.1 }}
                                                            className="relative mb-4 overflow-hidden rounded-lg shadow-md"
                                                        >
                                                            <div className="w-full aspect-[16/9] sm:aspect-[2/1]">
                                                                <Image
                                                                    src={`/${t(`${key}.image`)}`}
                                                                    alt={t(`${key}.title`)}
                                                                    fill
                                                                    className="object-cover transition-transform duration-700 hover:scale-105"
                                                                    priority={idx === 0}
                                                                    quality={85}
                                                                />
                                                            </div>
                                                            {/* Image overlay */}
                                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                                                        </motion.div>
                                                        
                                                        {/* Description */}
                                                        <motion.div
                                                            initial={{ y: 20, opacity: 0 }}
                                                            animate={{ y: 0, opacity: 1 }}
                                                            transition={{ duration: 0.5, delay: 0.2 }}
                                                        >
                                                            <p className="text-gray-700 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                                                                {t(`${key}.description`)}
                                                            </p>
                                                        </motion.div>
                                                        
                                                        {/* WhatsApp Button */}
                                                        <motion.div
                                                            initial={{ y: 20, opacity: 0 }}
                                                            animate={{ y: 0, opacity: 1 }}
                                                            transition={{ duration: 0.5, delay: 0.3 }}
                                                            className="mt-4"
                                                        >
                                                            <a
                                                                href={`https://wa.me/50660252461?text=Hola,%20me%20interesa%20información%20sobre%20${t(`${key}.title`)}`}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="inline-flex items-center px-4 py-2 bg-green-500 hover:bg-green-600 text-white text-sm font-medium rounded-lg transition-colors duration-200"
                                                            >
                                                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                                                                </svg>
                                                                {locale === 'es' ? 'Consultar por WhatsApp' : 'Ask via WhatsApp'}
                                                            </a>
                                                        </motion.div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
