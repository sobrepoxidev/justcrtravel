"use client";
import { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function ServicesDropdown() {
    const t = useTranslations("navbar");
    const [isToursOpen, setIsToursOpen] = useState(false);

    const handleToursClick = () => {
        setIsToursOpen(!isToursOpen);
    };

    return (
        <div className="relative">
            <button
                onClick={handleToursClick}
                className="text-white hover:text-orange-300 px-3 py-2 flex items-center"
            >
                {t("services")}
                {isToursOpen ? (
                    <span className="ml-1">▲</span>
                ) : (
                    <span className="ml-1">▼</span>
                )}
            </button>
            {isToursOpen && (
                <div className="absolute left-0 top-full mt-1 w-32 bg-black text-white shadow-lg rounded">
                    <Link
                        href="/en/rentals"
                        className="block px-3 py-2 hover:bg-gray-700"
                        onClick={() => setIsToursOpen(false)}
                    >
                        {t("rentals")}
                    </Link>
                    <Link
                        href="/en//transportation"
                        className="block px-3 py-2 hover:bg-gray-700"
                        onClick={() => setIsToursOpen(false)}
                    >
                        {t("transportation")}
                    </Link>
                    <Link
                        href="/en/business"
                        className="block px-3 py-2 hover:bg-gray-700"
                        onClick={() => setIsToursOpen(false)}
                    >
                        {t("business")}
                    </Link>
                    <Link
                        href="/en/other-services"
                        className="block px-3 py-2 hover:bg-gray-700"
                        onClick={() => setIsToursOpen(false)}
                    >
                        {t("otherServices")}
                    </Link>
                </div>
            )}
        </div>
    );
}
