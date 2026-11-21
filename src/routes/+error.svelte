<script lang="ts">
  import { page } from '$app/stores';
  import Logo from '$components/brand/Logo.svelte';
  import Seo from '$components/Seo.svelte';

  $: notFound = $page.status === 404;
</script>

<!-- Rendered with the real HTTP status (404 for unknown URLs), so search engines never see a "soft 404". -->
<Seo
  title={notFound ? 'Page not found · Namaste Soft' : 'Something went wrong · Namaste Soft'}
  description={notFound ? 'The page you’re looking for doesn’t exist or has moved.' : 'An unexpected error occurred. Please try again.'}
  noindex
/>

<main class="flex min-h-screen flex-col items-center justify-center bg-paper px-4 text-center">
  <Logo size={56} wordmark={false} />
  <p class="mt-8 font-mono text-sm uppercase tracking-widest text-muted">Error {$page.status}</p>
  {#if notFound}
    <h1 class="mt-3 text-4xl font-bold text-ink sm:text-5xl">This page took a different path.</h1>
    <p class="mt-4 max-w-md text-lg text-muted">The page you’re looking for doesn’t exist or has moved.</p>
  {:else}
    <h1 class="mt-3 text-4xl font-bold text-ink sm:text-5xl">Something went wrong.</h1>
    <p class="mt-4 max-w-md text-lg text-muted">Please try again in a moment.</p>
  {/if}
  <div class="mt-10 flex flex-col gap-3 sm:flex-row">
    <a href="/" class="btn btn-ink">Back to home</a>
    <a href="/contact" class="btn btn-line">Contact us</a>
  </div>
</main>
