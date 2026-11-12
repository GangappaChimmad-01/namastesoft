<script lang="ts">
  import { onMount } from 'svelte';
  import { Menu, X, ArrowUpRight } from 'lucide-svelte';
  import Logo from '$components/brand/Logo.svelte';

  let isOpen = false;
  let scrolled = false;

  const menuItems = [
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'WhatsApp automation', id: 'whatsapp-automation' },
    { name: 'Contact', id: 'contact' }
  ];

  onMount(() => {
    const onScroll = () => (scrolled = window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  });

  const close = () => (isOpen = false);
</script>

<svelte:window on:keydown={(e) => e.key === 'Escape' && close()} />

<header
  class="fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300
    {scrolled || isOpen
    ? 'border-b border-line bg-paper/90 backdrop-blur-md'
    : 'border-b border-transparent bg-transparent'}"
>
  <nav class="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Main">
    <a href="/" class="-m-1 p-1" on:click={close}>
      <Logo size={32} /><span class="sr-only"> home</span>
    </a>

    <div class="hidden items-center gap-1 md:flex">
      {#each menuItems as item}
        <a
          href="/#{item.id}"
          class="rounded-full px-4 py-2 text-[0.95rem] font-medium text-muted transition-colors hover:bg-sand hover:text-ink"
        >
          {item.name}
        </a>
      {/each}
      <a href="/#contact" class="btn btn-ink ml-3 h-11 px-5 text-[0.95rem]">
        Start a project
        <ArrowUpRight class="h-4 w-4" />
      </a>
    </div>

    <button
      type="button"
      class="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full text-ink hover:bg-sand md:hidden"
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      on:click={() => (isOpen = !isOpen)}
    >
      {#if isOpen}<X class="h-6 w-6" />{:else}<Menu class="h-6 w-6" />{/if}
    </button>
  </nav>

  {#if isOpen}
    <div id="mobile-menu" class="border-t border-line px-4 pb-6 pt-2 md:hidden">
      {#each menuItems as item}
        <a
          href="/#{item.id}"
          on:click={close}
          class="flex items-center justify-between border-b border-line py-4 font-display text-xl font-semibold text-ink"
        >
          {item.name}
          <ArrowUpRight class="h-5 w-5 text-mari-deep" />
        </a>
      {/each}
      <a href="/#contact" on:click={close} class="btn btn-ink mt-6 w-full">Start a project</a>
    </div>
  {/if}
</header>
