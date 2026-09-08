import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://talkly3.onrender.com';
  const pages = ['', '/text', '/voice', '/video', '/safety', '/privacy', '/terms'];
  return pages.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'daily' : 'monthly',
    priority: path === '' ? 1 : 0.6,
  }));
}
