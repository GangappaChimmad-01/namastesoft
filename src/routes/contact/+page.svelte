<script lang="ts">
  import { ArrowRight, ChevronRight, MessageCircle } from 'lucide-svelte';
  import Navigation from '$components/Navigation.svelte';
  import Contact from '$components/Contact.svelte';
  import Footer from '$components/Footer.svelte';
  import Seo from '$components/Seo.svelte';
  import { config } from '@/lib/config';
  import { generateWhatsAppLink } from '@/lib/utils';
  import { servicePages } from '@/lib/services';
  import { organizationSchema, contactPageSchema, breadcrumbSchema } from '@/lib/seo';

  const schema = [
    organizationSchema(),
    contactPageSchema(),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Contact', path: '/contact' }
    ])
  ];

  const whatsappUrl = generateWhatsAppLink(config.whatsapp.supportNumber, `Hi! I would like to discuss a project with ${config.company.name}.`);
</script>

<Seo
  title="Contact Namaste Soft | Software Development Company Bengaluru"
  description="Contact Namaste Soft in Bengaluru for website development, custom software, mobile applications, AI automation and digital solutions. Call, WhatsApp or email us."
  path="/contact"
  {schema}
/>

<Navigation />

<main>
  <section class="relative overflow-hidden pt-18">
    <div class="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-mari-soft opacity-70 blur-3xl" aria-hidden="true"></div>

    <div class="relative mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8 lg:pt-14">
      <nav aria-label="Breadcrumb">
        <ol class="flex items-center gap-1.5 text-sm text-muted">
          <li><a href="/" class="hover:text-ink">Home</a></li>
          <li aria-hidden="true"><ChevronRight class="h-3.5 w-3.5" /></li>
          <li aria-current="page" class="font-medium text-ink">Contact</li>
        </ol>
      </nav>

      <p class="eyebrow mt-10 text-muted">Contact us</p>
      <h1 class="mt-5 max-w-4xl text-[clamp(2.4rem,5.5vw,4.25rem)] font-extrabold leading-[1.02] text-ink">
        Contact {config.company.name}
      </h1>
      <div class="mt-7 max-w-2xl space-y-4 text-lg leading-relaxed text-muted">
        <p>
          We’re a software development company based in {config.company.address}. Call, WhatsApp or email us about a
          website, custom software, a mobile app, AI or automation project — the first consultation is free.
        </p>
        <p>
          We work with businesses across India. Clients outside Bengaluru work with us remotely through video calls,
          WhatsApp and regular progress demos.
        </p>
      </div>
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" class="btn btn-ink mt-9">
        <MessageCircle class="h-5 w-5" />
        WhatsApp us now
      </a>
    </div>
  </section>

  <Contact />

  <section class="border-t border-line py-16">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 class="font-mono text-xs uppercase tracking-wider text-muted">What we can help with</h2>
      <ul class="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {#each servicePages as s}
          <li>
            <a href="/{s.slug}" class="group flex h-full items-center justify-between gap-3 rounded-2xl border border-line bg-white px-5 py-4 font-display font-semibold text-ink transition-colors hover:border-ink">
              {s.name}
              <ArrowRight class="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
            </a>
          </li>
        {/each}
      </ul>
    </div>
  </section>
</main>

<Footer />
