<script lang="ts">
  import { ArrowRight, ArrowUpRight, Check, ChevronRight, MessageCircle, MonitorSmartphone } from 'lucide-svelte';
  import Navigation from '$components/Navigation.svelte';
  import Contact from '$components/Contact.svelte';
  import Footer from '$components/Footer.svelte';
  import Seo from '$components/Seo.svelte';
  import FaqList from '$components/FaqList.svelte';
  import { config } from '@/lib/config';
  import { generateWhatsAppLink } from '@/lib/utils';
  import { projectType, discuss } from '@/lib/contactPrefill';
  import { reveal } from '@/lib/reveal';
  import { products } from '@/lib/products';
  import { getServicePage } from '@/lib/services';
  import { organizationSchema, softwareApplicationSchema, faqSchema, breadcrumbSchema } from '@/lib/seo';
  import type { PageData } from './$types';

  export let data: PageData;

  $: p = data.product;
  $: path = `/products/${p.id}`;
  $: projectType.set(`${p.name} enquiry`);
  $: demoUrl = generateWhatsAppLink(config.whatsapp.supportNumber, p.demoMessage);
  $: services = p.services.map(getServicePage).filter((s) => s !== undefined);
  $: others = products.filter((o) => o.id !== p.id);
  $: host = new URL(p.url).host;
  $: schema = [
    organizationSchema(),
    softwareApplicationSchema(p),
    faqSchema(p.faqs),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Products', path: '/products' },
      { name: p.name, path }
    ])
  ];
</script>

<Seo title={p.title} description={p.metaDescription} {path} {schema} />

<Navigation />

