<script>
  import '../app.css';
  import Toast from '@/components/ui/Toast.svelte';
</script>

<!-- Per-page title, description, canonical, Open Graph and JSON-LD live in components/Seo.svelte -->
<svelte:head>
  <meta name="author" content="Namaste Soft" />
</svelte:head>

<slot />

<Toast />
