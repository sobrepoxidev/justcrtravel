import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { FaHome, FaFacebook, FaInstagram } from "react-icons/fa";
import dynamic from 'next/dynamic';
import LocaleSwitcher from '../locale/LocaleSwitcher';
import { useTranslations } from 'next-intl';

/**
 * Dynamically importing dropdown components to improve initial load performance
 * Components will only be loaded when they are needed
 */
const ToursDropdown = dynamic(() => import('@/components/general/ToursDropdow'));
const ServicesDropdown = dynamic(() => import('@/components/general/ServicesDropdown'));
const MobileMenu = dynamic(() => import('@/components/general/MobileMenu'));

/**
 * Navbar Component
 * 
 * A responsive navigation bar that includes:
 * - Logo/home link
 * - Desktop navigation links with dropdowns
 * - Language switcher
 * - Social media links
 * - Mobile menu for smaller screens
 * 
 * @returns {JSX.Element} The navbar component
 */
const Navbar = () => {
  // Initialize translations for navbar text
  const t = useTranslations("navbar");
  
  return (
    <nav className="absolute flex flex-col w-full max-w-full z-50">
      <div className="flex items-center justify-between h-16 sm:h-20 md:h-24 px-2 sm:px-6 lg:px-8">
        {/* Logo with Home Link */}
        <Link href="/" className="flex items-center pt-1" aria-label="Home">
          <div className="relative w-16 h-16 lg:w-24 lg:h-24">
            <Image
              src="/mainlogonav1.webp"
              alt="Just Costa Rica Travel"
              fill
              sizes="(max-width: 1024px) 4rem, 6rem"
              className="rounded-full object-contain bg-white"
              quality={100}
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation - Hidden on mobile */}
        <div className="hidden lg:flex items-center space-x-3 text-gray-950 font-medium bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-2">
          <Link href="/" className="hover:text-orange-400 flex items-center gap-1">
            <FaHome aria-hidden="true" />
            <span>{t("home")}</span>
          </Link>
          <ToursDropdown />
          <Link href="/destinations" className="hover:text-orange-400">
            {t("destinations")}
          </Link>
          <ServicesDropdown />
          <Link href="/about-us" className="hover:text-orange-400">
            {t("about")}
          </Link>
          <Link href="/payments" className="hover:text-orange-400">
            {t("payments")}
          </Link>
          <Link href="/contact" className="hover:text-orange-400">
            {t("contact")}
          </Link>
        </div>

        {/* Right side utilities: Language switcher, Social icons, Mobile menu */}
        <div className="flex items-center space-x-3 text-black bg-white/80 backdrop-blur-sm rounded-lg shadow-md lg:p-2 max-lg:pl-1">
          {/* Language Switcher */}
          <LocaleSwitcher />
          
          {/* Social Media Icons */}
          <Link 
            href="https://www.facebook.com/justcostaricatravel" 
            aria-label="Facebook" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaFacebook className="w-5 h-5" />
          </Link>
          <Link 
            href="https://www.instagram.com/just_c.r_travel_com/" 
            aria-label="Instagram" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram className="w-5 h-5" />
          </Link>
          
          {/* Mobile Menu - Only visible on mobile */}
          <div className="flex lg:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;