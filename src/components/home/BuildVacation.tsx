// components/BuildVacation.tsx
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const BuildVacation = () => {
  const t = useTranslations("buildvacation");

  return (
    <div className="relative h-80 md:h-96 lg:h-[32rem] bg-blue-500 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/home/barmar.jpeg"
          alt={t("imageAlt")}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      <div className="relative flex flex-col items-center justify-center h-full text-white text-center px-4 z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 drop-shadow-lg">
          {t("title")}
        </h2>
        <p className="text-lg md:text-xl mb-4 md:mb-6 max-w-md drop-shadow-md">
          {t("description")}
        </p>
        <Link 
          href="/build-your-vacation"
          className="border-2 border-white hover:bg-white hover:text-blue-600 focus:bg-white focus:text-blue-600 transition-colors duration-300 px-6 md:px-8 py-2 md:py-3 rounded-md font-medium transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          aria-label={t("ariaLabel")}
        >
          {t("cta")}
        </Link>
      </div>
    </div>
  );
};

export default BuildVacation;
