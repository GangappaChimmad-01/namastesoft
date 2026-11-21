<script lang="ts">
  import '../app.css';
  import { onMount } from 'svelte';
  import Toast from '@/components/ui/Toast.svelte';
  import { analyticsEnabled, analyticsHeadScript, analyticsScriptSrc, trackClicks } from '@/lib/analytics';

  // One listener for WhatsApp / phone / email / CTA clicks (see lib/analytics.ts). No-op without an analytics ID.
  onMount(() => {
    if (!analyticsEnabled) return;
    document.addEventListener('click', trackClicks, { capture: true });
    return () => document.removeEventListener('click', trackClicks, { capture: true });
  });
</script>

<!-- Per-page title, description, canonical, Open Graph and JSON-LD live in components/Seo.svelte -->
<svelte:head>
  <meta name="author" content="Namaste Soft" />
  <link rel="alternate" type="text/plain" title="Namaste Soft summary for AI assistants" href="/llms.txt" />
  {#if analyticsEnabled}
    {@html `<script>${analyticsHeadScript()}</script>`}
    <script async src={analyticsScriptSrc}></script>
  {/if}
</svelte:head>

<slot />

<Toast />
