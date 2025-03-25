// components/DestinationGallery.tsx
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const DestinationGallery = () => {
  const t = useTranslations("destinationGallery");

  const destinations = [
    {
      src: '/home/destination1.jpeg',
      alt: t("destination1.alt"),
      label: t("destination1.label")
    },
    {
      src: '/home/destination2.jpeg',
      alt: t("destination2.alt"),
      label: t("destination2.label")
    },
    {
      src: '/home/destination3.jpeg',
      alt: t("destination3.alt"),
      label: t("destination3.label")
    },
    {
      src: '/home/destination4.jpeg',
      alt: t("destination4.alt"),
      label: t("destination4.label")
    },
  ];

  return (
    <div className="py-12 px-4 md:px-6 bg-white">
      <div className="mb-10 md:mb-16 text-center max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-light text-gray-700 leading-relaxed">
          {t("heading")}
        </h2>
      </div>
      
      <div className="flex flex-wrap justify-center items-start relative">
        {destinations.map((destination, index) => (
          <div 
            key={index} 
            className={`w-full sm:w-1/2 md:w-64 p-3 md:mx-4 z-10 transition-transform duration-300 hover:scale-105 ${
              index % 2 !== 0 ? 'mt-0 sm:mt-16' : ''
            }`}
          >
            <div className="overflow-hidden rounded-lg shadow-md relative group">
              <Image
                src={destination.src}
                alt={destination.alt}
                width={300}
                height={300}
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 p-3">
                <p className="text-white text-center font-medium text-sm md:text-base">
                  {destination.label}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationGallery;
