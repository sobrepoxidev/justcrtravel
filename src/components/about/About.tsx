import Image from "next/image";
import { useTranslations } from 'next-intl';
import Link from "next/link";

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
    <div className="max-w-6xl mx-auto px-4 pt-20 sm:pt-36 ">

      <div className="flex flex-col md:flex-row items-start ga">
        {/* Texto izquierda */}
        <div className="md:w-1/2">
          <h1 className="text-3xl sm:text-5xl font-bold mb-1 tracking-tight text-gray-950">
            {t("title")}
          </h1>
          <p className="text-justify whitespace-pre-line text-base font-thin md:pr-2">{t("description.part1")}</p>
          <p className="text-justify whitespace-pre-line text-base font-thin md:pr-2">{t("description.part2")}</p>
          <p className="text-justify whitespace-pre-line text-base font-thin md:pr-2">{t("description.part3")}</p>

          {/* Botón */}
          <div className="flex flex-col sm:flex-row justify-center items-center max-md:py-3 md:py-6">
            <Link
              href="/en/contact"
              className="border-2 border-green-400 text-green-400 hover:bg-green-300/20 hover:text-green-500 transition-colors duration-300 px-8 py-3"
            >
              {t("buidVacations")}
            </Link>
          </div>
        </div>

        {/* Imagen derecha */}
        <div className="md:w-1/2 w-full flex flex-col justify-center items-center">
          <Image
            src={imgsrc}
            alt={t("altCover")}
            width={800}
            height={600}
            className="w-full h-auto rounded shadow-md aspect-video"
            priority
          />
        </div>
      </div>

      <section className="pt-5 bg-background">
        <div className="max-w-6xl mx-auto grid gap-3 md:gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-xl sm:text-3xl font-bold mb-1 tracking-tight text-gray-950">{t("mission.title")}</h3>
            <p className="text-justify whitespace-pre-line text-base font-thin">{t("mission.description")}</p>
          </div>
          <div>
            <h3 className="text-xl sm:text-3xl font-bold mb-1 tracking-tight text-gray-950">{t("vision.title")}</h3>
            <p className="text-justify whitespace-pre-line text-base font-thin">{t("vision.description")}</p>
          </div>
        </div>
      </section>

      <section className="pt-5 md:py-20 bg-card">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-950">{t("teamTitle")}</h2>
          <p className="text-xl sm:text-3xl mb-2 md:mb-4 font-thin tracking-tight text-gray-950">{t("teamSubtitle")}</p>

          <div className="flex flex-col md:flex-row gap-8 justify-center">
            {team.map((member) => (
              <div key={member.name} className="border p-6 flex flex-col items-center max-w-md">
                <Image src={member.img} alt={member.name} width={100} height={100} className="mb-2 rounded-full shadow-md" />
                <h3 className="text-xl sm:text-3xl font-semibold tracking-tight text-gray-950">{member.name}</h3>
                <p className="text-gray-500 text-center mb-1">{member.role}</p>
                <p className="text-justify whitespace-pre-line text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
