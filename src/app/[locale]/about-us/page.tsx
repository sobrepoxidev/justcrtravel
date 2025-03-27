import Navbar from "@/components/general/NavBar";
import About from "@/components/about/About";
import Footer from "@/components/general/Footer";
import WhatsAppButton from "@/components/general/WhatsAppButton";

import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';

/**
 * Este `generateMetadata` se ejecuta en el servidor antes del render.
 * Obtenemos las traducciones desde el namespace "about" (o el que uses)
 * y construimos title/description/keywords en inglés.
 */
export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = params;
  // Aquí cargamos las traducciones para la sección "about" (ajusta si usas otro namespace)
  const t = await getTranslations('about');

  // Arma el título
  // En tu JSON, "title" es "About the company" => t('title')
  const pageTitle = `${t('title')} | Just Costa Rica Travel`;

  // Usamos parte del texto "description.part1" como descripción principal
  // (Podrías concatenar part1, part2 y part3, pero mantén la meta descripción ~160 car máx.)
  const pageDescription = t('description.part1');

  // Algunas keywords orientadas a turismo + negocio
  const pageKeywords = [
    'Costa Rica Travel',
    'About Just Costa Rica Travel',
    'Tourism in Costa Rica',
    'Travel Agency',
    'Vacation Packages',
    'Costa Rica Adventures'
  ];

  // URL base canónica para About Us
  const baseUrl = 'https://justcostaricatravel.com';

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: pageKeywords,
    alternates: {
      // En caso de que quieras tener canónicas diferenciadas por idioma:
      canonical: `${baseUrl}/${locale}/about-us`,
      languages: {
        en: `${baseUrl}/en/about-us`,
        es: `${baseUrl}/es/about-us`,
      },
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: `${baseUrl}/${locale}/about-us`,
      images: [
        // Ajusta la ruta de imagen si tienes un cover especial para "About Us"
        `${baseUrl}/images/about-us-cover.jpg`
      ],
    },
    // Opcionalmente, define "twitter" si quieres tarjetas Twitter
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [`${baseUrl}/images/about-us-cover.jpg`],
    },
  };
}


export default function AboutPage() {
    return (
        <main className="relative min-h-screen">


            <Navbar />
            <About />
            <Footer />
            <WhatsAppButton />

        </main>
    );
}