<script lang="ts">
  import { ArrowRight, ArrowUpRight, Check, ChevronRight, MonitorSmartphone } from 'lucide-svelte';
  import Navigation from '$components/Navigation.svelte';
  import Contact from '$components/Contact.svelte';
  import Footer from '$components/Footer.svelte';
  import Seo from '$components/Seo.svelte';
  import { reveal } from '@/lib/reveal';
  import { products } from '@/lib/products';
  import { organizationSchema, productListSchema, breadcrumbSchema, absolute } from '@/lib/seo';

  const schema = [
    organizationSchema(),
    productListSchema(products.map((p) => ({ ...p, url: absolute(`/products/${p.id}`) }))),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Products', path: '/products' }
    ])
  ];

  const hostOf = (url: string) => new URL(url).host;
</script>

<Seo
  title="Software Products: NamasteBill POS & DBHub | Namaste Soft"
  description="Ready-to-use software from Namaste Soft: NamasteBill POS billing for supermarkets and retail shops, and DBHub, a browser-based IDE for your databases."
  path="/products"
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
          <li aria-current="page" class="font-medium text-ink">Products</li>
        </ol>
      </nav>

      <p class="eyebrow mt-10 text-muted">Our products</p>
      <h1 class="mt-5 max-w-4xl text-[clamp(2.4rem,5.5vw,4.25rem)] font-extrabold leading-[1.02] text-ink">
        Software we build and run ourselves
      </h1>
      <p class="mt-7 max-w-2xl text-lg leading-relaxed text-muted">
        Alongside custom projects, we build ready-to-use software for shops and developers. Pick a product to see
        what it does, then try it on its own site.
      </p>

      <ul class="mt-10 flex flex-wrap gap-3">
        {#each products as p}
          <li>
            <a href="#{p.id}" class="inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-2.5 text-[0.95rem] font-medium text-ink transition-colors hover:border-ink">
              {p.name}
            </a>
          </li>
        {/each}
      </ul>
    </div>
  </section>

  {#each products as p, i}
    <section id={p.id} class="scroll-mt-20 py-20 lg:py-24 {i % 2 === 0 ? 'bg-sand' : ''}">
      <div class="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:gap-16 lg:px-8">
        <div use:reveal>
          <span class="font-mono text-xs text-muted">0{i + 1} / 0{products.length}</span>
          <h2 class="mt-4 text-3xl font-bold leading-tight text-ink sm:text-4xl">{p.name}</h2>
          <p class="mt-2 font-display text-lg font-semibold text-mari-deep">{p.tagline}</p>
          <p class="mt-5 text-lg leading-relaxed text-muted">{p.description}</p>

          <div class="mt-6 flex items-start gap-3 text-sm text-muted">
            <MonitorSmartphone class="mt-0.5 h-4 w-4 shrink-0 text-ink" />
            <span>{p.platforms.join(' · ')}</span>
          </div>

          <div class="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="/products/{p.id}" class="btn btn-ink group">
              {p.name} features &amp; FAQ
              <ArrowRight class="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a href={p.url} target="_blank" rel="noopener" class="btn btn-line group" data-track="product_site_click" data-track-label={p.name}>
              Visit {hostOf(p.url)}
              <ArrowUpRight class="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          <h3 class="mt-10 font-mono text-xs uppercase tracking-wider text-muted">Made for</h3>
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

        <ul class="grid gap-px self-start overflow-hidden rounded-[1.75rem] border border-line bg-line sm:grid-cols-2">
          {#each p.features as f, j}
            <li class="bg-paper p-7" use:reveal={(j % 2) * 0.08}>
              <h3 class="text-lg font-bold text-ink">{f.title}</h3>
              <p class="mt-2 leading-relaxed text-muted">{f.text}</p>
            </li>
          {/each}
        </ul>
      </div>
    </section>
  {/each}

  <Contact />
</main>

<Footer />
