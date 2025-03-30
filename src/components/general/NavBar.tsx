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
    <nav className="absolute flex flex-col max-w-full w-full z-20 ">
      <div className="px-2 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-20 md:h-24">
        <Link href="/" className="flex items-center pt-1">
          <Image
            src="/mainlogonav1.png"
            alt="Just Costa Rica Travel"
            width={60}
            height={60}
            className="rounded-full object-contain w-16 lg:w-24 h-16 lg:h-24 bg-white"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-3 text-gray-950 font-medium bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-2">
          <Link href="/" className="hover:text-orange-400 flex items-center gap-1">
            <FaHome />{t("home")}
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


        {/* Social Media Icons - Desktop */}
        <div className="flex items-center space-x-3 text-black bg-white/80 backdrop-blur-sm rounded-lg shadow-md lg:p-2 max-lg:pl-1">
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
          {/* Mobile Menu Toggle Button */}
        <div className="flex lg:hidden">
          <MobileMenu />
        </div>
        </div>

        
      </div>
    </nav>
  );
};

export default Navbar;
