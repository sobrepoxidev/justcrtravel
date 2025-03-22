// components/DestinationGallery.tsx

const ExploreCR = () => {



  return (
    <div className="min-h-screen flex flex-col">
      {/* SVG superior como adorno */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        className="w-full h-auto"
      >
        <path
          className="elementor-shape-fill fill-current text-white"
          d="M700,70l300-40V0H0v30L700,70z"
        />
      </svg>
  
      {/* Contenedor central para el texto */}
      <div className="flex-grow flex items-center justify-center">
        <div className="max-w-3xl">
          <h2 className="text-4xl text-white font-thin text-center">
            We want you to explore Costa Rica and create a travel relationship with us!
          </h2>
        </div>
      </div>
  
      {/* SVG inferior como adorno */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        className="w-full h-auto rotate-180"
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