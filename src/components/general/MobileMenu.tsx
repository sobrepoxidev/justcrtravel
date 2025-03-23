"use client";
import { useState } from 'react';
import Link from 'next/link';
import { FaHome, FaSearch } from "react-icons/fa";
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
                className="text-white p-2 focus:outline-none"
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
                <div className="fixed inset-0 bg-black/95 z-50 flex flex-col">
                    <div className="flex justify-start pl-4 pt-4">
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
                            <div className="text-white hover:text-orange-300 pl-24 text-xl ">
                                {t("tours")}
                            </div>


                            <div className="flex flex-col items-left pl-28  text-gray-300 text-lg">
                                <Link
                                    href="/en/adventure"
                                    className="hover:text-orange-300 py-1"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Adventure
                                </Link>
                                <Link
                                    href="/en/cultural"
                                    className="hover:text-orange-300 py-1"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Cultural
                                </Link>
                                <Link
                                    href="/en/marine"
                                    className="hover:text-orange-300 py-1"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Marine
                                </Link>
                            </div>
                        </div>

                        <Link
                            href="/en/destinations"
                            className="text-white hover:text-orange-300 pl-24 text-start text-xl"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {t("destinations")}
                        </Link>

                        {/* Mobile Services Section */}
                        <div className="mobile-dropdown w-full text-left">
                            <div
                                className="text-white hover:text-orange-300  pl-24 text-xl"
                            >
                                {t("services")}
                            </div>
                            <div className="flex flex-col items-left pl-28 text-gray-300 text-lg">
                                <Link
                                    href="/en/rentals"
                                    className="hover:text-orange-300"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Rentals
                                </Link>
                                <Link
                                    href="/en/transformation"
                                    className="hover:text-orange-300"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Transformation
                                </Link>
                                <Link
                                    href="/en/business"
                                    className="hover:text-orange-300"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Business
                                </Link>
                                <Link
                                    href="/en/other-services"
                                    className="hover:text-orange-300"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Other Services
                                </Link>
                            </div>
                        </div>

                        <Link
                            href="/en/about-us"
                            className="text-white hover:text-orange-300 pl-24  text-xl"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {t("about")}
                        </Link>

                        <Link
                            href="/en/payments"
                            className="text-white hover:text-orange-300 pl-24  text-xl"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {t("payments")}
                        </Link>

                        <Link
                            href="/en/contact"
                            className="text-white hover:text-orange-300 pl-24 pb-9 text-xl"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {t("contact")}
                        </Link>

                       

                        {/* Social Icons in Mobile Menu */}
                        <div className="flex flex-row items-center justify-center space-x-6 ">
                            <Link href="/search" aria-label="Search" onClick={() => setIsMenuOpen(false)}>
                                <FaSearch className="w-6 h-6 text-white hover:text-orange-300" />
                            </Link>
                            <Link href="/facebook" aria-label="Facebook" onClick={() => setIsMenuOpen(false)}>
                                <svg className="w-6 h-6 text-white hover:text-orange-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9 21.58 18.04 20.39 19.63 18.64C21.22 16.89 22.17 14.66 22.17 12.36C22.17 6.83 17.67 2.34 12.17 2.34L12 2.04Z" />
                                </svg>
                            </Link>
                            <Link href="/instagram" aria-label="Instagram" onClick={() => setIsMenuOpen(false)}>
                                <svg className="w-6 h-6 text-white hover:text-orange-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2.16C15.2 2.16 15.58 2.18 16.88 2.24C18.06 2.3 18.76 2.5 19.2 2.68C19.8 2.9 20.24 3.18 20.68 3.62C21.12 4.06 21.4 4.5 21.62 5.1C21.8 5.54 22 6.24 22.06 7.42C22.12 8.72 22.14 9.1 22.14 12.3C22.14 15.5 22.12 15.88 22.06 17.18C22 18.36 21.8 19.06 21.62 19.5C21.4 20.1 21.12 20.54 20.68 20.98C20.24 21.42 19.8 21.7 19.2 21.92C18.76 22.1 18.06 22.3 16.88 22.36C15.58 22.42 15.2 22.44 12 22.44C8.8 22.44 8.42 22.42 7.12 22.36C5.94 22.3 5.24 22.1 4.8 21.92C4.2 21.7 3.76 21.42 3.32 20.98C2.88 20.54 2.6 20.1 2.38 19.5C2.2 19.06 2 18.36 1.94 17.18C1.88 15.88 1.86 15.5 1.86 12.3C1.86 9.1 1.88 8.72 1.94 7.42C2 6.24 2.2 5.54 2.38 5.1C2.6 4.5 2.88 4.06 3.32 3.62C3.76 3.18 4.2 2.9 4.8 2.68C5.24 2.5 5.94 2.3 7.12 2.24C8.42 2.18 8.8 2.16 12 2.16ZM12 0C8.74 0 8.33 0.02 7.0 0.08C5.68 0.14 4.82 0.35 4.06 0.65C3.28 0.97 2.62 1.38 1.96 2.04C1.3 2.7 0.89 3.36 0.57 4.14C0.27 4.9 0.06 5.76 0 7.08C-0.06 8.42 -0.08 8.82 -0.08 12.08C-0.08 15.34 -0.06 15.74 0 17.08C0.06 18.4 0.27 19.26 0.57 20.02C0.89 20.8 1.3 21.46 1.96 22.12C2.62 22.78 3.28 23.19 4.06 23.51C4.82 23.81 5.68 24.02 7.0 24.08C8.33 24.14 8.74 24.16 12 24.16C15.26 24.16 15.67 24.14 17 24.08C18.32 24.02 19.18 23.81 19.94 23.51C20.72 23.19 21.38 22.78 22.04 22.12C22.7 21.46 23.11 20.8 23.43 20.02C23.73 19.26 23.94 18.4 24 17.08C24.06 15.74 24.08 15.34 24.08 12.08C24.08 8.82 24.06 8.42 24 7.08C23.94 5.76 23.73 4.9 23.43 4.14C23.11 3.36 22.7 2.7 22.04 2.04C21.38 1.38 20.72 0.97 19.94 0.65C19.18 0.35 18.32 0.14 17 0.08C15.67 0.02 15.26 0 12 0Z" />
                                    <path d="M12 5.84C8.6 5.84 5.84 8.6 5.84 12C5.84 15.4 8.6 18.16 12 18.16C15.4 18.16 18.16 15.4 18.16 12C18.16 8.6 15.4 5.84 12 5.84ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16Z" />
                                    <path d="M18.4 5.6C18.4 6.37 17.77 7 17 7C16.23 7 15.6 6.37 15.6 5.6C15.6 4.83 16.23 4.2 17 4.2C17.77 4.2 18.4 4.83 18.4 5.6Z" />
                                </svg>
                            </Link>
                            <Link href="/twitter" aria-label="Twitter" onClick={() => setIsMenuOpen(false)}>
                                <svg className="w-6 h-6 text-white hover:text-orange-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28 9.09 5.11 7.38 3 4.79C2.63 5.42 2.42 6.16 2.42 6.94C2.42 8.43 3.17 9.75 4.33 10.5C3.62 10.5 2.96 10.3 2.38 10V10.03C2.38 12.11 3.86 13.85 5.82 14.24C5.19 14.41 4.53 14.44 4 14.31C4.5 16.03 6.02 17.26 7.89 17.29C6.37 18.45 4.61 19.13 2.65 19.13C2.3 19.13 1.95 19.11 1.61 19.07C3.5 20.29 5.78 21 8.06 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MobileMenu;