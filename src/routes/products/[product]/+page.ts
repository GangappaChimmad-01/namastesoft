import { error } from '@sveltejs/kit';
import { getProduct, products } from '$lib/products';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = () => products.map((p) => ({ product: p.id }));

export const load: PageLoad = ({ params }) => {
  const product = getProduct(params.product);
  if (!product) error(404, 'Not found');
  return { product };
};
