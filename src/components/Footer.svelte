<script lang="ts">
  import Logo from '$components/brand/Logo.svelte';
  import { config } from '@/lib/config';
  import { servicePages } from '@/lib/services';

  const year = new Date().getFullYear();

  const company = [
    { name: 'About', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'FAQ', href: '/#faq' },
    { name: 'Contact', href: '/#contact' }
  ];
</script>

<footer class="relative overflow-hidden bg-ink text-white">
  <div class="mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 lg:px-8">
    <div class="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
      <div class="max-w-sm">
        <a href="/"><Logo tone="dark" size={36} /><span class="sr-only"> home</span></a>
        <p class="mt-5 leading-relaxed text-mist">
          Software and website development company building websites, apps, AI and WhatsApp automation for
          growing businesses.
        </p>
      </div>

      <nav aria-label="Services">
        <h2 class="font-mono text-xs uppercase tracking-wider text-mist">Services</h2>
        <ul class="mt-4 space-y-3 text-[0.95rem]">
          {#each servicePages as p}
            <li><a href="/{p.slug}" class="text-white/85 transition-colors hover:text-mari">{p.name}</a></li>
          {/each}
        </ul>
      </nav>

      <nav aria-label="Company">
        <h2 class="font-mono text-xs uppercase tracking-wider text-mist">Company</h2>
        <ul class="mt-4 space-y-3 text-[0.95rem]">
          {#each company as link}
            <li><a href={link.href} class="text-white/85 transition-colors hover:text-mari">{link.name}</a></li>
          {/each}
        </ul>
      </nav>

      <div>
        <h2 class="font-mono text-xs uppercase tracking-wider text-mist">Contact</h2>
        <address class="mt-4 space-y-3 text-[0.95rem] not-italic">
          <p class="text-white/85">{config.company.address}</p>
          {#each config.company.phones as p}
            <p><a href="tel:+{p.wa}" class="whitespace-nowrap text-white/85 transition-colors hover:text-mari">{p.display}</a></p>
          {/each}
          <p><a href="mailto:{config.company.email}" class="text-white/85 transition-colors hover:text-mari">{config.company.email}</a></p>
        </address>
      </div>
    </div>

    <!-- oversized wordmark, cropped by the footer edge -->
    <!-- drawn via ::before so it stays purely decorative (not read out, not part of the page text) -->
    <div
      class="pointer-events-none mt-16 select-none font-display text-[19vw] font-extrabold leading-[0.75] tracking-[-0.05em] text-ink-2 before:content-['namaste'] lg:text-[15rem]"
      aria-hidden="true"
    ></div>

    <div class="flex flex-col gap-2 border-t border-ink-3 pt-6 text-sm text-mist sm:flex-row sm:justify-between">
      <p>© {year} {config.company.name}. All rights reserved.</p>
      <p>Made with care.</p>
    </div>
  </div>
</footer>
