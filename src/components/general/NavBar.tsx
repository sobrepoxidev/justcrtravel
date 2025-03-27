import Link from 'next/link';
import Image from 'next/image';
import { FaHome, FaFacebook, FaInstagram } from "react-icons/fa";
import dynamic from 'next/dynamic';
import LocaleSwitcher from '../locale/LocaleSwitcher';
import { useTranslations } from 'next-intl';

const ToursDropdown = dynamic(() => import('@/components/general/ToursDropdow'));
const ServicesDropdown = dynamic(() => import('@/components/general/ServicesDropdown'));
const MobileMenu = dynamic(() => import('@/components/general/MobileMenu'));

const Navbar = () => {
  const t = useTranslations("navbar");
  return (
    <nav className="absolute flex flex-col max-w-full w-full z-20 bg-gradient-to-b from-green-200  bg-opacity-15 backdrop-opacity-50">
      <div className="px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-20 md:h-24 lg:h-28">
        <Link href="/" className="flex items-center">
          <Image
            src="/home/logo-just-costarica-travel.webp"
            alt="Just Costa Rica Travel"
            width={120}
            height={120}
            className="rounded-full object-contain w-16 sm:w-20 md:w-24 lg:w-28 h-16 sm:h-20 md:h-24 lg:h-28"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-3 text-gray-950 font-medium">
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

        </div>


        {/* Social Media Icons - Desktop */}
        <div className="flex items-center space-x-4 text-black">
          <LocaleSwitcher />
          <Link href="https://www.facebook.com/justcostaricatravel" aria-label="Facebook" target="_blank" className="hover:text-blue-500 transition">
            <FaFacebook className="w-5 h-5" />
          </Link>
          <Link href="https://www.instagram.com/just_c.r_travel_com/" aria-label="Instagram" target="_blank" className="hover:text-pink-500 transition">
            <FaInstagram className="w-5 h-5" />
          </Link>
          {/* <Link href="https://www.x.com" aria-label="Twitter/X" target="_blank" className="hover:text-gray-300 transition">
            <FaTwitter className="w-5 h-5" />
          </Link>
          <Link href="https://www.tiktok.com" aria-label="TikTok" target="_blank" className="hover:text-gray-300 transition">
            <FaTiktok className="w-5 h-5" />
          </Link> */}
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex lg:hidden">
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
