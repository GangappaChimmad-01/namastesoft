import { absolute } from '$lib/seo';
import { servicePages } from '$lib/services';
import { products } from '$lib/products';
import { posts } from '$lib/blog';
import { lastModified } from '$lib/server/lastmod';

export const prerender = true;

/**
 * Every public, indexable page. New service pages, products and blog posts are added automatically
 * from their data files. The 404 page, /updates/ files and drafts are never listed.
 * lastmod is a real date (git history of the page's source files, or a post's own dates) or omitted.
 * changefreq / priority are left out: Google ignores them.
 */
export function GET() {
  const home = ['src/routes/+page.svelte', 'src/components/Hero.svelte', 'src/components/About.svelte', 'src/components/Services.svelte', 'src/components/WhatsAppAutomation.svelte', 'src/components/Faq.svelte', 'src/lib/homeFaqs.ts'];

  const pages: { path: string; lastmod?: string }[] = [
    { path: '/', lastmod: lastModified(home) },
    ...servicePages.map((p) => ({ path: `/${p.slug}`, lastmod: lastModified(['src/lib/services.ts', 'src/routes/[service=service]/+page.svelte']) })),
    { path: '/products', lastmod: lastModified(['src/lib/products.ts', 'src/routes/products/+page.svelte']) },
    ...products.map((p) => ({ path: `/products/${p.id}`, lastmod: lastModified(['src/lib/products.ts', 'src/routes/products/[product]/+page.svelte']) })),
    { path: '/portfolio', lastmod: lastModified(['src/lib/projects.ts', 'src/routes/portfolio/+page.svelte']) },
    { path: '/about', lastmod: lastModified(['src/lib/profile.ts', 'src/routes/about/+page.svelte']) },
    { path: '/contact', lastmod: lastModified(['src/routes/contact/+page.svelte', 'src/components/Contact.svelte']) },
    ...(posts.length
      ? [
          { path: '/blog', lastmod: posts.map((p) => p.updated ?? p.published).sort().at(-1) },
          ...posts.map((p) => ({ path: `/blog/${p.slug}`, lastmod: p.updated ?? p.published }))
        ]
      : [])
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((p) => `  <url><loc>${absolute(p.path)}</loc>${p.lastmod ? `<lastmod>${p.lastmod}</lastmod>` : ''}</url>`).join('\n')}
</urlset>
`;

  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
