<script lang="ts">
  import { ArrowRight, ArrowUpRight, Check, ChevronRight } from 'lucide-svelte';
  import Navigation from '$components/Navigation.svelte';
  import Contact from '$components/Contact.svelte';
  import Footer from '$components/Footer.svelte';
  import Seo from '$components/Seo.svelte';
  import { reveal } from '@/lib/reveal';
  import { config } from '@/lib/config';
  import { profile } from '@/lib/profile';
  import { organizationSchema, aboutPageSchema, breadcrumbSchema } from '@/lib/seo';

  const schema = [
    organizationSchema(),
    aboutPageSchema(),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' }
    ])
  ];

  const pad = (n: number) => String(n).padStart(2, '0');
</script>

<Seo
  title="About Namaste Soft | Software Development Company in Bengaluru"
  description="Learn about Namaste Soft, a Bengaluru software development company: our expertise, technologies, industries, projects and approach to building business solutions."
  path="/about"
  {schema}
/>

<Navigation />

<main>
  <section class="relative overflow-hidden pt-18">
    <div class="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-mari-soft opacity-70 blur-3xl" aria-hidden="true"></div>

    <div class="relative mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-14">
      <nav aria-label="Breadcrumb">
        <ol class="flex items-center gap-1.5 text-sm text-muted">
          <li><a href="/" class="hover:text-ink">Home</a></li>
          <li aria-hidden="true"><ChevronRight class="h-3.5 w-3.5" /></li>
          <li aria-current="page" class="font-medium text-ink">About</li>
        </ol>
      </nav>

      <div class="mt-10 grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-end">
        <div>
          <p class="eyebrow text-muted">About {config.company.name}</p>
          <h1 class="mt-5 text-[clamp(2.4rem,5.5vw,4.25rem)] font-extrabold leading-[1.02] text-ink">
            Software development &amp; digital solutions company in Bengaluru
          </h1>
          <p class="mt-6 font-display text-xl font-semibold text-mari-deep">{profile.slogan}</p>
          <div class="mt-7 max-w-2xl space-y-4 text-lg leading-relaxed text-muted">
            {#each profile.overview as p}<p>{p}</p>{/each}
          </div>
        </div>

        <dl class="grid grid-cols-2 overflow-hidden rounded-[1.75rem] border border-line bg-white">
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
          <p class="col-span-2 border-t border-line px-7 py-5 text-sm text-muted">
            Based in {config.company.city} · <strong class="font-semibold text-ink">serving clients across India</strong>
          </p>
        </dl>
      </div>
    </div>
  </section>

  <section class="bg-sand py-20 lg:py-28">
    <div class="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
      <div class="rounded-[2rem] bg-ink p-8 text-white sm:p-10" use:reveal>
        <h2 class="eyebrow text-mist">Our vision</h2>
        <p class="mt-6 font-display text-2xl font-bold leading-snug sm:text-3xl">{profile.vision}</p>
      </div>
      <div class="rounded-[2rem] border border-line bg-paper p-8 sm:p-10" use:reveal={0.1}>
        <h2 class="eyebrow text-muted">Our mission</h2>
        <ul class="mt-6 space-y-4">
          {#each profile.mission as m}
            <li class="flex items-start gap-3 text-lg text-ink">
              <span class="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mari">
                <Check class="h-3 w-3 text-ink" strokeWidth={3} />
              </span>
              {m}
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </section>

  <section class="py-20 lg:py-28">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div use:reveal>
        <p class="eyebrow text-muted">What we do</p>
        <h2 class="mt-5 max-w-3xl text-3xl font-bold leading-tight text-ink sm:text-4xl">Our core services</h2>
      </div>
      <ul class="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {#each profile.capabilities as c, i}
          <li class="flex flex-col rounded-[1.75rem] border border-line bg-white p-8" use:reveal={(i % 3) * 0.08}>
            <span class="font-mono text-xs text-muted">{pad(i + 1)}</span>
            <h3 class="mt-4 text-xl font-bold text-ink">{c.name}</h3>
            <ul class="mb-6 mt-4 space-y-2 text-[0.95rem] text-muted">
              {#each c.items as item}<li class="flex gap-2"><span class="text-mari-deep" aria-hidden="true">·</span>{item}</li>{/each}
            </ul>
            <a
              href={c.page}
              class="group mt-auto inline-flex items-center gap-2 font-semibold text-ink underline decoration-mari decoration-2 underline-offset-[6px] hover:text-verm-deep"
            >
              {c.name}
              <ArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </li>
        {/each}
      </ul>
    </div>
  </section>

  <section class="bg-sand py-20 lg:py-28">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div use:reveal>
        <p class="eyebrow text-muted">Industries</p>
        <h2 class="mt-5 max-w-3xl text-3xl font-bold leading-tight text-ink sm:text-4xl">Industries we serve</h2>
      </div>
      <ul class="mt-12 grid gap-px overflow-hidden rounded-[1.75rem] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {#each profile.industries as ind, i}
          <li class="bg-paper p-8" use:reveal={(i % 3) * 0.08}>
            <h3 class="text-xl font-bold text-ink">{ind.name}</h3>
            <ul class="mt-4 space-y-2 text-muted">
              {#each ind.items as item}<li>{item}</li>{/each}
            </ul>
          </li>
        {/each}
      </ul>
    </div>
  </section>

  <section class="py-20 lg:py-28">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div use:reveal>
        <p class="eyebrow text-muted">Technology</p>
        <h2 class="mt-5 max-w-3xl text-3xl font-bold leading-tight text-ink sm:text-4xl">Our technology expertise</h2>
      </div>
      <dl class="mt-12 divide-y divide-line border-y border-line">
        {#each profile.technologies as t}
          <div class="grid gap-4 py-6 md:grid-cols-[14rem_1fr]">
            <dt class="font-display text-lg font-semibold text-ink">{t.group}</dt>
            <dd>
              <ul class="flex flex-wrap gap-2">
                {#each t.items as item}
                  <li class="rounded-full border border-line bg-white px-3 py-1 text-sm text-ink/80">{item}</li>
                {/each}
              </ul>
            </dd>
          </div>
        {/each}
      </dl>
    </div>
  </section>

  <section class="py-20 lg:py-28">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="rounded-[2rem] bg-ink p-8 text-white sm:p-12" use:reveal>
        <h2 class="font-display text-3xl font-bold sm:text-4xl">Our development process</h2>
        <ol class="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {#each profile.process as step, i}
            <li class="flex gap-5">
              <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink-2 font-mono text-sm text-mari ring-1 ring-ink-3">{pad(i + 1)}</span>
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
    <div class="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
      <div use:reveal>
        <p class="eyebrow text-muted">Why us</p>
        <h2 class="mt-5 text-3xl font-bold leading-tight text-ink sm:text-4xl">Why choose {config.company.name}?</h2>
        <ul class="mt-8 space-y-5">
          {#each profile.whyChoose as w}
            <li>
              <h3 class="font-display text-lg font-semibold text-ink">{w.title}</h3>
              <p class="mt-1 text-muted">{w.text}</p>
            </li>
          {/each}
        </ul>
      </div>

      <div use:reveal={0.1}>
        <p class="eyebrow text-muted">Working together</p>
        <h2 class="mt-5 text-3xl font-bold leading-tight text-ink sm:text-4xl">Engagement models</h2>
        <ul class="mt-8 grid gap-px overflow-hidden rounded-[1.75rem] border border-line bg-line">
          {#each profile.engagementModels as e}
            <li class="bg-paper p-6">
              <h3 class="font-display text-lg font-semibold text-ink">{e.title}</h3>
              <p class="mt-1 text-muted">{e.text}</p>
            </li>
          {/each}
        </ul>

        <h3 class="mt-12 font-mono text-xs uppercase tracking-wider text-muted">Our commitment</h3>
        <ul class="mt-4 space-y-3">
          {#each profile.commitments as c}
            <li class="flex items-start gap-3 text-ink">
              <span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mari">
                <Check class="h-3 w-3 text-ink" strokeWidth={3} />
              </span>
              {c}
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </section>

  <section class="border-t border-line py-16">
    <div class="mx-auto flex max-w-7xl flex-col gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
      <a href="/portfolio" class="btn btn-ink group">
        See our portfolio
        <ArrowRight class="h-5 w-5 transition-transform group-hover:translate-x-1" />
      </a>
      <a href="/products" class="btn btn-line">
        Our products
        <ArrowUpRight class="h-5 w-5" />
      </a>
    </div>
  </section>

  <Contact />
</main>

<Footer />
