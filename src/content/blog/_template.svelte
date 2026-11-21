<!--
  Article template. Copy this file to src/content/blog/<url-slug>.svelte (lowercase, hyphens),
  fill in the metadata and write the article below. Files starting with "_" are never published.

  - Keep `draft: true` until the article has been reviewed by someone who knows the subject.
  - Use H2 for sections and H3 for subsections; the page adds the H1 from `title`.
  - Only state facts, prices and results you can stand behind.
  - Link to related service pages, e.g. <a href="/software-development-company">custom software development</a>.
  - Images live in /static/blog/ (WebP); always give alt text, width and height, and loading="lazy".
-->
<script module lang="ts">
  import type { PostMeta } from '@/lib/blog';

  export const metadata: PostMeta = {
    title: 'Article title (about 60 characters)',
    description: 'One or two sentences, about 150 characters, saying what the reader will learn.',
    published: '2026-01-01',
    category: 'Software development',
    tags: [],
    services: ['software-development-company'],
    draft: true
  };
</script>

<p>Opening paragraph that answers the reader’s question directly.</p>

<h2>First section</h2>
<p>…</p>
