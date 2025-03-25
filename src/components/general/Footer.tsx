import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok, FaArrowRight } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white px-4 py-8 md:p-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo section */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="/home/logo-just-costarica-travel.png"
              alt="Just Costa Rica Travel"
              width={90}
              height={90}
              className="rounded-full"
              priority
            />
          </div>

          {/* Build your vacation button */}
          <div className="flex justify-center">
            <Link
              href="/en/build-your-vacation"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full flex items-center gap-2 transition-transform hover:scale-105"
            >
              Build Your Vacation <FaArrowRight />
            </Link>
          </div>

          {/* Contact info */}
          <div className="text-sm font-light text-center md:text-right px-4">
            <p className="max-w-xs mx-auto md:ml-auto md:mr-0">
              Just Costa Rica Travel © 2025. Built by{' '}
              <Link href="https://sobrepoxi.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:underline text-orange-500">
                Sobrepoxi IT
              </Link>
            </p>
            <p className="mt-2 max-w-xs mx-auto md:ml-auto md:mr-0">
              Office: <a href="tel:+50685850000" className="hover:underline">(+506) 8585-0000</a>
            </p>
            <p className="max-w-xs mx-auto md:ml-auto md:mr-0">
              Whatsapp: <a href="https://wa.me/50672966451" className="hover:underline">(+506) 7296-6451</a>
            </p>
            <p className="max-w-xs mx-auto md:ml-auto md:mr-0">
              US/Canada Toll Free: <a href="tel:8663196020" className="hover:underline">866-319-6020</a>
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
          <Link href="https://www.x.com" aria-label="Twitter/X" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
            <FaTwitter className="w-6 h-6" />
          </Link>
          <Link href="https://www.tiktok.com" aria-label="TikTok" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
            <FaTiktok className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </footer>
  );
}