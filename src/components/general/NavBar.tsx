// components/Navbar.tsx
import Link from 'next/link';
import Image from 'next/image';
import { FaHome } from "react-icons/fa";
import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';
import LocaleSwitcher from '../locale/LocaleSwitcher';

// Dynamically import client components with no SSR
const ToursDropdown = dynamic(() => import('./ToursDropdow'));
const ServicesDropdown = dynamic(() => import('./ServicesDropdown'));
const MobileMenu = dynamic(() => import('./MobileMenu'));

const Navbar = () => {
  const t = useTranslations("navbar");

  return (
    <nav className="absolute w-full h-28 sm:h-36 z-10 bg-black/45 border-b border-orange-400">
      <div className="mx-auto sm:px-10 flex items-center ">
        <Link href="/" className="flex mt-0">
          <div className="relative">
            <Image
              src="/home/logo-just-costarica-travel.webp"
              alt="Just Costa Rica Travel"
              width={200}
              height={200}
              className="rounded-full sm:w-[170px] sm:h-[140px] mt-0"
              priority
            
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-row items-center justify-center w-full space-x-1 ">
          <Link href="/" className="text-white hover:text-orange-300 px-3 flex items-center gap-x-1">
            <FaHome />{t("home")}
          </Link>
          <ToursDropdown />
          <Link href="/en/destinations" className="text-white hover:text-orange-300 px-3">
            {t("destinations")}
          </Link>
          <ServicesDropdown />
          <Link href="/en/about-us" className="text-white hover:text-orange-300 px-3">
            {t("about")}
          </Link>
          <Link href="/en/payments" className="text-white hover:text-orange-300 px-3">
            {t("payments")}
          </Link>
          <Link href="/en/contact" className="text-white hover:text-orange-300 px-3">
            {t("contact")}
          </Link>
          <LocaleSwitcher />
        </div>

        {/* Social Media Icons - Desktop */}
        <div className="flex flex-row sm:items-center space-x-2 text-white ">
          {/* <Link href="/search" aria-label="Search">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </Link> */}
          
          <Link href="https://www.facebook.com/justcostaricatravel" aria-label="Facebook" target="_blank">
            <svg className="w-5 h-5 mx-1.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9 21.58 18.04 20.39 19.63 18.64C21.22 16.89 22.17 14.66 22.17 12.36C22.17 6.83 17.67 2.34 12.17 2.34L12 2.04Z" />
            </svg>
          </Link>
          <Link href="https://www.instagram.com/just_c.r_travel_com/" aria-label="Instagram" target="_blank">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.16C15.2 2.16 15.58 2.18 16.88 2.24C18.06 2.3 18.76 2.5 19.2 2.68C19.8 2.9 20.24 3.18 20.68 3.62C21.12 4.06 21.4 4.5 21.62 5.1C21.8 5.54 22 6.24 22.06 7.42C22.12 8.72 22.14 9.1 22.14 12.3C22.14 15.5 22.12 15.88 22.06 17.18C22 18.36 21.8 19.06 21.62 19.5C21.4 20.1 21.12 20.54 20.68 20.98C20.24 21.42 19.8 21.7 19.2 21.92C18.76 22.1 18.06 22.3 16.88 22.36C15.58 22.42 15.2 22.44 12 22.44C8.8 22.44 8.42 22.42 7.12 22.36C5.94 22.3 5.24 22.1 4.8 21.92C4.2 21.7 3.76 21.42 3.32 20.98C2.88 20.54 2.6 20.1 2.38 19.5C2.2 19.06 2 18.36 1.94 17.18C1.88 15.88 1.86 15.5 1.86 12.3C1.86 9.1 1.88 8.72 1.94 7.42C2 6.24 2.2 5.54 2.38 5.1C2.6 4.5 2.88 4.06 3.32 3.62C3.76 3.18 4.2 2.9 4.8 2.68C5.24 2.5 5.94 2.3 7.12 2.24C8.42 2.18 8.8 2.16 12 2.16ZM12 0C8.74 0 8.33 0.02 7.0 0.08C5.68 0.14 4.82 0.35 4.06 0.65C3.28 0.97 2.62 1.38 1.96 2.04C1.3 2.7 0.89 3.36 0.57 4.14C0.27 4.9 0.06 5.76 0 7.08C-0.06 8.42 -0.08 8.82 -0.08 12.08C-0.08 15.34 -0.06 15.74 0 17.08C0.06 18.4 0.27 19.26 0.57 20.02C0.89 20.8 1.3 21.46 1.96 22.12C2.62 22.78 3.28 23.19 4.06 23.51C4.82 23.81 5.68 24.02 7.0 24.08C8.33 24.14 8.74 24.16 12 24.16C15.26 24.16 15.67 24.14 17 24.08C18.32 24.02 19.18 23.81 19.94 23.51C20.72 23.19 21.38 22.78 22.04 22.12C22.7 21.46 23.11 20.8 23.43 20.02C23.73 19.26 23.94 18.4 24 17.08C24.06 15.74 24.08 15.34 24.08 12.08C24.08 8.82 24.06 8.42 24 7.08C23.94 5.76 23.73 4.9 23.43 4.14C23.11 3.36 22.7 2.7 22.04 2.04C21.38 1.38 20.72 0.97 19.94 0.65C19.18 0.35 18.32 0.14 17 0.08C15.67 0.02 15.26 0 12 0Z" />
              <path d="M12 5.84C8.6 5.84 5.84 8.6 5.84 12C5.84 15.4 8.6 18.16 12 18.16C15.4 18.16 18.16 15.4 18.16 12C18.16 8.6 15.4 5.84 12 5.84ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16Z" />
              <path d="M18.4 5.6C18.4 6.37 17.77 7 17 7C16.23 7 15.6 6.37 15.6 5.6C15.6 4.83 16.23 4.2 17 4.2C17.77 4.2 18.4 4.83 18.4 5.6Z" />
            </svg>
          </Link>
          <Link href="https://www.x.com" aria-label="Twitter/X" target="_blank">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.901 1.153h3.68l-8.04 9.557L24 22.846h-7.406L10.255 14.87 3.056 22.846H-.619l8.675-9.88L0 1.153h7.594l4.922 6.509 5.385-6.509zm-1.253 17.14h2.034L5.523 3.251H3.344l14.304 15.042z" />
            </svg>
          </Link>
          <Link href="https://www.tiktok.com" aria-label="TikTok" target="_blank">
            <svg className="w-5 h-5 " fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.667 1.333h-3.06v13.12c0 1.92-1.56 3.48-3.48 3.48a3.487 3.487 0 0 1-3.48-3.48 3.487 3.487 0 0 1 3.48-3.48v-3.08a6.56 6.56 0 0 0-6.56 6.56A6.56 6.56 0 0 0 10.127 21c3.62 0 6.54-2.92 6.54-6.54V7.947a8.44 8.44 0 0 0 5.666 2.08v-3.08a5.387 5.387 0 0 1-5.666-5.614Z" />
            </svg>
          </Link>
          <LocaleSwitcher />

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