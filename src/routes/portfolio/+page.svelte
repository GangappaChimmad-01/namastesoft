<script lang="ts">
  import { ArrowRight, ArrowUpRight, Check, ChevronRight, MonitorSmartphone } from 'lucide-svelte';
  import Navigation from '$components/Navigation.svelte';
  import Contact from '$components/Contact.svelte';
  import Footer from '$components/Footer.svelte';
  import Seo from '$components/Seo.svelte';
  import { reveal } from '@/lib/reveal';
  import { projects } from '@/lib/projects';
  import { getServicePage } from '@/lib/services';
  import { organizationSchema, portfolioSchema, breadcrumbSchema } from '@/lib/seo';

  const schema = [
    organizationSchema(),
    portfolioSchema(projects),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Portfolio', path: '/portfolio' }
    ])
  ];

  const hostOf = (url: string) => new URL(url).host;
  const pad = (n: number) => String(n).padStart(2, '0');
</script>

<Seo
  title="Portfolio: Web Apps, Mobile Apps & Websites | Namaste Soft"
  description="Live projects by Namaste Soft: an e-commerce website, an energy monitoring web app, Android apps on Google Play and NamasteBill POS software, with tech stacks."
  path="/portfolio"
  {schema}
/>

<Navigation />

<main>
  <section class="relative overflow-hidden pt-18">
    <div class="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-mari-soft opacity-70 blur-3xl" aria-hidden="true"></div>

    <div class="relative mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-20 lg:pt-14">
      <nav aria-label="Breadcrumb">
        <ol class="flex items-center gap-1.5 text-sm text-muted">
          <li><a href="/" class="hover:text-ink">Home</a></li>
          <li aria-hidden="true"><ChevronRight class="h-3.5 w-3.5" /></li>
          <li aria-current="page" class="font-medium text-ink">Portfolio</li>
        </ol>
      </nav>

      <p class="eyebrow mt-10 text-muted">Portfolio</p>
      <h1 class="mt-5 max-w-4xl text-[clamp(2.4rem,5.5vw,4.25rem)] font-extrabold leading-[1.02] text-ink">
        Selected projects, live and in use
      </h1>
      <p class="mt-7 max-w-2xl text-lg leading-relaxed text-muted">
        Websites, web applications, Android apps and our own software, each live today. Pick a project to see what
        it does and the technology behind it.
      </p>

      <ul class="mt-10 flex flex-wrap gap-3">
        {#each projects as p}
          <li>
            <a href="#{p.id}" class="inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-2.5 text-[0.95rem] font-medium text-ink transition-colors hover:border-ink">
              {p.name}
            </a>
          </li>
        {/each}
      </ul>
    </div>
  </section>

  {#each projects as p, i}
    <section id={p.id} class="scroll-mt-20 py-20 lg:py-24 {i % 2 === 0 ? 'bg-sand' : ''}">
      <article class="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:gap-16 lg:px-8">
        <div use:reveal>
          <span class="font-mono text-xs text-muted">{pad(i + 1)} / {pad(projects.length)}</span>
          <h2 class="mt-4 text-3xl font-bold leading-tight text-ink sm:text-4xl">{p.name}</h2>
          <p class="mt-2 font-display text-lg font-semibold text-mari-deep">{p.type} · {p.status}</p>
          {#if p.client}<p class="mt-3 text-sm text-muted">Client: <span class="font-medium text-ink">{p.client}</span></p>{/if}
          <p class="mt-5 text-lg leading-relaxed text-muted">{p.overview}</p>

          <div class="mt-6 flex items-start gap-3 text-sm text-muted">
            <MonitorSmartphone class="mt-0.5 h-4 w-4 shrink-0 text-ink" />
            <span>{p.platform}</span>
          </div>

          {#if p.url}
            <a href={p.url} target="_blank" rel="noopener" class="btn btn-ink group mt-8">
              Visit {hostOf(p.url)}
              <ArrowUpRight class="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          {/if}

          <h3 class="mt-10 font-mono text-xs uppercase tracking-wider text-muted">Technology stack</h3>
          <dl class="mt-4 grid grid-cols-[auto_1fr] gap-x-6 gap-y-2">
            {#each p.stack as s}
              <dt class="text-muted">{s.label}</dt>
              <dd class="font-medium text-ink">{s.value}</dd>
            {/each}
          </dl>

          <h3 class="mt-10 font-mono text-xs uppercase tracking-wider text-muted">Related services</h3>
          <ul class="mt-4 flex flex-wrap gap-x-6 gap-y-3">
            {#each p.services.map(getServicePage).filter((s) => s !== undefined) as s}
              <li>
                <a href="/{s.slug}" class="group inline-flex items-center gap-2 font-semibold text-ink underline decoration-mari decoration-2 underline-offset-[6px] hover:text-verm-deep">
                  {s.name}
                  <ArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </li>
            {/each}
          </ul>
        </div>

        <div class="self-start">
          <h3 class="sr-only">Key features</h3>
          <ul class="grid gap-px overflow-hidden rounded-[1.75rem] border border-line bg-line sm:grid-cols-2">
            {#each p.features as f, j}
              <li class="flex items-start gap-3 bg-paper p-6" use:reveal={(j % 2) * 0.08}>
                <span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mari">
                  <Check class="h-3 w-3 text-ink" strokeWidth={3} />
                </span>
                <span class="leading-relaxed text-ink">{f}</span>
              </li>
            {/each}
          </ul>
        </div>
      </article>
    </section>
  {/each}

  <Contact />
</main>

<Footer />
