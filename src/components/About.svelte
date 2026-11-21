<script lang="ts">
  import { Trophy, Zap, LifeBuoy, Target, Lightbulb, ShieldCheck } from 'lucide-svelte';
  import { reveal } from '@/lib/reveal';
  import { config } from '@/lib/config';

  const stats = [
    { value: config.stats.projects, label: 'Projects delivered' },
    { value: config.stats.years, label: 'Years of experience' },
    { value: '24/7', label: 'Support available' },
    { value: '100%', label: 'Client satisfaction' }
  ];

  const principles = [
    { icon: Trophy, title: 'Quality first', text: 'Solutions that exceed expectations and stand the test of time.' },
    { icon: Zap, title: 'Fast delivery', text: 'Quick turnaround without compromising on quality or functionality.' },
    { icon: LifeBuoy, title: 'Dedicated support', text: 'Round-the-clock support and maintenance to keep things running.' },
    { icon: Target, title: 'Goal-oriented', text: 'We focus on your business objectives and build for real results.' },
    { icon: Lightbulb, title: 'Innovation', text: 'We stay ahead of technology trends so your product does too.' },
    { icon: ShieldCheck, title: 'Reliability', text: 'Robust, secure and maintainable software you can depend on.' }
  ];
</script>

<section id="about" class="py-24 lg:py-32">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="grid gap-14 lg:grid-cols-2 lg:gap-20">
      <div use:reveal>
        <p class="eyebrow text-muted">01 — About us</p>
        <h2 class="mt-5 text-4xl font-bold leading-[1.05] text-ink sm:text-5xl">
          Your trusted technology partner.
        </h2>
        <div class="mt-8 space-y-5 text-lg leading-relaxed text-muted">
          <p>
            Namaste Soft is a software development company: a dedicated team of technology
            enthusiasts with {config.stats.yearsWord}+ years of hands-on experience delivering websites, apps and
            automation. We turn ideas into powerful, user-friendly applications that help businesses grow.
          </p>
          <p>
            Having completed {config.stats.projects} client projects, we understand the challenges startups and
            growing businesses face in going digital, and we build software that
            meets them head-on.
          </p>
        </div>
        <a
          href="/about"
          class="mt-8 inline-flex items-center gap-2 font-semibold text-ink underline decoration-mari decoration-2 underline-offset-[6px] hover:text-verm-deep"
        >
          More about our company, technology and process
        </a>
      </div>

      <dl class="grid grid-cols-2 self-end overflow-hidden rounded-[1.75rem] border border-line bg-white" use:reveal={0.1}>
        {#each stats as stat, i}
          <div
            class="p-7 sm:p-9
              {i % 2 === 0 ? 'border-r border-line' : ''}
              {i < 2 ? 'border-b border-line' : ''}"
          >
            <dt class="sr-only">{stat.label}</dt>
            <dd class="font-display text-5xl font-extrabold tracking-tight {i === 0 ? 'text-verm' : 'text-ink'} sm:text-6xl">
              {stat.value}
            </dd>
            <dd class="mt-2 text-[0.95rem] text-muted">{stat.label}</dd>
          </div>
        {/each}
      </dl>
    </div>

    <div class="mt-24">
      <div class="flex flex-col justify-between gap-4 sm:flex-row sm:items-end" use:reveal>
        <h3 class="text-3xl font-bold text-ink sm:text-4xl">Why teams choose us</h3>
        <p class="max-w-sm text-muted">What sets us apart, and what you can hold us to.</p>
      </div>

      <ul class="mt-10 grid gap-px overflow-hidden rounded-[1.75rem] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {#each principles as item, i}
          <li class="group bg-paper p-8 transition-colors hover:bg-white" use:reveal={(i % 3) * 0.08}>
            <div class="flex items-center justify-between">
              <span class="flex h-11 w-11 items-center justify-center rounded-full bg-mari-soft text-mari-deep transition-colors group-hover:bg-mari group-hover:text-ink">
                <svelte:component this={item.icon} class="h-5 w-5" />
              </span>
              <span class="font-mono text-xs text-muted">0{i + 1}</span>
            </div>
            <h4 class="mt-6 text-xl font-bold text-ink">{item.title}</h4>
            <p class="mt-2 leading-relaxed text-muted">{item.text}</p>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</section>
