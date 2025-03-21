// components/DestinationGallery.tsx
import Image from 'next/image';

const DestinationGallery = () => {
  const destinations = [
    { src: '/home/destination1.jpeg', alt: 'Waterfall in Costa Rica' },
    { src: '/home/destination2.jpeg', alt: 'Tropical beach in Costa Rica' },
    { src: '/home/destination3.jpeg', alt: 'Palm trees at sunset' },
    { src: '/home/destination4.jpeg', alt: 'Ocean sunset in Costa Rica' },
  ];

  return (
    <div className="py-8 px-0 bg-white">
      <div className=" mb-16 text-center max-w-5xl mx-auto">
        <h2 className="text-3xl font-light text-gray-700">
          We guarantee the most attractive prices and fun!.... Contact us for more information and for your own personalized package!
        </h2>
      </div>
      
      <div className="flex justify-center items-start relative">
        {/* First image - normal position */}
        <div className="w-64 mx-4 z-10">
          <Image
            src={destinations[0].src}
            alt={destinations[0].alt}
            width={300}
            height={300}
            className="w-full h-auto object-cover"
          />
        </div>
        
        {/* Second image - positioned lower */}
        <div className="w-64 mx-4 mt-16 z-10">
          <Image
            src={destinations[1].src}
            alt={destinations[1].alt}
            width={300}
            height={300}
            className="w-full h-auto object-cover"
          />
        </div>
        
        {/* Third image - normal position */}
        <div className="w-64 mx-4 z-10">
          <Image
            src={destinations[2].src}
            alt={destinations[2].alt}
            width={300}
            height={300}
            className="w-full h-auto object-cover"
          />
        </div>
        
        {/* Fourth image - positioned lower */}
        <div className="w-64 mx-4 mt-16 z-10">
          <Image
            src={destinations[3].src}
            alt={destinations[3].alt}
            width={300}
            height={300}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default DestinationGallery;