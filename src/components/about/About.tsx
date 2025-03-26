import Image from "next/image";


export default function About() {
  const paola = "/about/paola.png";
  const jorge = "/about/jorge.jpg";
  return (
    <div className="max-w-5xl mx-auto pt-32 ">
      {/* Hero / Portada */}

      <div className="relative h-96 md:h-96">
        <Image
          src="/about/main.jpg"
          alt="About Us"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
     

      <h1 className="text-5xl font-bold text-start my-2">About the company</h1>
      <p className="max-w-5xl text-lg md:text-xl mb-2">
        We are just two ticos that had an idea a few years ago, show our country to travelers but at that time we didn’t have the experience and preparation that we have now.
      </p>
      <p className="max-w-5xl text-lg md:text-xl mb-2">
        Our main goal still remain the same but improve now we want to offer our visitors a high quality service according to our client needs.
        We want to be the difference in the tourism service provide it at the moment in our country, we are going to allow our customers to create their own vacations based on their needs, budgets and desires.
      </p>
      <p className="max-w-5xl text-lg md:text-xl">
        We want our clients to know CR as a whole, a full package including everything.
      </p>
      {/* Misión / Visión / Valores */}
      <section className="pt-12 bg-background ">
        <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2 ">
          {/* Misión */}
          <div className="">
            <h3 className="text-2xl font-bold mb-4">Mission</h3>
            <p className="text-base text-text-secondary leading-relaxed">
              We are an innovated tourism company located in Costa Rica looking to announce our beautiful country to world travelers around: showing our values, culture, history, nature, medical services and competitive tourism attractions..
            </p>
          </div>
          {/* Visión */}
          <div className="">
            <h3 className="text-2xl font-bold mb-4">Vision</h3>
            <p className="text-base text-text-secondary leading-relaxed">
              Our main goal and objective is to provide a high standard service as a tourism company, being a multitasking travel agency seeking to promote Costa Rican natural beauty and its culture leaving in our client’s memory a print that they will never forget.
            </p>
          </div>
          {/* Valores */}

        </div>
      </section>

       {/* Filosofía de Trabajo */}
       <section className="py-12 md:py-20 bg-card">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            ABOUT TEAM
          </h2>
          <p className="text-sm font-thin mb-12 text-center">
            The people who make your visit to Costa Rica possible
          </p>
          
          {/* Team Members */}
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            {/* Paola */}
            <div className="border p-6 flex flex-col items-center max-w-md">
              <div className="mb-4">
                <Image 
                  src={paola} 
                  alt="Paola Pastor Villalobos" 
                  width={100} 
                  height={100}
                />
              </div>
              <h3 className="text-2xl font-bold text-center">PAOLA PASTOR VILLALOBOS</h3>
              <p className="text-gray-400 text-center mb-4">GENERAL MANAGER</p>
              <p className="text-center text-sm">
                Paola, graduated from the Universidad Latina Costa Rica of Tourism career with emphasis on hotel and restaurant, organizer in national tourism congresses and business.
              </p>
            </div>

            {/* Jorge */}
            <div className="border p-6 flex flex-col items-center max-w-md">
              <div className="mb-4">
                <Image 
                  src={jorge} 
                  alt="Jorge Antonio Zavaleta Fallas" 
                  width={100} 
                  height={100}
                />
              </div>
              <h3 className="text-2xl font-bold text-center">JORGE ANTONIO ZAVALETA FALLAS</h3>
              <p className="text-gray-400 text-center mb-4">FINANCIAL MANAGER</p>
              <p className="text-center text-sm">
                Jorge is a computer and networking technician, advanced in the electronic engineering career, a career that has been very useful to give advice and maintenance to several business offices in Costa Rica, experience of 17 years as customer service.
              </p>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}