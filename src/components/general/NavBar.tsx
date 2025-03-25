import Link from 'next/link';
import Image from 'next/image';
import { FaHome, FaFacebook, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";
import dynamic from 'next/dynamic';
import LocaleSwitcher from '../locale/LocaleSwitcher';
import { useTranslations } from 'next-intl';

const ToursDropdown = dynamic(() => import('@/components/general/ToursDropdow'));
const ServicesDropdown = dynamic(() => import('@/components/general/ServicesDropdown'));
const MobileMenu = dynamic(() => import('@/components/general/MobileMenu'));

const Navbar = () => {
  const t = useTranslations("navbar");
  return (
    <nav className="absolute w-full z-20 bg-black bg-opacity-60 backdrop-blur-sm border-b border-orange-400">
      <div className="mx-auto px-4 sm:px-8 flex items-center justify-between h-20 sm:h-24">
        <Link href="/" className="flex items-center">
          <Image
            src="/home/logo-just-costarica-travel.webp"
            alt="Just Costa Rica Travel"
            width={120}
            height={120}
            className="rounded-full object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 text-white font-medium">
          <Link href="/" className="hover:text-orange-400 flex items-center gap-1">
            <FaHome />{t("home")}
          </Link>
          <ToursDropdown />
          <Link href="/en/destinations" className="hover:text-orange-400">
          {t("destinations")}
          </Link>
          <ServicesDropdown />
          <Link href="/en/about-us" className="hover:text-orange-400">
          {t("about")}
          </Link>
          <Link href="/en/payments" className="hover:text-orange-400">
          {t("payments")}
          </Link>
          <Link href="/en/contact" className="hover:text-orange-400">
          {t("contact")}
          </Link>
          <LocaleSwitcher />
        </div>

        {/* Social Media Icons - Desktop */}
        <div className="hidden sm:flex items-center space-x-4 text-white">
          <Link href="https://www.facebook.com/justcostaricatravel" aria-label="Facebook" target="_blank" className="hover:text-blue-500 transition">
            <FaFacebook className="w-5 h-5" />
          </Link>
          <Link href="https://www.instagram.com/just_c.r_travel_com/" aria-label="Instagram" target="_blank" className="hover:text-pink-500 transition">
            <FaInstagram className="w-5 h-5" />
          </Link>
          <Link href="https://www.x.com" aria-label="Twitter/X" target="_blank" className="hover:text-gray-300 transition">
            <FaTwitter className="w-5 h-5" />
          </Link>
          <Link href="https://www.tiktok.com" aria-label="TikTok" target="_blank" className="hover:text-gray-300 transition">
            <FaTiktok className="w-5 h-5" />
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex md:hidden">
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
