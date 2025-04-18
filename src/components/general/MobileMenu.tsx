"use client";
import { useState } from 'react';
import Link from 'next/link';
import { FaHome } from "react-icons/fa";
import LocaleSwitcher from '../locale/LocaleSwitcher';
import { useTranslations } from 'next-intl';

/**
 * MobileMenu Component
 * 
 * A responsive mobile navigation menu that includes:
 * - Hamburger toggle button
 * - Fullscreen overlay with navigation links
 * - Home link with icon
 * - Language switcher
 * - Dropdown sections for Tours and Services
 * - Other main navigation links
 * 
 * @returns {JSX.Element} The mobile menu component
 */
const MobileMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const t = useTranslations("navbar");

    // Handler to close menu and navigate
    const handleNavigation = () => setIsMenuOpen(false);

    return (
        <div>
            {/* Hamburger toggle button */}
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-gray-950 focus:outline-none"
                aria-label="Toggle mobile menu"
                aria-expanded={isMenuOpen}
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
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
                <nav 
                    className="fixed top-0 left-0 z-50 flex flex-col w-full max-w-full overflow-hidden bg-black/95"
                    role="navigation"
                    aria-label="Mobile navigation"
                >
                    {/* Close button */}
                    <div className="flex justify-start pl-1 pt-2">
                        <button
                            onClick={handleNavigation}
                            className="text-white"
                            aria-label="Close mobile menu"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
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

                    {/* Mobile menu content */}
                    <div className="flex flex-col items-left mt-1 space-y-2">
                        {/* Home and Language Switcher Row */}
                        <div className="flex flex-row items-center justify-center space-x-6">
                            <Link
                                href="/"
                                className="flex text-xl text-white hover:text-orange-300"
                                onClick={handleNavigation}
                            >
                                <FaHome className="mt-1 mr-1 text-center" aria-hidden="true" /> 
                                <span>{t("home")}</span>
                            </Link>

                            <LocaleSwitcher />
                        </div>

                        {/* Tours Section with Nested Links */}
                        <section className="w-full text-left" aria-labelledby="tours-heading">
                            <h2 id="tours-heading" className="pl-5 text-xl text-white hover:text-orange-300">
                                <Link href="/adventure" onClick={handleNavigation}>
                                    {t("tours")}
                                </Link>
                            </h2>

                            <div className="flex flex-col items-left pl-8 text-lg text-gray-300">
                                <Link
                                    href="/adventure"
                                    className="py-0 hover:text-orange-300"
                                    onClick={handleNavigation}
                                >
                                    {t("adventure")}
                                </Link>
                                <Link
                                    href="/cultural"
                                    className="py-0 hover:text-orange-300"
                                    onClick={handleNavigation}
                                >
                                    {t("cultural")}
                                </Link>
                                <Link
                                    href="/marine"
                                    className="py-0 hover:text-orange-300"
                                    onClick={handleNavigation}
                                >
                                    {t("marine")}
                                </Link>
                            </div>
                        </section>

                        {/* Destinations Link */}
                        <Link
                            href="/destinations"
                            className="pl-5 text-xl text-white text-start hover:text-orange-300"
                            onClick={handleNavigation}
                        >
                            {t("destinations")}
                        </Link>

                        {/* Services Section with Nested Links */}
                        <section className="w-full text-left" aria-labelledby="services-heading">
                            <h2 id="services-heading" className="pl-5 text-xl text-white hover:text-orange-300">
                                <Link href="/rentals" onClick={handleNavigation}>
                                    {t("services")}
                                </Link>
                            </h2>
                            
                            <div className="flex flex-col items-left pl-8 text-lg text-gray-300">
                                <Link
                                    href="/rentals"
                                    className="hover:text-orange-300"
                                    onClick={handleNavigation}
                                >
                                    {t("rentals")}
                                </Link>
                                <Link
                                    href="/transportation"
                                    className="hover:text-orange-300"
                                    onClick={handleNavigation}
                                >
                                    {t("transportation")}
                                </Link>
                                <Link
                                    href="/business"
                                    className="hover:text-orange-300"
                                    onClick={handleNavigation}
                                >
                                    {t("business")}
                                </Link>
                                <Link
                                    href="/others-services"
                                    className="hover:text-orange-300"
                                    onClick={handleNavigation}
                                >
                                    {t("otherServices")}
                                </Link>
                            </div>
                        </section>

                        {/* Other Main Navigation Links */}
                        <Link
                            href="/about-us"
                            className="pl-5 text-xl text-white hover:text-orange-300"
                            onClick={handleNavigation}
                        >
                            {t("about")}
                        </Link>

                        <Link
                            href="/payments"
                            className="pl-5 text-xl text-white hover:text-orange-300"
                            onClick={handleNavigation}
                        >
                            {t("payments")}
                        </Link>

                        <Link
                            href="/contact"
                            className="pl-5 pb-9 text-xl text-white hover:text-orange-300"
                            onClick={handleNavigation}
                        >
                            {t("contact")}
                        </Link>
                    </div>
                </nav>
            )}
        </div>
    );
};

export default MobileMenu;