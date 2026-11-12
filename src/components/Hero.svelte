<script lang="ts">
  import { ArrowRight, MessageCircle } from 'lucide-svelte';
  import { config } from '@/lib/config';
  import { generateWhatsAppLink } from '@/lib/utils';

  const whatsappUrl = generateWhatsAppLink(
    config.whatsapp.supportNumber,
    `Hi! I would like to discuss a project with ${config.company.name}.`
  );

  const stats = [
    { number: config.stats.projects, label: 'Projects delivered' },
    { number: config.stats.years, label: 'Years of experience' },
    { number: '24/7', label: 'Support' }
  ];

  const steps = [
    { title: 'Requirement gathering', text: 'We understand your goals and define clear deliverables.' },
    { title: 'Design & development', text: 'Modern UI/UX on a scalable backend, shared with you as we build.' },
    { title: 'Testing & delivery', text: 'Rigorous testing and performance tuning, delivered on time.' }
  ];

  const marquee = [
    'Websites',
    'Web applications',
    'Mobile apps',
    'AI & ML',
    'WhatsApp automation',
    'Desktop software',
    'Technical support'
  ];
</script>

<section id="home" class="relative overflow-hidden pt-18">
  <!-- soft warm glow, top right -->
  <div
    class="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-mari-soft opacity-70 blur-3xl"
    aria-hidden="true"
  ></div>

  <div class="relative mx-auto grid max-w-7xl items-center gap-14 px-4 pb-20 pt-14 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:px-8 lg:pb-28 lg:pt-24">
    <div>
      <!-- The H1 carries the target keyword (small line) and the brand headline (large line). -->
      <h1 class="text-ink">
        <span class="eyebrow flex font-normal tracking-[0.08em] text-muted">Software &amp; website development company</span>
        <span class="mt-6 block text-[clamp(2.75rem,7vw,5.25rem)] font-extrabold leading-[0.98]">
          Namaste.<br />
          Let’s build something
          <span class="relative whitespace-nowrap text-verm">
            that works.
            <svg class="absolute -bottom-2 left-0 h-3 w-full" viewBox="0 0 300 12" preserveAspectRatio="none" aria-hidden="true">
              <path d="M2 9C60 3 140 2 298 7" fill="none" stroke="#F4900C" stroke-width="4" stroke-linecap="round" />
            </svg>
          </span>
        </span>
      </h1>

      <p class="mt-8 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
        We’re a software company building websites, web apps, mobile apps and AI-powered automation for
        startups and growing businesses, and turning ideas into software people actually use.
      </p>

      <div class="mt-10 flex flex-col gap-3 sm:flex-row">
        <a href="#contact" class="btn btn-ink group">
          Get a free consultation
          <ArrowRight class="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </a>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" class="btn btn-line">
          <MessageCircle class="h-5 w-5" />
          WhatsApp us
        </a>
      </div>

      <dl class="mt-14 grid max-w-lg grid-cols-3 divide-x divide-line border-y border-line">
        {#each stats as stat}
          <div class="px-4 py-5 first:pl-0">
            <dt class="sr-only">{stat.label}</dt>
            <dd class="font-display text-3xl font-bold text-ink sm:text-4xl">{stat.number}</dd>
            <dd class="mt-1 text-sm text-muted">{stat.label}</dd>
          </div>
        {/each}
      </dl>
    </div>

    <!-- How we work -->
    <div class="relative">
      <div class="relative overflow-hidden rounded-[2rem] bg-ink p-8 text-white shadow-[0_30px_60px_-20px_rgb(26_22_51/0.45)] sm:p-10">
        <div class="jaali pointer-events-none absolute inset-0 opacity-[0.045]" aria-hidden="true"></div>
        <div class="relative">
          <div class="flex items-center justify-between">
            <h2 class="font-display text-2xl font-bold">How we work</h2>
            <span class="font-mono text-xs text-mist">3 steps</span>
          </div>

          <ol class="mt-8 space-y-0">
            {#each steps as step, i}
              <li class="relative flex gap-5 pb-8 last:pb-0">
                {#if i < steps.length - 1}
                  <span class="absolute left-[1.15rem] top-11 h-[calc(100%-2.75rem)] w-px bg-ink-3" aria-hidden="true"></span>
                {/if}
                <span
                  class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-mono text-sm font-medium
                    {i === 0 ? 'bg-mari text-ink' : i === 1 ? 'bg-verm text-white' : 'bg-white text-ink'}"
                >
                  0{i + 1}
                </span>
                <div class="pt-1">
                  <h3 class="text-lg font-semibold">{step.title}</h3>
                  <p class="mt-1 text-[0.95rem] leading-relaxed text-mist">{step.text}</p>
                </div>
              </li>
            {/each}
          </ol>

          <div class="mt-10 flex items-center gap-3 rounded-2xl bg-ink-2 px-5 py-4 text-sm text-mist">
            <span class="relative flex h-2.5 w-2.5">
              <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-leaf opacity-60 motion-reduce:hidden"></span>
              <span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-leaf"></span>
            </span>
            Free first consultation, no obligation.
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- service ticker -->
  <div class="relative overflow-hidden border-y border-ink bg-ink py-4 text-white">
    <div class="flex w-max animate-marquee">
      {#each [0, 1] as copy}
        <ul class="flex shrink-0 items-center" aria-hidden={copy === 1 ? 'true' : undefined}>
          {#each marquee as item}
            <li class="flex items-center font-display text-lg font-semibold whitespace-nowrap sm:text-xl">
              <span class="px-7">{item}</span>
              <svg viewBox="12 0 40 61" class="h-5 w-auto" aria-hidden="true">
                <path d="M22.1 60H17Q14 60 14 57V35C14 24.5 22 15 32 9C33.55 9.93 35.06 10.95 36.49 12.04Z" fill="#F4900C" />
                <path d="M26.3 60L39.84 14.85C45.87 20.43 50 27.46 50 35V57Q50 60 47 60Z" fill="#E4472B" />
              </svg>
            </li>
          {/each}
        </ul>
      {/each}
    </div>
  </div>
</section>
