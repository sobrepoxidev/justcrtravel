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
        <div className="relative min-h-screen bg-gradient-to-br from-blue-50 to-white ">

            <Navbar />

            {/* Contenedor principal */}
            <div className="max-w-6xl mx-auto px-4 pt-20 sm:pt-36 pb-0 ">
                <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4 text-gray-950">{t("title")}</h1>

                {/* Sección que recorre cada aventura */}
                <div className="w-full max-w-5xl mx-auto">
                    <div className="w-full h-7 sm:h-12 relative overflow-hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1000 100"
                            preserveAspectRatio="none"
                            className={`absolute bottom-0 w-full h-full `}
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
                        const colors = ["text-blue-100", "text-red-100", "text-amber-100", "text-green-100",];
                        const fillColorClass = colors[index % colors.length];

                        return (
                            <div key={t(`${adventure.key}.name`)} className="relative max-w-full flex flex-col space-y-4">
                                <div
                                    className={`flex flex-col md:flex-row items-start
                                                ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                                >
                                    {/* Imagen */}
                                    <div className="max-w-full w-full md:w-1/2 pt-2 flex flex-col items-center ">
                                        <div className="w-full" style={{ aspectRatio: "1.31" }}>
                                            <Image
                                                src={adventure.image}
                                                alt={t(`${adventure.key}.name`)}
                                                width={570}
                                                height={436}
                                                className="w-full h-auto rounded shadow-md"
                                            />
                                        </div>
                                    </div>

                                    {/* Texto */}
                                    <div className="md:w-1/2 md:px-8">
                                        <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight">{t(`${adventure.key}.name`)}</h2>
                                        <p className="text-justify whitespace-pre-line text-base font-thin"> {t(`${adventure.key}.description`)}</p>

                                        {/* Si existe itemsItems, lo mostramos en una lista */}
                                        {t.raw(`${adventure.key}.items`) && (
                                            <ul className="list-disc list-inside text-justify whitespace-pre-line text-base font-thin ml-1">
                                                {Array.isArray(t.raw(`${adventure.key}.items`)) &&
                                                    t.raw(`${adventure.key}.items`).map((item: string) => (
                                                        <li key={item}>{item}</li>
                                                    ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>

                                {/* SVG decorador con fondo transparente */}
                                <div className="w-full h-7 sm:h-12 relative overflow-hidden">
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