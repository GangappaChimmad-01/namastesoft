<script lang="ts">
  import { Globe, Smartphone, Code, Brain, MessageCircle, Headphones, ArrowRight } from 'lucide-svelte';
  import { reveal } from '@/lib/reveal';
  import { discuss } from '@/lib/contactPrefill';

  const services = [
    {
      icon: Globe,
      title: 'Website development',
      description: 'Responsive websites that captivate your audience and drive growth, with modern design and fast performance.',
      features: ['Responsive design', 'SEO optimised', 'Fast loading', 'Mobile-first'],
      page: '/website-development-company',
      linkText: 'Explore website development'
    },
    {
      icon: Code,
      title: 'Web applications',
      description: 'Powerful, scalable web applications built on modern technology to streamline your business processes.',
      features: ['Custom solutions', 'Cloud integration', 'Real-time features', 'Secure & scalable'],
      page: '/software-development-company',
      linkText: 'Explore web app development'
    },
    {
      icon: Smartphone,
      title: 'Mobile app development',
      description: 'Native and cross-platform apps that give your users a seamless experience on iOS and Android.',
      features: ['Native performance', 'Cross-platform', 'User-friendly UI', 'App-store ready'],
      page: '/mobile-app-development-company',
      linkText: 'Explore mobile app development'
    },
    {
      icon: Brain,
      title: 'AI & ML solutions',
      description: 'Put artificial intelligence and machine learning to work automating processes and surfacing insights.',
      features: ['Custom AI models', 'Data analysis', 'Automation', 'Predictive analytics'],
      page: '/ai-development-company',
      linkText: 'Explore AI & ML solutions'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp automation',
      description: 'Streamline customer communication with intelligent WhatsApp automation for support and engagement.',
      features: ['Auto responses', 'Lead generation', 'Customer support', 'Broadcast messages'],
      page: '/whatsapp-automation',
      linkText: 'Explore WhatsApp automation'
    },
    {
      icon: Headphones,
      title: 'Technical support',
      description: 'Ongoing support and maintenance so your software keeps running smoothly, around the clock.',
      features: ['24/7 support', 'Bug fixes', 'Performance tuning', 'Security updates']
    }
  ];
</script>

<section id="services" class="bg-sand py-24 lg:py-32">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="grid gap-6 lg:grid-cols-2 lg:items-end" use:reveal>
      <div>
        <p class="eyebrow text-muted">02 — Services</p>
        <h2 class="mt-5 text-4xl font-bold leading-[1.05] text-ink sm:text-5xl">
          Software development services, end to end.
        </h2>
      </div>
      <p class="text-lg leading-relaxed text-muted lg:justify-self-end lg:max-w-md">
        From first idea to launch and beyond — one team for design, development and support, for startups and
        established businesses alike.
      </p>
    </div>

    <ul class="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {#each services as service, i}
        <li
          class="group relative flex flex-col overflow-hidden rounded-[1.75rem] border border-line bg-paper p-8 transition-all duration-300 hover:-translate-y-1 hover:border-ink/15 hover:bg-white hover:shadow-[0_24px_48px_-24px_rgb(26_22_51/0.25)]"
          use:reveal={(i % 3) * 0.08}
        >
          <span
            class="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-mari to-verm transition-transform duration-500 group-hover:scale-x-100"
            aria-hidden="true"
          ></span>

          <div class="flex items-start justify-between">
            <span class="flex h-14 w-14 items-center justify-center rounded-2xl bg-ink text-mari">
              <svelte:component this={service.icon} class="h-6 w-6" />
            </span>
            <span class="font-mono text-xs text-muted">0{i + 1}</span>
          </div>

          <h3 class="mt-7 text-2xl font-bold text-ink">{service.title}</h3>
          <p class="mt-3 leading-relaxed text-muted">{service.description}</p>

          <ul class="mb-8 mt-6 flex flex-wrap gap-2">
            {#each service.features as feature}
              <li class="rounded-full border border-line bg-white px-3 py-1 text-sm text-ink/80">{feature}</li>
            {/each}
          </ul>

          <div class="mt-auto flex flex-wrap items-center gap-x-6 gap-y-3">
            {#if service.page}
              <!-- descriptive anchor text: tells Google what the linked page is about -->
              <a
                href={service.page}
                class="inline-flex items-center gap-2 font-semibold text-ink underline decoration-mari decoration-2 underline-offset-[6px] transition-colors hover:text-verm-deep"
              >
                {service.linkText}
                <ArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            {/if}
            <button
              type="button"
              on:click={() => discuss(service.title)}
              aria-label="Discuss your project: {service.title}"
              class="inline-flex items-center gap-2 font-semibold transition-colors
                {service.page ? 'text-muted hover:text-ink' : 'text-ink underline decoration-mari decoration-2 underline-offset-[6px] hover:text-verm-deep'}"
            >
              Discuss your project
              {#if !service.page}<ArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-1" />{/if}
            </button>
          </div>
        </li>
      {/each}
    </ul>

    <div
      class="relative mt-16 overflow-hidden rounded-[2rem] bg-ink px-8 py-12 text-white sm:px-12 lg:flex lg:items-center lg:justify-between lg:gap-10"
      use:reveal
    >
      <div class="jaali pointer-events-none absolute inset-0 opacity-[0.045]" aria-hidden="true"></div>
      <div class="relative">
        <h3 class="text-3xl font-bold sm:text-4xl">Ready to start your digital journey?</h3>
        <p class="mt-3 max-w-xl text-lg text-mist">
          Tell us what you’re building. We’ll reply with honest advice and a clear plan.
        </p>
      </div>
      <a href="#contact" class="btn btn-mari relative mt-8 shrink-0 lg:mt-0">
        Get a free consultation
        <ArrowRight class="h-5 w-5" />
      </a>
    </div>
  </div>
</section>
