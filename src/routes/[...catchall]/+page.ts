import { error } from '@sveltejs/kit';

// Any URL that matches no page is handled by the server (not prerendered) and answered with a real
// HTTP 404, rendered by src/routes/+error.svelte. (Previously it rendered a 404 message with status 200.)
export const prerender = false;

export function load() {
  error(404, 'Not found');
}
