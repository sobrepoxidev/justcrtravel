import Image from "next/image";
import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('about');

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
    <div className="max-w-5xl mx-auto pt-32">
      <div className="relative h-96 md:h-96">
        <Image
          src="/about/main.jpg"
          alt={t("altCover")}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />
      </div>

      <h1 className="text-5xl font-bold text-start my-2">{t("title")}</h1>

      <p className="max-w-5xl text-lg md:text-xl mb-2">{t("description.part1")}</p>
      <p className="max-w-5xl text-lg md:text-xl mb-2">{t("description.part2")}</p>
      <p className="max-w-5xl text-lg md:text-xl">{t("description.part3")}</p>

      <section className="pt-12 bg-background">
        <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-bold mb-4">{t("mission.title")}</h3>
            <p className="text-base text-text-secondary leading-relaxed">{t("mission.description")}</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">{t("vision.title")}</h3>
            <p className="text-base text-text-secondary leading-relaxed">{t("vision.description")}</p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-card">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">{t("teamTitle")}</h2>
          <p className="text-sm font-thin mb-12 text-center">{t("teamSubtitle")}</p>

          <div className="flex flex-col md:flex-row gap-8 justify-center">
            {team.map((member) => (
              <div key={member.name} className="border p-6 flex flex-col items-center max-w-md">
                <Image src={member.img} alt={member.name} width={100} height={100} className="mb-4" />
                <h3 className="text-2xl font-bold text-center">{member.name}</h3>
                <p className="text-gray-400 text-center mb-4">{member.role}</p>
                <p className="text-center text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
