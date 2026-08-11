const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.tennisconnect.nl';
const LAST_MOD = new Date('2026-08-10');

export default function sitemap() {
  const routes = [
    { path: '', changeFrequency: 'weekly', priority: 1 },
    { path: '/inschrijven-tennis-les', changeFrequency: 'weekly', priority: 0.95 },
    { path: '/inschrijven', changeFrequency: 'monthly', priority: 0.5 },
    { path: '/inschrijven-activiteit', changeFrequency: 'monthly', priority: 0.5 },
    { path: '/knltb', changeFrequency: 'monthly', priority: 0.6 },
    { path: '/privacy', changeFrequency: 'yearly', priority: 0.3 },
  ];

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: path ? `${BASE_URL}${path}` : BASE_URL,
    lastModified: LAST_MOD,
    changeFrequency,
    priority,
  }));
}
