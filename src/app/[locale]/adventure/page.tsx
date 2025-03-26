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
        <div>
            <Navbar />
            {/* Contenedor principal */}
            <div className="container max-w-5xl mx-auto pt-36">
                <h1 className="text-5xl font-bold mb-8">ADVENTURE</h1>

                {/* Sección que recorre cada aventura */}
                <div className="w-full max-w-4xl mx-auto px-4 pb-12">
                <div className="w-full h-12 relative overflow-hidden">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 1000 100"
                                        preserveAspectRatio="none"
                                        className={`absolute bottom-0 left-0 w-full h-full `}
                                    >
                                        <path
                                            d="M0,6V0h1000v100L0,6z"
                                            className={`fill-current text-green-100`}
                                        ></path>
                                    </svg>
                                </div>
                    {adventures.map((adventure, index) => {
                        // Alternamos la rotación
                        const rotation = index % 2 === 1 ? "" : "transform scale-x-[-1]";

                        // Alternamos los colores para el triángulo SVG
                        const colors = ["text-blue-100", "text-red-100", "text-amber-100", "text-green-100" ,];
                        const fillColorClass = colors[index % colors.length];

                        return (
                            <div key={t(`${adventure.key}.name`)} className="relative mb-20">
                                <div
                                    className={`flex flex-col md:flex-row items-start mb-14
                                                ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                                >
                                    {/* Imagen */}
                                    <div className="md:w-1/2 mb-4 md:mb-0">
                                        <Image
                                            src={adventure.image}
                                            alt={t(`${adventure.key}.name`)}
                                            width={600}
                                            height={400}
                                            className="w-full h-auto object-cover"
                                        />
                                    </div>

                                    {/* Texto */}
                                    <div className="md:w-1/2 md:px-8">
                                        <h2 className="text-3xl font-extrabold mb-4">{t(`${adventure.key}.name`)}</h2>
                                        <p className="leading-relaxed mb-3"> {t(`${adventure.key}.description`)}</p>

                                        {/* Si existe itemsItems, lo mostramos en una lista */}
                                        {t.raw(`${adventure.key}.items`) && (
                                            <ul className="list-disc list-inside ml-4">
                                                {Array.isArray(t.raw(`${adventure.key}.items`)) && 
                                                  t.raw(`${adventure.key}.items`).map((item: string) => (
                                                    <li key={item}>{item}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>

                                {/* SVG decorador con fondo transparente */}
                                <div className="w-full h-12 relative overflow-hidden">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 1000 100"
                                        preserveAspectRatio="none"
                                        className={`absolute bottom-0 left-0 w-full h-full ${rotation}`}
                                    >
                                        <path
                                            d="M0,6V0h1000v100L0,6z"
                                            className={`fill-current ${fillColorClass}`}
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <Footer />
            <WhatsAppButton />
        </div>
    );
}