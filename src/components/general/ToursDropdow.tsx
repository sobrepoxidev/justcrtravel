"use client";
import { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function ToursDropdown() {
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
                {t("tours")}
                {isToursOpen ? (
                <span className="ml-1">▲</span>
                ): (
                    <span className="ml-1">▼</span>
                )}
            </button>
            {isToursOpen && (
                <div className="absolute left-0 top-full mt-1 w-32 bg-black text-white shadow-lg rounded">
                    <Link
                        href="/en/adventure"
                        className="block px-3 py-2 hover:bg-gray-700"
                        onClick={() => setIsToursOpen(false)}
                    >
                        Adventure
                    </Link>
                    <Link
                        href="/en/cultural"
                        className="block px-3 py-2 hover:bg-gray-700"
                        onClick={() => setIsToursOpen(false)}
                    >
                        Cultural
                    </Link>
                    <Link
                        href="/en/marine"
                        className="block px-3 py-2 hover:bg-gray-700"
                        onClick={() => setIsToursOpen(false)}
                    >
                        Marine
                    </Link>
                </div>
            )}
        </div>
    )
}
