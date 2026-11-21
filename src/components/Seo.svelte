<script lang="ts">
  import { absolute } from '@/lib/seo';
  import { config } from '@/lib/config';

  export let title: string;
  export let description: string;
  export let path = '/';
  export let image = '/og-image.png';
  export let imageAlt = 'Namaste Soft — software and website development company in Bengaluru';
  export let imageWidth = 1200;
  export let imageHeight = 630;
  export let noindex = false;
  export let schema: object[] = [];
  /** 'article' for blog posts; adds article:* tags from `article`. */
  export let type: 'website' | 'article' = 'website';
  export let article: { published: string; modified?: string; section?: string; tags?: string[] } | null = null;

  // Canonical is always the clean www URL for the page: no query string or fragment.
  $: url = absolute(path.split(/[?#]/)[0]);
  // JSON-LD must not be able to close the <script> tag
  $: jsonLd = schema.map((s) => JSON.stringify(s).replace(/</g, '\\u003c'));
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  {#if noindex}
    <meta name="robots" content="noindex, follow" />
  {:else}
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
    <link rel="canonical" href={url} />
  {/if}

  <meta property="og:site_name" content={config.company.name} />
  <meta property="og:locale" content="en_IN" />
  <meta property="og:type" content={type} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={url} />
  <meta property="og:image" content={absolute(image)} />
  <meta property="og:image:width" content={String(imageWidth)} />
  <meta property="og:image:height" content={String(imageHeight)} />
  <meta property="og:image:alt" content={imageAlt} />
  {#if article}
    <meta property="article:published_time" content={article.published} />
    {#if article.modified}<meta property="article:modified_time" content={article.modified} />{/if}
    {#if article.section}<meta property="article:section" content={article.section} />{/if}
    {#each article.tags ?? [] as tag}<meta property="article:tag" content={tag} />{/each}
  {/if}

  <meta name="twitter:card" content="summary_large_image" />
  {#if config.social.twitter}<meta name="twitter:site" content={config.social.twitter} />{/if}
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={absolute(image)} />
  <meta name="twitter:image:alt" content={imageAlt} />

  {#each jsonLd as json}
    {@html `<script type="application/ld+json">${json}</script>`}
  {/each}
</svelte:head>
