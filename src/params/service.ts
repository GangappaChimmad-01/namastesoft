import type { ParamMatcher } from '@sveltejs/kit';
import { servicePages } from '$lib/services';

// Only known landing-page slugs match; anything else falls through to the 404 route.
export const match: ParamMatcher = (param) => servicePages.some((p) => p.slug === param);
