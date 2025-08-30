import Image from "next/image";
import { useTranslations } from 'next-intl';
import Link from "next/link";
import { Hammer } from "lucide-react";

export default function About() {
  const t = useTranslations('about');
  const imgsrc = "/about/main.jpg";

  const team = [
    {
      img: "/about/paola.png",
      name: t("team.paola.name"),
      role: t("team.paola.role"),
      bio: t("team.paola.bio"),
    },
    {
      img: "/about/jorge.jpg",
      name: t("team.jorge.name"),
      role: t("team.jorge.role"),
      bio: t("team.jorge.bio"),
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 md:pt-32 pb-8 sm:pb-12">

      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-12 sm:mb-16 md:mb-20">
        {/* Content */}
        <div className="lg:w-1/2 space-y-4 sm:space-y-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-950 leading-tight">
            {t("title")}
          </h1>
          
          <div className="space-y-3 sm:space-y-4">
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              {t("description.part1")}
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              {t("description.part2")}
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              {t("description.part3")}
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-4 sm:pt-6">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm sm:text-base"
            >
              <Hammer className="w-5 h-5 mr-2" />
              {t("buildVacations")}
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 w-full">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src={imgsrc}
              alt={t("altCover")}
              width={800}
              height={600}
              className="w-full h-auto aspect-video object-cover transition-transform duration-700 hover:scale-105"
              priority
            />
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <section className="mb-12 sm:mb-16 md:mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-white/40 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-gray-950">
                {t("mission.title")}
              </h3>
            </div>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              {t("mission.description")}
            </p>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-white/40 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-gray-950">
                {t("vision.title")}
              </h3>
            </div>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              {t("vision.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section>
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-950 mb-3 sm:mb-4">
            {t("teamTitle")}
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light tracking-tight text-gray-700 px-4">
            {t("teamSubtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {team.map((member) => (
            <div 
              key={member.name} 
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-white/40 hover:shadow-xl transition-all duration-300 hover:scale-105 flex flex-col items-center text-center"
            >
              <div className="relative mb-4 sm:mb-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full overflow-hidden shadow-xl ring-4 ring-white/50">
                  <Image 
                    src={member.img} 
                    alt={member.name} 
                    width={120} 
                    height={120} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-gray-950 mb-2">
                {member.name}
              </h3>
              
              <p className="text-sm sm:text-base text-emerald-600 font-medium mb-3 sm:mb-4">
                {member.role}
              </p>
              
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
