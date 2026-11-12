/**
 * Svelte action: fades an element in the first time it scrolls into view.
 * Pair with the `.reveal` class from app.css. Optional delay in seconds.
 */
export function reveal(node: HTMLElement, delay = 0) {
  node.classList.add('reveal');
  if (delay) node.style.setProperty('--reveal-delay', `${delay}s`);

  if (typeof IntersectionObserver === 'undefined') {
    node.classList.add('is-visible');
    return {};
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          node.classList.add('is-visible');
          observer.disconnect();
        }
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    }
  };
}
