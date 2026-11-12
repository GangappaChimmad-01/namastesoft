import { error } from '@sveltejs/kit';
import { getServicePage, servicePages } from '$lib/services';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = () => servicePages.map((p) => ({ service: p.slug }));

export const load: PageLoad = ({ params }) => {
  const page = getServicePage(params.service);
  if (!page) error(404, 'Not found');
  return { page };
};
