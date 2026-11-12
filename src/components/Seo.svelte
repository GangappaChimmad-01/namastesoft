<script lang="ts">
  import { absolute } from '@/lib/seo';
  import { config } from '@/lib/config';

  export let title: string;
  export let description: string;
  export let path = '/';
  export let image = '/og-image.png';
  export let noindex = false;
  export let schema: object[] = [];

  $: url = absolute(path);
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
  <meta property="og:type" content="website" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={url} />
  <meta property="og:image" content={absolute(image)} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Namaste Soft — software and website development company" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content={config.social.twitter} />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={absolute(image)} />

  {#each jsonLd as json}
    {@html `<script type="application/ld+json">${json}</script>`}
  {/each}
</svelte:head>
