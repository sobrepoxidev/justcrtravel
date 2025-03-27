"use client";
import { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function ToursDropdown() {
    const t = useTranslations("navbar");
    const [isToursOpen, setIsToursOpen] = useState(false);

    const handleToursClick = () => {
        setIsToursOpen(!isToursOpen);
    };

    return (
        <div className="relative">
            <button
                onClick={handleToursClick}
                className="text-gray-950 hover:text-orange-300 px-3 py-2 flex items-center"
            >
                {t("tours")}
                {isToursOpen ? (
                    <span className="ml-1">▲</span>
                ) : (
                    <span className="ml-1">▼</span>
                )}
            </button>
            {isToursOpen && (
                <div className="absolute left-0 top-full mt-1 w-32 bg-black text-white shadow-lg rounded">
                    <Link
                        href="/adventure"
                        className="block px-3 py-2 hover:bg-gray-700"
                        onClick={() => setIsToursOpen(false)}
                    >
                        {t("adventure")}
                    </Link>
                    <Link
                        href="/cultural"
                        className="block px-3 py-2 hover:bg-gray-700"
                        onClick={() => setIsToursOpen(false)}
                    >
                        {t("cultural")}
                    </Link>
                    <Link
                        href="/marine"
                        className="block px-3 py-2 hover:bg-gray-700"
                        onClick={() => setIsToursOpen(false)}
                    >
                        {t("marine")}
                    </Link>
                </div>
            )}
        </div>
    );
}
