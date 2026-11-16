<script lang="ts">
  import { onMount } from 'svelte';
  import { Menu, X, ArrowUpRight, ChevronDown } from 'lucide-svelte';
  import Logo from '$components/brand/Logo.svelte';
  import { servicePages } from '@/lib/services';
  import { products } from '@/lib/products';

  let isOpen = false;
  let servicesOpen = false;
  let productsOpen = false;
  let scrolled = false;

  const menuItems = [
    { name: 'About', href: '/#about' },
    { name: 'FAQ', href: '/#faq' },
    { name: 'Contact', href: '/#contact' }
  ];

  onMount(() => {
    const onScroll = () => (scrolled = window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  });

  const close = () => {
    isOpen = false;
    servicesOpen = false;
    productsOpen = false;
  };

  function leftMenu(event: FocusEvent) {
    const next = event.relatedTarget as Node | null;
    return !next || !(event.currentTarget as HTMLElement).contains(next);
  }
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
      <!-- Services dropdown: opens on hover, click or keyboard focus -->
      <div
        class="relative"
        role="group"
        on:mouseenter={() => (servicesOpen = true)}
        on:mouseleave={() => (servicesOpen = false)}
        on:focusout={(e) => leftMenu(e) && (servicesOpen = false)}
      >
        <button
          type="button"
          class="inline-flex items-center gap-1 rounded-full px-4 py-2 text-[0.95rem] font-medium text-muted transition-colors hover:bg-sand hover:text-ink"
          aria-expanded={servicesOpen}
          aria-controls="services-menu"
          on:click={() => ((servicesOpen = !servicesOpen), (productsOpen = false))}
        >
          Services
          <ChevronDown class="h-4 w-4 transition-transform {servicesOpen ? 'rotate-180' : ''}" />
        </button>
        <!-- Kept in the DOM (hidden) so the links are always in the HTML for search engines -->
        <div id="services-menu" class="absolute left-0 top-full w-72 pt-2 {servicesOpen ? '' : 'hidden'}">
          <ul class="rounded-2xl border border-line bg-white p-2 shadow-[0_24px_48px_-20px_rgb(26_22_51/0.3)]">
            {#each servicePages as p}
              <li>
                <a
                  href="/{p.slug}"
                  on:click={close}
                  class="flex items-center justify-between rounded-xl px-4 py-3 text-[0.95rem] font-medium text-ink transition-colors hover:bg-sand"
                >
                  {p.name}
                  <ArrowUpRight class="h-4 w-4 text-mari-deep" />
                </a>
              </li>
            {/each}
            <li class="mt-1 border-t border-line pt-1">
              <a href="/#services" on:click={close} class="block rounded-xl px-4 py-3 text-sm text-muted transition-colors hover:bg-sand hover:text-ink">
                All services
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Products dropdown: same behaviour as Services -->
      <div
        class="relative"
        role="group"
        on:mouseenter={() => (productsOpen = true)}
        on:mouseleave={() => (productsOpen = false)}
        on:focusout={(e) => leftMenu(e) && (productsOpen = false)}
      >
        <button
          type="button"
          class="inline-flex items-center gap-1 rounded-full px-4 py-2 text-[0.95rem] font-medium text-muted transition-colors hover:bg-sand hover:text-ink"
          aria-expanded={productsOpen}
          aria-controls="products-menu"
          on:click={() => ((productsOpen = !productsOpen), (servicesOpen = false))}
        >
          Products
          <ChevronDown class="h-4 w-4 transition-transform {productsOpen ? 'rotate-180' : ''}" />
        </button>
        <div id="products-menu" class="absolute left-0 top-full w-80 pt-2 {productsOpen ? '' : 'hidden'}">
          <ul class="rounded-2xl border border-line bg-white p-2 shadow-[0_24px_48px_-20px_rgb(26_22_51/0.3)]">
            {#each products as p}
              <li>
                <a
                  href="/products#{p.id}"
                  on:click={close}
                  class="flex items-start justify-between gap-3 rounded-xl px-4 py-3 transition-colors hover:bg-sand"
                >
                  <span>
                    <span class="block text-[0.95rem] font-medium text-ink">{p.name}</span>
                    <span class="mt-0.5 block text-sm text-muted">{p.tagline}</span>
                  </span>
                  <ArrowUpRight class="mt-0.5 h-4 w-4 shrink-0 text-mari-deep" />
                </a>
              </li>
            {/each}
            <li class="mt-1 border-t border-line pt-1">
              <a href="/products" on:click={close} class="block rounded-xl px-4 py-3 text-sm text-muted transition-colors hover:bg-sand hover:text-ink">
                All products
              </a>
            </li>
          </ul>
        </div>
      </div>

      {#each menuItems as item}
        <a
          href={item.href}
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
    <div id="mobile-menu" class="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-line px-4 pb-6 pt-4 md:hidden">
      <p class="font-mono text-xs uppercase tracking-wider text-muted">Services</p>
      <ul class="mt-1">
        {#each servicePages as p}
          <li>
            <a href="/{p.slug}" on:click={close} class="flex items-center justify-between border-b border-line py-3.5 font-display text-lg font-semibold text-ink">
              {p.name}
              <ArrowUpRight class="h-5 w-5 text-mari-deep" />
            </a>
          </li>
        {/each}
      </ul>
      <p class="mt-6 font-mono text-xs uppercase tracking-wider text-muted">Products</p>
      <ul class="mt-1">
        {#each products as p}
          <li>
            <a href="/products#{p.id}" on:click={close} class="flex items-center justify-between border-b border-line py-3.5 font-display text-lg font-semibold text-ink">
              {p.name}
              <ArrowUpRight class="h-5 w-5 text-mari-deep" />
            </a>
          </li>
        {/each}
      </ul>
      <p class="mt-6 font-mono text-xs uppercase tracking-wider text-muted">Company</p>
      <ul class="mt-1">
        {#each menuItems as item}
          <li>
            <a href={item.href} on:click={close} class="block border-b border-line py-3.5 font-display text-lg font-semibold text-ink">
              {item.name}
            </a>
          </li>
        {/each}
      </ul>
      <a href="/#contact" on:click={close} class="btn btn-ink mt-6 w-full">Start a project</a>
    </div>
  {/if}
</header>
