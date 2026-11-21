/**
 * Blog. Each article is one Svelte file in src/content/blog/<slug>.svelte exporting `metadata`
 * (copy src/content/blog/_template.svelte). The filename is the URL: /blog/<slug>.
 *
 * Nothing is published until a post exists with `draft: false`. While there are no published posts,
 * /blog returns 404 and is left out of the navigation, footer, sitemap and llms.txt, so no empty
 * pages are ever indexed. Files starting with "_" are ignored.
 */
import type { Component } from 'svelte';

export type PostMeta = {
  title: string; // <title> and H1, aim for ~60 characters
  description: string; // meta description, ~150 characters
  published: string; // YYYY-MM-DD
  updated?: string; // YYYY-MM-DD, set when the content meaningfully changes
  category: string; // e.g. 'Software development', 'WhatsApp automation'
  tags?: string[];
  /** A real person who wrote or reviewed the article. Omit to credit the company. */
  author?: { name: string; url?: string };
  image?: { src: string; alt: string; width: number; height: number }; // social / hero image in /static
  services?: string[]; // related service landing-page slugs
  draft?: boolean; // true = not published anywhere
};

export type Post = PostMeta & { slug: string; component: Component };

const modules = import.meta.glob<{ metadata: PostMeta; default: Component }>('/src/content/blog/*.svelte', { eager: true });

export const posts: Post[] = Object.entries(modules)
  .map(([path, mod]) => ({ ...mod.metadata, slug: path.split('/').pop()!.replace(/\.svelte$/, ''), component: mod.default }))
  .filter((p) => !p.slug.startsWith('_') && !p.draft)
  .sort((a, b) => b.published.localeCompare(a.published));

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export const relatedPosts = (post: Post, limit = 3) =>
  posts
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => Number(b.category === post.category) - Number(a.category === post.category))
    .slice(0, limit);

export const blogCategories = [...new Set(posts.map((p) => p.category))];
