// components/DestinationGallery.tsx
import Link from 'next/link';

const ExploreCR = () => {



  return (
    <div className="min-h-screen flex flex-col">
      {/* SVG superior como adorno */}
      <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 100"
      preserveAspectRatio="none"
      className="w-full h-16 sm:h-20 transform transition-transform duration-300 hover:scale-105"
      >
      <path
        className="elementor-shape-fill fill-current text-white"
        d="M700,70l300-40V0H0v30L700,70z"
      />
      </svg>
    
      {/* Contenedor central para el texto */}
      <div className="flex-grow flex items-center justify-center px-4 py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-semibold text-center leading-relaxed mb-6">
        We want you to explore Costa Rica and create a travel relationship with us!
        </h2>
        <p className="text-white text-center text-lg opacity-90 mt-4">
        Discover the natural wonders and unique experiences waiting for you.
        </p>
        <div className="mt-8 text-center">
        {/* <button className="bg-white text-green-700 hover:bg-green-100 transition-colors px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300">
          Start Exploring
        </button> */}
        <Link 
        href="/en/build-your-vacation" 
        className="border-2 border-white text-white hover:bg-white hover:text-blue-600 focus:bg-white focus:text-blue-600 transition-colors duration-300 px-6 md:px-8 py-2 md:py-3 rounded-md font-medium transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
        aria-label="Start building your vacation package"
      >
           Start Exploring
      </Link>
        </div>
      </div>
      </div>
    
      {/* SVG inferior como adorno */}
      <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 100"
      preserveAspectRatio="none"
      className="w-full h-16 sm:h-20 rotate-180 transform transition-transform duration-300 hover:scale-105"
      >
      <path
        className="elementor-shape-fill fill-current text-white"
       d="M700,70l300-40V0H0v30L700,70z"
      />
      </svg>
    </div>
  );
  
  


};

export default ExploreCR;