<main>
  <section class="relative overflow-hidden pt-18">
    <div class="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-mari-soft opacity-70 blur-3xl" aria-hidden="true"></div>

    <div class="relative mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-14">
      <nav aria-label="Breadcrumb">
        <ol class="flex items-center gap-1.5 text-sm text-muted">
          <li><a href="/" class="hover:text-ink">Home</a></li>
          <li aria-hidden="true"><ChevronRight class="h-3.5 w-3.5" /></li>
          <li><a href="/products" class="hover:text-ink">Products</a></li>
          <li aria-hidden="true"><ChevronRight class="h-3.5 w-3.5" /></li>
          <li aria-current="page" class="font-medium text-ink">{p.name}</li>
        </ol>
      </nav>

      <div class="mt-10 grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
        <div>
          <p class="eyebrow text-muted">A product by {config.company.name}</p>
          <h1 class="mt-5 text-[clamp(2.4rem,5.5vw,4.25rem)] font-extrabold leading-[1.02] text-ink">
            {p.name}<span class="mt-3 block text-[0.5em] font-bold leading-tight text-mari-deep">{p.tagline}</span>
          </h1>
          <div class="mt-7 max-w-2xl space-y-4 text-lg leading-relaxed text-muted">
            {#each p.overview as para}<p>{para}</p>{/each}
          </div>
          <div class="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={demoUrl} target="_blank" rel="noopener noreferrer" class="btn btn-ink" data-track="demo_request_click" data-track-label={p.name}>
              <MessageCircle class="h-5 w-5" />
              {p.id === 'namastebill' ? 'Request a demo' : 'Ask about ' + p.name}
            </a>
            <a href={p.url} target="_blank" rel="noopener" class="btn btn-line group" data-track="product_site_click" data-track-label={p.name}>
              Visit {host}
              <ArrowUpRight class="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        <div class="overflow-hidden rounded-[1.75rem] border border-line bg-white">
          <div class="border-b border-line p-7">
            <h2 class="font-mono text-xs uppercase tracking-wider text-muted">Runs on</h2>
            <p class="mt-3 flex items-start gap-3 text-ink">
              <MonitorSmartphone class="mt-0.5 h-5 w-5 shrink-0" />
              {p.platforms.join(' · ')}
            </p>
          </div>
          <div class="p-7">
            <h2 class="font-mono text-xs uppercase tracking-wider text-muted">Made for</h2>
            <ul class="mt-4 space-y-3">
              {#each p.audience as a}
                <li class="flex items-start gap-3 text-ink">
                  <span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mari">
                    <Check class="h-3 w-3 text-ink" strokeWidth={3} />
                  </span>
                  {a}
                </li>
              {/each}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-sand py-20 lg:py-28">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div use:reveal>
        <p class="eyebrow text-muted">Features</p>
        <h2 class="mt-5 max-w-3xl text-3xl font-bold leading-tight text-ink sm:text-4xl">What {p.name} does</h2>
      </div>
      <ul class="mt-12 grid gap-px overflow-hidden rounded-[1.75rem] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {#each p.features as f, i}
          <li class="bg-paper p-8" use:reveal={(i % 3) * 0.08}>
            <span class="font-mono text-xs text-muted">0{i + 1}</span>
            <h3 class="mt-4 text-xl font-bold text-ink">{f.title}</h3>
            <p class="mt-2 leading-relaxed text-muted">{f.text}</p>
          </li>
        {/each}
      </ul>
    </div>
  </section>

  {#if p.screenshots?.length}
    <section class="py-20 lg:py-28">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold leading-tight text-ink sm:text-4xl">{p.name} screenshots</h2>
        <ul class="mt-10 grid gap-6 md:grid-cols-2">
          {#each p.screenshots as s}
            <li class="overflow-hidden rounded-[1.75rem] border border-line bg-white">
              <img src={s.src} alt={s.alt} width={s.width} height={s.height} loading="lazy" decoding="async" class="h-auto w-full" />
            </li>
          {/each}
        </ul>
      </div>
    </section>
  {/if}

  <section class="{p.screenshots?.length ? 'bg-sand' : ''} py-20 lg:py-28">
    <div class="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_2fr] lg:px-8">
      <div>
        <p class="eyebrow text-muted">FAQ</p>
        <h2 class="mt-5 text-3xl font-bold leading-tight text-ink sm:text-4xl">{p.name} questions</h2>
        <button
          type="button"
          on:click={() => discuss(`${p.name} enquiry`)}
          class="mt-8 inline-flex items-center gap-2 font-semibold text-ink underline decoration-mari decoration-2 underline-offset-[6px] hover:text-verm-deep"
          data-track="product_enquiry_click"
          data-track-label={p.name}
        >
          Ask us about {p.name}
          <ArrowRight class="h-4 w-4" />
        </button>
      </div>
      <FaqList faqs={p.faqs} />
    </div>
  </section>

  <Contact />

  <section class="border-t border-line py-16">
    <div class="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
      <div>
        <h2 class="font-mono text-xs uppercase tracking-wider text-muted">Need something custom?</h2>
        <ul class="mt-5 space-y-4">
          {#each services as s}
            <li>
              <a href="/{s.slug}" class="group flex items-center justify-between rounded-2xl border border-line bg-white px-6 py-5 font-display text-lg font-semibold text-ink transition-colors hover:border-ink">
                {s.h1}
                <ArrowRight class="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </li>
          {/each}
        </ul>
      </div>
      <div>
        <h2 class="font-mono text-xs uppercase tracking-wider text-muted">More from {config.company.name}</h2>
        <ul class="mt-5 space-y-4">
          {#each others as o}
            <li>
              <a href="/products/{o.id}" class="group flex items-center justify-between rounded-2xl border border-line bg-white px-6 py-5 text-ink transition-colors hover:border-ink">
                <span>
                  <span class="block font-display text-lg font-semibold">{o.name}</span>
                  <span class="block text-sm text-muted">{o.tagline}</span>
                </span>
                <ArrowRight class="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
              </a>
            </li>
          {/each}
          <li>
            <a href="/portfolio" class="group flex items-center justify-between rounded-2xl border border-line bg-white px-6 py-5 font-display text-lg font-semibold text-ink transition-colors hover:border-ink">
              Our portfolio of client projects
              <ArrowRight class="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</main>

<Footer />
