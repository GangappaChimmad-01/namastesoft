<script lang="ts">
  import { ArrowRight, Check, ChevronRight, MessageCircle } from 'lucide-svelte';
  import Navigation from '$components/Navigation.svelte';
  import Contact from '$components/Contact.svelte';
  import Footer from '$components/Footer.svelte';
  import Seo from '$components/Seo.svelte';
  import FaqList from '$components/FaqList.svelte';
  import { config } from '@/lib/config';
  import { generateWhatsAppLink } from '@/lib/utils';
  import { projectType } from '@/lib/contactPrefill';
  import { reveal } from '@/lib/reveal';
  import { getServicePage } from '@/lib/services';
  import { organizationSchema, serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/seo';
  import type { PageData } from './$types';

  export let data: PageData;

  $: page = data.page;
  $: path = `/${page.slug}`;
  $: projectType.set(page.name);
  $: related = page.related.map(getServicePage).filter((p) => p !== undefined);
  $: whatsappUrl = generateWhatsAppLink(
    config.whatsapp.supportNumber,
    `Hi! I'd like to discuss ${page.name.toLowerCase()} with ${config.company.name}.`
  );
  $: schema = [
    organizationSchema(),
    serviceSchema({ name: page.h1, description: page.description, path, serviceType: page.serviceType }),
    faqSchema(page.faqs),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: page.name, path }
    ])
  ];
</script>

<Seo title={page.title} description={page.description} {path} {schema} />

<Navigation />

<main>
  <section class="relative overflow-hidden pt-18">
    <div class="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-mari-soft opacity-70 blur-3xl" aria-hidden="true"></div>

    <div class="relative mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-14">
      <nav aria-label="Breadcrumb">
        <ol class="flex items-center gap-1.5 text-sm text-muted">
          <li><a href="/" class="hover:text-ink">Home</a></li>
          <li aria-hidden="true"><ChevronRight class="h-3.5 w-3.5" /></li>
          <li aria-current="page" class="font-medium text-ink">{page.name}</li>
        </ol>
      </nav>

      <div class="mt-10 grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
        <div>
          <p class="eyebrow text-muted">{page.eyebrow}</p>
          <h1 class="mt-5 text-[clamp(2.4rem,5.5vw,4.25rem)] font-extrabold leading-[1.02] text-ink">{page.h1}</h1>
          <div class="mt-7 max-w-2xl space-y-4 text-lg leading-relaxed text-muted">
            {#each page.intro as p}<p>{p}</p>{/each}
          </div>
          <div class="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" class="btn btn-ink group">
              Get a free consultation
              <ArrowRight class="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" class="btn btn-line">
              <MessageCircle class="h-5 w-5" />
              WhatsApp us
            </a>
          </div>
        </div>

        <div class="overflow-hidden rounded-[1.75rem] border border-line bg-white">
          <dl class="grid grid-cols-2">
            <div class="border-r border-line p-7">
              <dt class="sr-only">Projects delivered</dt>
              <dd class="font-display text-5xl font-extrabold text-verm">{config.stats.projects}</dd>
              <dd class="mt-2 text-sm text-muted">Projects delivered</dd>
            </div>
            <div class="p-7">
              <dt class="sr-only">Years of experience</dt>
              <dd class="font-display text-5xl font-extrabold text-ink">{config.stats.years}</dd>
              <dd class="mt-2 text-sm text-muted">Years of experience</dd>
            </div>
          </dl>
          <p class="border-t border-line px-7 py-5 text-sm text-muted">
            Free first consultation · <strong class="font-semibold text-ink">no obligation</strong>
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-sand py-20 lg:py-28">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div use:reveal>
        <p class="eyebrow text-muted">What we offer</p>
        <h2 class="mt-5 max-w-3xl text-3xl font-bold leading-tight text-ink sm:text-4xl">
          {page.name}: what’s included
        </h2>
      </div>
      <ul class="mt-12 grid gap-px overflow-hidden rounded-[1.75rem] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {#each page.offerings as o, i}
          <li class="bg-paper p-8" use:reveal={(i % 3) * 0.08}>
            <span class="font-mono text-xs text-muted">0{i + 1}</span>
            <h3 class="mt-4 text-xl font-bold text-ink">{o.title}</h3>
            <p class="mt-2 leading-relaxed text-muted">{o.text}</p>
          </li>
        {/each}
      </ul>
    </div>
  </section>

  <section class="py-20 lg:py-28">
    <div class="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
      <div use:reveal>
        <p class="eyebrow text-muted">Who it’s for</p>
        <h2 class="mt-5 text-3xl font-bold leading-tight text-ink sm:text-4xl">Built for businesses like yours</h2>
        <ul class="mt-8 space-y-4">
          {#each page.forWho as item}
            <li class="flex items-start gap-3 text-lg text-ink">
              <span class="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mari">
                <Check class="h-3 w-3 text-ink" strokeWidth={3} />
              </span>
              {item}
            </li>
          {/each}
        </ul>
      </div>

      <div class="rounded-[2rem] bg-ink p-8 text-white sm:p-10" use:reveal={0.1}>
        <h2 class="font-display text-2xl font-bold">How we work</h2>
        <ol class="mt-8 space-y-7">
          {#each page.approach as step, i}
            <li class="flex gap-5">
              <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink-2 font-mono text-sm text-mari ring-1 ring-ink-3">0{i + 1}</span>
              <div>
                <h3 class="text-lg font-semibold">{step.title}</h3>
                <p class="mt-1 leading-relaxed text-mist">{step.text}</p>
              </div>
            </li>
          {/each}
        </ol>
      </div>
    </div>
  </section>

  <section class="bg-sand py-20 lg:py-28">
    <div class="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_2fr] lg:px-8">
      <div>
        <p class="eyebrow text-muted">FAQ</p>
        <h2 class="mt-5 text-3xl font-bold leading-tight text-ink sm:text-4xl">Common questions</h2>
      </div>
      <FaqList faqs={page.faqs} />
    </div>
  </section>

  <Contact />

  <section class="border-t border-line py-16">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 class="font-mono text-xs uppercase tracking-wider text-muted">Related services</h2>
      <ul class="mt-5 grid gap-4 sm:grid-cols-2">
        {#each related as r}
          <li>
            <a
              href="/{r.slug}"
              class="group flex items-center justify-between rounded-2xl border border-line bg-white px-6 py-5 font-display text-lg font-semibold text-ink transition-colors hover:border-ink"
            >
              {r.h1}
              <ArrowRight class="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </li>
        {/each}
      </ul>
    </div>
  </section>
</main>

<Footer />
