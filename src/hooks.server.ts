import type { Handle } from '@sveltejs/kit';

// Preload the headline and body fonts so text appears in the brand fonts straight away.
// The small mono label font loads normally.
export const handle: Handle = ({ event, resolve }) =>
  resolve(event, {
    preload: ({ type, path }) =>
      type === 'js' || type === 'css' || (type === 'font' && (path.includes('bricolage') || path.includes('dm-sans')))
  });
