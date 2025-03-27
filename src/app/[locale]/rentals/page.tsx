import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/general/NavBar";
import Footer from "@/components/general/Footer";
import WhatsAppButton from "@/components/general/WhatsAppButton";
import { useTranslations } from 'next-intl';
import { FaHome } from 'react-icons/fa';

export default function Rentals() {
    const t = useTranslations("rentals");

    return (
        <div>
            <Navbar />

            <section className="relative w-full min-h-screen flex items-center justify-center">
                <Image
                    src="/rentals/rentals.jpg"
                    alt={t("title")}
                    fill
                    className="object-cover"
                    quality={50}
                    priority
                />

                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />

                <div className="relative max-w-4xl px-4 text-center text-white space-y-4">
                    <div className="inline-flex items-center gap-2 uppercase tracking-wide font-semibold text-green-300">
                        <FaHome className="text-xl" />
                        <span>{t("title")}</span>
                    </div>

                    <h1 className="text-3xl md:text-6xl font-bold drop-shadow-xl">
                        {t("subtitle")}
                    </h1>

                    <p className="text-lg md:text-xl backdrop-blur-sm rounded-md px-3 py-2 bg-black/40">
                        {t("description")}
                    </p>

                    <p className="text-md md:text-lg backdrop-blur-sm rounded-md px-3 py-2 bg-black/30">
                        {t("locations")}
                    </p>

                    <Link
                        href="/contact"
                        className="border-2 border-green-400 text-green-400 hover:bg-green-300/20 hover:text-green-500 transition-colors duration-300 px-8 py-3"
                    >
                        {t("moreInfo")}
                    </Link>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </div>
    );
}
