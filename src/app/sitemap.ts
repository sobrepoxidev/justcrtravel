// app/sitemap.ts
import { MetadataRoute } from 'next';

const locales = ['en', 'es'];
const pages = ['', '/about-us', '/adventure', '/build-your-vacation', '/business', '/contact', '/cultural', '/destinations', '/marine', '/other-services', '/payments', '/rentals', '/transportation'];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://justcostaricatravel.com';

  return pages.flatMap((page) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}${page}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/en${page}`,
          es: `${baseUrl}/es${page}`
        }
      }
    }))
  );
}
