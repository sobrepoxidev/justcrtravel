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
        <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-100/10 to-purple-100/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-1 pt-16 sm:pt-36 pb-20">
                {/* Header section */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    {/* Badge */}
                    <div className="inline-flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-gray-700 text-sm font-medium mb-10 border border-white/40 shadow-sm">
                        <svg className="w-4 h-4 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        {locale === 'es' ? 'Destinos Únicos' : 'Unique Destinations'}
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        <span className="bg-gradient-to-r from-gray-800 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                            {t('title')}
                        </span>
                    </h1>
                </motion.div>

                {/* Destinations accordion */}
                <div className="space-y-4">
                    {keys.map((key, idx) => {
                        const isOpen = openItems.has(key);
                        return (
                            <motion.div
                                key={key}
                                id={key}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="group"
                            >
                                <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/40 overflow-hidden">
                                    {/* Summary/Header */}
                                    <button
                                        onClick={() => toggleItem(key)}
                                        className="w-full px-4 py-4 text-left focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-inset transition-all duration-300"
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-4">
                                                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${isOpen ? 'from-blue-500 to-purple-500' : 'from-gray-400 to-gray-500'} flex items-center justify-center transition-all duration-300 transform ${isOpen ? 'scale-110' : 'group-hover:scale-105'}`}>
                                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h3 className={`text-xl font-bold transition-colors duration-300 ${isOpen ? 'text-blue-700' : 'text-gray-800 group-hover:text-blue-600'}`}>
                                                        {t(`${key}.title`)}
                                                    </h3>
                                                    <p className="text-gray-600 text-sm mt-1">
                                                        {isOpen ? 'Haz clic para cerrar' : 'Haz clic para explorar'}
                                                    </p>
                                                </div>
                                            </div>
                                            <motion.div
                                                animate={{ rotate: isOpen ? 180 : 0 }}
                                                transition={{ duration: 0.3 }}
                                                className={`w-8 h-8 rounded-full bg-gradient-to-r ${isOpen ? 'from-blue-500 to-purple-500' : 'from-gray-300 to-gray-400'} flex items-center justify-center transition-all duration-300`}
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
                                                <div className="px-6 pb-6">
                                                    <div className="bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-xl p-2 border border-white/60">
                                                        {/* Image container */}
                                                        <motion.div 
                                                            initial={{ scale: 0.95, opacity: 0 }}
                                                            animate={{ scale: 1, opacity: 1 }}
                                                            transition={{ duration: 0.5, delay: 0.1 }}
                                                            className="relative mb-6 overflow-hidden rounded-xl shadow-lg"
                                                        >
                                                            <div className="w-full" style={{ aspectRatio: "2.02" }}>
                                                                <Image
                                                                    src={`/${t(`${key}.image`)}`}
                                                                    alt={t(`${key}.title`)}
                                                                    width={1000}
                                                                    height={495}
                                                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                                                    priority={idx === 0}
                                                                    quality={90}
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
                                                            <p className="text-gray-700 text-base leading-relaxed whitespace-pre-line">
                                                                {t(`${key}.description`)}
                                                            </p>
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
