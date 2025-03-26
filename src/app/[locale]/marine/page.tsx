import Image from "next/image";
import Navbar from "@/components/general/NavBar";
import Footer from "@/components/general/Footer";
import WhatsAppButton from "@/components/general/WhatsAppButton";
import { useTranslations } from 'next-intl';

export default function Marine() {
    const t = useTranslations("marine");
    const marines = [
        { key: "diving", image: "/marines/marine-1.jpg" },
        { key: "paddles", image: "/marines/marine-2.jpg" },
        { key: "rafting", image: "/marines/marine-3.jpg" },
        { key: "snorkeling", image: "/marines/marine-4.jpg" },
    ];

    return (
        <div>
            <Navbar />
            <div className="container max-w-5xl mx-auto pt-36">
                <h1 className="text-5xl font-bold mb-8">{t("title")}</h1>

                <div className="w-full max-w-4xl mx-auto px-4 pb-12">
                    <div className="w-full h-12 relative overflow-hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1000 100"
                            preserveAspectRatio="none"
                            className={`absolute bottom-0 left-0 w-full h-full`}
                        >
                            <path
                                d="M0,6V0h1000v100L0,6z"
                                className={`fill-current text-blue-100`}
                            ></path>
                        </svg>
                    </div>
                    {marines.map((adventure, index) => {
                        const rotation = index % 2 === 1 ? "" : "transform scale-x-[-1]";
                        const colors = ["text-fuchsia-100", "text-green-100", "text-amber-100", "text-blue-100"];
                        const fillColorClass = colors[index % colors.length];

                        return (
                            <div key={adventure.key} className="relative mb-20">
                                <div
                                    className={`flex flex-col md:flex-row items-start mb-14
                                                ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                                >
                                    <div className="md:w-1/2 mb-4 md:mb-0">
                                        <Image
                                            src={adventure.image}
                                            alt={t(`${adventure.key}.name`)}
                                            width={600}
                                            height={400}
                                            className="w-full h-auto object-cover"
                                        />
                                    </div>

                                    <div className="md:w-1/2 md:px-8">
                                        <h2 className="text-3xl font-extrabold mb-4">{t(`${adventure.key}.name`)}</h2>
                                        <p className="leading-relaxed mb-3">{t(`${adventure.key}.description`)}</p>
                                    </div>
                                </div>

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
