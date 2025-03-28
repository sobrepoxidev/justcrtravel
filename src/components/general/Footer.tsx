import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaArrowRight } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="bg-white px-4 py-2 sm:py-6 mt-3">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo section */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="/mainlogonav.svg"
              alt="Just Costa Rica Travel"
              width={90}
              height={90}
              className="rounded-full bg-white"
              priority
            />
          </div>

          {/* Build your vacation button */}
          <div className="flex justify-center">
            <Link
              href="/build-your-vacation"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full flex items-center gap-2 transition-transform hover:scale-105"
            >
              {t("buildVacation")} <FaArrowRight />
            </Link>
          </div>

          {/* Contact info */}
          <div className="text-sm font-light text-center md:text-right px-4">
            <p className="max-w-xs mx-auto md:ml-auto md:mr-0">
              {t("rights")} © 2025. {t("builtBy")}{' '}
              <Link
                href="https://sobrepoxi.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-orange-500"
              >
                Sobrepoxi IT
              </Link>
            </p>
            <p className="mt-2 max-w-xs mx-auto md:ml-auto md:mr-0">
              {t("office")}: <a href="tel:+50685850000" className="hover:underline">(+506) 8585-0000</a>
            </p>
            <p className="max-w-xs mx-auto md:ml-auto md:mr-0">
              WhatsApp: <a href="https://wa.me/50672966451" className="hover:underline">(+506) 7296-6451</a>
            </p>
            <p className="max-w-xs mx-auto md:ml-auto md:mr-0">
              {t("tollFree")}: <a href="tel:8663196020" className="hover:underline">866-319-6020</a>
            </p>
          </div>
        </div>

        {/* Social media links */}
        <div className="flex flex-row justify-center font-thin mt-8 pt-5 border-t border-gray-300 space-x-6 text-gray-600">
          <Link href="https://www.facebook.com/justcostaricatravel" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
            <FaFacebook className="w-6 h-6" />
          </Link>
          <Link href="https://www.instagram.com/just_c.r_travel_com/" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition-colors">
            <FaInstagram className="w-6 h-6" />
          </Link>
          {/* <Link href="https://www.x.com" aria-label="Twitter/X" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
            <FaTwitter className="w-6 h-6" />
          </Link>
          <Link href="https://www.tiktok.com" aria-label="TikTok" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
            <FaTiktok className="w-6 h-6" />
          </Link> */}
        </div>
      </div>
    </footer>
  );
}
