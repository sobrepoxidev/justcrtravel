import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function FlightSearch() {
  const t = useTranslations("flightSearch");

  return (
    <div className="px-4 py-8 bg-white h-60">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold">{t("title")}</h1>

        <div className="flex flex-col-reverse items-end">
          {/* Logo de Skyscanner (SVG) */}
          <svg
            id="skyscanner-logo"
            data-testid="skyscanner-logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 300 36"
            width="15%"
            height="100%"
          >
            {/* SVG content truncado por brevedad */}
          </svg>
        </div>

        <p className="my-4 text-gray-700">
          {t("description")} <strong>Just Costa Rica Travel</strong> {t("descriptionSuffix")}
        </p>

        <Link
          href="https://www.skyscanner.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-green-700 hover:bg-green-100 transition-colors px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
          aria-label={t("ariaLabel")}
        >
          {t("cta")}
        </Link>
      </div>
    </div>
  );
}
