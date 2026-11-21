import { error } from '@sveltejs/kit';
import { getPost, posts } from '$lib/blog';
import type { EntryGenerator, PageLoad } from './$types';

export const prerender = posts.length > 0;
export const entries: EntryGenerator = () => posts.map((p) => ({ slug: p.slug }));

export const load: PageLoad = ({ params }) => {
  const post = getPost(params.slug);
  if (!post) error(404, 'Not found');
  return { post };
};
