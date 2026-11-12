import { absolute } from '$lib/seo';
import { servicePages } from '$lib/services';

export const prerender = true;

export function GET() {
  const lastmod = new Date().toISOString().slice(0, 10); // build date (the site is prerendered)
  const pages = [
    { path: '/', priority: '1.0' },
    ...servicePages.map((p) => ({ path: `/${p.slug}`, priority: '0.9' }))
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((p) => `  <url><loc>${absolute(p.path)}</loc><lastmod>${lastmod}</lastmod><changefreq>monthly</changefreq><priority>${p.priority}</priority></url>`).join('\n')}
</urlset>
`;

  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
