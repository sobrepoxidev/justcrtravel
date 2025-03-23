"use client";
import { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function ServicesDropdown() {
    const t = useTranslations("navbar");
    // Estado para manejar el menú de "Tours"
  const [isToursOpen, setIsToursOpen] = useState(false);

  // Maneja el click en el botón "Tours"
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
                ): (
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
                        Rentals
                    </Link>
                    <Link
                        href="/es/tours/cultural"
                        className="block px-3 py-2 hover:bg-gray-700"
                        onClick={() => setIsToursOpen(false)}
                    >
                        Transformation
                    </Link>
                    <Link
                        href="/es/tours/marine"
                        className="block px-3 py-2 hover:bg-gray-700"
                        onClick={() => setIsToursOpen(false)}
                    >
                        Business
                    </Link>
                    <Link
                        href="/es/tours/marine"
                        className="block px-3 py-2 hover:bg-gray-700"
                        onClick={() => setIsToursOpen(false)}
                    >
                        Other Services
                    </Link>
                </div>
            )}
        </div>
    )
}
