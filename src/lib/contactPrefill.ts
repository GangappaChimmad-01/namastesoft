import { writable } from 'svelte/store';

/** Set by a service card's "Discuss" link; the contact form picks it up as the project type. */
export const projectType = writable('');

export function discuss(service: string) {
  projectType.set(service);
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  // move focus to the first empty field so keyboard users land in the form
  setTimeout(() => document.getElementById('contact-name')?.focus({ preventScroll: true }), 500);
}
