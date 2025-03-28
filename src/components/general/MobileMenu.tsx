"use client";
import { useState } from 'react';
import Link from 'next/link';
import { FaHome } from "react-icons/fa";
import LocaleSwitcher from '../locale/LocaleSwitcher';
import { useTranslations } from 'next-intl';


const MobileMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const t = useTranslations("navbar");
    return (
        <div>
            {/* Hamburger button */}
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-950 p-2 focus:outline-none"
                aria-label="Toggle mobile menu"
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {isMenuOpen ? (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    ) : (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    )}
                </svg>
            </button>

            {/* Mobile menu overlay */}
            {isMenuOpen && (
                <div className="fixed top-0 left-0 w-full bg-black/95 z-50 flex flex-col max-w-full overflow-hidden">
                    <div className="flex justify-start pl-1 pt-2">
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="text-white"
                            aria-label="Close mobile menu"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    <div className="flex flex-col items-left mt-1 space-y-2">
                        <div className="flex flex-row items-center justify-center space-x-6 ">
                            <Link
                                href="/"
                                className="text-white hover:text-orange-300 flex  text-xl "
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <FaHome className="mr-1 justify-center text-center mt-1" /> {t("home")}
                            </Link>

                            <LocaleSwitcher />
                        </div>


                        {/* Mobile Tours Section */}
                        <div className="mobile-dropdown w-full text-left ">
                            <div className="text-white hover:text-orange-300 pl-5 text-xl ">
                                {t("tours")}
                            </div>


                            <div className="flex flex-col items-left pl-8  text-gray-300 text-lg">
                                <Link
                                    href="/adventure"
                                    className="hover:text-orange-300 py-0"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {t("adventure")}
                                </Link>
                                <Link
                                    href="/cultural"
                                    className="hover:text-orange-300 py-0"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {t("cultural")}
                                </Link>
                                <Link
                                    href="/marine"
                                    className="hover:text-orange-300 py-0"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {t("marine")}
                                </Link>
                            </div>
                        </div>

                        <Link
                            href="/destinations"
                            className="text-white hover:text-orange-300 pl-5 text-start text-xl"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {t("destinations")}
                        </Link>

                        {/* Mobile Services Section */}
                        <div className="mobile-dropdown w-full text-left">
                            <div
                                className="text-white hover:text-orange-300  pl-5 text-xl"
                            >
                                {t("services")}
                            </div>
                            <div className="flex flex-col items-left pl-8 text-gray-300 text-lg">
                                <Link
                                    href="/rentals"
                                    className="hover:text-orange-300"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {t("rentals")}
                                </Link>
                                <Link
                                    href="/transportation"
                                    className="hover:text-orange-300"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {t("transportation")}
                                </Link>
                                <Link
                                    href="/business"
                                    className="hover:text-orange-300"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {t("business")}
                                </Link>
                                <Link
                                    href="/others-services"
                                    className="hover:text-orange-300"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {t("otherServices")}
                                </Link>
                            </div>
                        </div>

                        <Link
                            href="/about-us"
                            className="text-white hover:text-orange-300 pl-5  text-xl"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {t("about")}
                        </Link>

                        <Link
                            href="/payments"
                            className="text-white hover:text-orange-300 pl-5  text-xl"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {t("payments")}
                        </Link>

                        <Link
                            href="/contact"
                            className="text-white hover:text-orange-300 pl-5 pb-9 text-xl"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {t("contact")}
                        </Link>

                    </div>
                </div>
            )}
        </div>
    );
};

export default MobileMenu;