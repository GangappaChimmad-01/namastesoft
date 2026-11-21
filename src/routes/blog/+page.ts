import { error } from '@sveltejs/kit';
import { posts } from '$lib/blog';

// Published (and in the sitemap / navigation) only once at least one post exists. Until then: a real 404.
export const prerender = posts.length > 0;

export function load() {
  if (!posts.length) error(404, 'Not found');
  return {};
}
