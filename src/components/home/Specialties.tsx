import Image from 'next/image';
import { useTranslations } from 'next-intl';

const specialtiesKeys = [
  'sports',
  'fishHikeFlySwim',
  'football',
  'surf'
];

const justKeys = [
  'health',
  'beautyWellness',
  'dental',
  'medical'
];

export default function Specialties() {
  const t = useTranslations('specialties');

  return (
    <div>
      <div className="px-4 py-8 bg-white">
        <div className="flex flex-col md:flex-row gap-14 items-center justify-center mx-auto">
          {/* Columna Izquierda: Imagen principal */}
          <div className="md:w-1/3">
            <Image
              src="/home/mainspeciaist.webp"
              alt={t("mainImageAlt")}
              width={500}
              height={700}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Columna Derecha */}
          <div className="md:w-1/2 flex flex-col justify-center space-y-6">
            <h2 className="text-3xl text-justify text-gray-900">
              <span className="font-bold text-gray-800">{t("titlePrefix")} </span>
              {t("titleSuffix")}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {specialtiesKeys.map((key) => (
                <div key={key}>
                  <div className="flex items-center space-x-2">
                    <Image
                      src={`/home/specialtiesicon${specialtiesKeys.indexOf(key)+1}.png`}
                      alt={t(`${key}.name`)}
                      width={70}
                      height={70}
                      className="w-[42px] h-[42px] object-contain"
                    />
                    <h3 className="text-lg font-semibold text-gray-800">
                      {t(`${key}.name`)}
                    </h3>
                  </div>
                  <p className="text-gray-600 mt-2">
                    {t(`${key}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-8 bg-white">
        <div className="flex flex-col md:flex-row gap-14 items-center justify-center mx-auto">
          <div className="w-full sm:max-w-6xl flex flex-col justify-center space-y-6">
            <h2 className="text-4xl text-gray-900">
              <span className="font-bold text-gray-800">Just Costa Rica Travel </span>
              <span className="text-pretty">{t("justTitle")}</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {justKeys.map((key) => (
                <div key={key} className="flex items-start space-x-4">
                  <Image
                    src={`/home/just${justKeys.indexOf(key)+1}.webp`}
                    alt={t(`${key}.name`)}
                    width={100}
                    height={100}
                    className="w-[100px] h-[100px] object-contain"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {t(`${key}.name`)}
                    </h3>
                    <p className="text-gray-600 mt-1 text-sm">
                      {t(`${key}.description`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <h3 className="text-4xl text-gray-900 text-center mt-4">
          <span className="font-bold text-gray-800">{t("thisIs")} </span>
          <span className="text-pretty">{t("costaRica")}</span>
        </h3>
      </div>
    </div>
  );
}
