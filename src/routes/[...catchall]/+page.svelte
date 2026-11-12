<script>
  import Logo from '$components/brand/Logo.svelte';
  import Seo from '$components/Seo.svelte';
</script>

<Seo title="Page not found · Namaste Soft" description="The page you’re looking for doesn’t exist or has moved." noindex />

<main class="flex min-h-screen flex-col items-center justify-center bg-paper px-4 text-center">
  <Logo size={56} wordmark={false} />
  <p class="mt-8 font-mono text-sm uppercase tracking-widest text-muted">Error 404</p>
  <h1 class="mt-3 text-4xl font-bold text-ink sm:text-5xl">This page took a different path.</h1>
  <p class="mt-4 max-w-md text-lg text-muted">The page you’re looking for doesn’t exist or has moved.</p>
  <a href="/" class="btn btn-ink mt-10">Back to home</a>
</main>
