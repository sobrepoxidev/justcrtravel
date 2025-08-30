import Image from "next/image";
import Navbar from "@/components/general/NavBar";
import Footer from "@/components/general/Footer";
import WhatsAppButton from "@/components/general/WhatsAppButton";
import { useTranslations } from 'next-intl';

export default function Adventure() {
    const t = useTranslations("adventure");
    const adventures = [
        { key: "atv", image: "/adventures/adventure-1.jpg" },
        { key: "bikeKayak", image: "/adventures/adventure-2.jpg" },
        { key: "bungee", image: "/adventures/adventure-3.jpg" },
        { key: "canopy", image: "/adventures/adventure-4.jpg" },
        { key: "waterfalls", image: "/adventures/adventure-5.jpg" },
        { key: "caves", image: "/adventures/adventure-6.jpg" },
        { key: "bridges", image: "/adventures/adventure-7.jpg" },
        { key: "hiking", image: "/adventures/adventure-8.jpg" },
        { key: "horse", image: "/adventures/adventure-9.jpg" },
        { key: "skyBoard", image: "/adventures/adventure-10.jpg" },
        { key: "skyDiving", image: "/adventures/adventure-11.jpg" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
            <Navbar />
            
            <div className="max-w-4xl mx-auto px-4 pt-20 sm:pt-28 pb-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                        {t("title")}
                    </h1>
                    <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
                </div>

                {/* Adventures Grid */}
                <div className="space-y-6">
                    {adventures.map((adventure, index) => (
                        <div key={adventure.key} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <div className="flex flex-col md:flex-row">
                                {/* Image */}
                                <div className="md:w-2/5 relative overflow-hidden">
                                    <div className="aspect-[4/3] md:aspect-[3/4] relative">
                                        <Image
                                            src={adventure.image}
                                            alt={t(`${adventure.key}.name`)}
                                            fill
                                            className="object-cover transition-transform duration-300 hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="md:w-3/5 p-6 flex flex-col justify-between">
                                    <div>
                                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                                            {t(`${adventure.key}.name`)}
                                        </h2>
                                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                                            {t(`${adventure.key}.description`)}
                                        </p>
                                        
                                        {/* Items list if exists */}
                                        {t.raw(`${adventure.key}.items`) && Array.isArray(t.raw(`${adventure.key}.items`)) && (
                                            <ul className="text-sm text-gray-600 space-y-1 mb-4">
                                                {t.raw(`${adventure.key}.items`).slice(0, 3).map((item: string, idx: number) => (
                                                    <li key={idx} className="flex items-start">
                                                        <span className="text-green-500 mr-2 mt-1">•</span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                    
                                    {/* WhatsApp Button */}
                                    <div className="mt-4">
                                        <a
                                            href="https://wa.me/50660252461?text=Hola,%20me%20interesa%20información%20sobre%20tours%20de%20aventura"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-4 py-2 bg-green-500 hover:bg-green-600 text-white text-sm font-medium rounded-lg transition-colors duration-200"
                                        >
                                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                                            </svg>
                                            Consultar por WhatsApp
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="mt-12 text-center bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-8 text-white">
                    <h3 className="text-xl sm:text-2xl font-bold mb-4">¿Listo para tu próxima aventura?</h3>
                    <p className="text-green-100 mb-6">Contáctanos para planificar tu experiencia perfecta en Costa Rica</p>
                    <a
                        href="https://wa.me/50660252461?text=Hola,%20quiero%20planificar%20mi%20aventura%20en%20Costa%20Rica"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                    >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                        </svg>
                        Planificar mi aventura
                    </a>
                </div>
            </div>
            
            <Footer />
            <WhatsAppButton />
        </div>
    );
}