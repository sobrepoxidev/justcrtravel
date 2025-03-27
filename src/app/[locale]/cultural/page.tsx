import Image from "next/image";
import Navbar from "@/components/general/NavBar";
import Footer from "@/components/general/Footer";
import WhatsAppButton from "@/components/general/WhatsAppButton";
import { useTranslations } from 'next-intl';

export default function Cultural() {
    const t = useTranslations("cultural");

    const culturalKeys = ["cities", "nightLife", "parks", "indigenous"];

    const images = [
        "/culturals/cultural-1.jpg",
        "/culturals/cultural-2.jpg",
        "/culturals/cultural-3.jpg",
        "/culturals/cultural-4.jpg"
    ];

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-blue-50 to-white">
            <Navbar />
            <div className="max-w-6xl mx-auto px-4 pt-20 sm:pt-36 pb-0">
                <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4 text-gray-950">{t("title")}</h1>

                <div className="w-full max-w-5xl mx-auto">
                    <div  className="w-full h-7 sm:h-12 relative overflow-hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1000 100"
                            preserveAspectRatio="none"
                            className="absolute bottom-0 left-0 w-full h-full"
                        >
                            <path
                                d="M0,6V0h1000v100L0,6z"
                                className="fill-current text-amber-100"
                            ></path>
                        </svg>
                    </div>
                    {culturalKeys.map((key, index) => {
                        const rotation = index % 2 === 1 ? "" : "transform scale-x-[-1]";
                        const colors = ["text-blue-100", "text-green-100", "text-red-100", "text-amber-100"];
                        const fillColorClass = colors[index % colors.length];
                        const items = t.raw(`${key}.items`);

                        return (
                            <div key={key}  className="relative max-w-full">
                                <div className={`flex flex-col md:flex-row items-start ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                                    <div className="max-w-full w-full md:w-1/2 pt-2 flex flex-col items-center ">
                                        <Image
                                            src={images[index]}
                                            alt={t(`${key}.name`)}
                                            width={600}
                                            height={400}
                                            className="w-full h-auto rounded shadow-m"
                                        />
                                    </div>
                                    <div className="md:w-1/2 md:px-8">
                                        <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight">{t(`${key}.name`)}</h2>
                                        <p className="text-justify whitespace-pre-line text-base font-thin">{t(`${key}.description`)}</p>

                                        {Array.isArray(items) && items.length > 0 && (
                                            <ul className="list-disc list-inside text-justify whitespace-pre-line text-base font-thin ml-1">
                                                {items.map((item: string) => (
                                                    <li key={item}>{item}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>

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