import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';

export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap {
  return (['en', 'fr'] as const).map((l) => ({
    url: `${SITE.url}/${l}/`,
    lastModified: new Date(),
    alternates: { languages: { en: `${SITE.url}/en/`, fr: `${SITE.url}/fr/` } },
  }));
}
