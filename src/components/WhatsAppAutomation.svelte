<script lang="ts">
  import { Bot, Users, Clock, Megaphone, Check, MessageCircle, ArrowRight } from 'lucide-svelte';
  import { generateWhatsAppLink } from '@/lib/utils';
  import { config } from '@/lib/config';
  import { reveal } from '@/lib/reveal';

  const whatsappUrl = generateWhatsAppLink(
    config.whatsapp.supportNumber,
    'Hi! I want to know more about WhatsApp automation solutions.'
  );

  const features = [
    { icon: Bot, title: 'Auto responses', text: 'Instant, intelligent replies to customer questions, any hour.' },
    { icon: Users, title: 'Lead generation', text: 'Capture and qualify leads automatically inside the chat.' },
    { icon: Clock, title: '24/7 availability', text: 'Round-the-clock support without someone on the phone.' },
    { icon: Megaphone, title: 'Broadcast messages', text: 'Send targeted updates to many customers at once.' }
  ];

  const benefits = [
    'Reduce response time by up to 90%',
    'Generate more qualified leads',
    'Scale support without scaling headcount',
    'Improve conversion rates'
  ];

  const results = [
    { value: '300%', label: 'Increase in lead generation' },
    { value: '90%', label: 'Faster response time' },
    { value: '50%', label: 'Cost reduction' }
  ];
</script>

<section id="whatsapp-automation" class="relative overflow-hidden bg-ink py-24 text-white lg:py-32">
  <div class="jaali pointer-events-none absolute inset-0 opacity-[0.035]" aria-hidden="true"></div>

  <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="grid items-center gap-16 lg:grid-cols-[1.1fr_1fr]">
      <div use:reveal>
        <p class="eyebrow text-mist">03 — WhatsApp automation</p>
        <h2 class="mt-5 text-4xl font-bold leading-[1.05] sm:text-5xl">
          Your business, answering on WhatsApp — <span class="text-mari">even at 2 a.m.</span>
        </h2>
        <p class="mt-6 max-w-xl text-lg leading-relaxed text-mist">
          Automate customer conversations, capture leads and offer round-the-clock support on the app your
          customers already use every day.
        </p>

        <ul class="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2">
          {#each features as f}
            <li class="flex gap-4">
              <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ink-2 text-mari ring-1 ring-ink-3">
                <svelte:component this={f.icon} class="h-5 w-5" />
              </span>
              <div>
                <h3 class="font-display text-lg font-semibold">{f.title}</h3>
                <p class="mt-1 text-[0.95rem] leading-relaxed text-mist">{f.text}</p>
              </div>
            </li>
          {/each}
        </ul>

        <ul class="mt-10 space-y-3 border-t border-ink-3 pt-8">
          {#each benefits as b}
            <li class="flex items-center gap-3">
              <span class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-leaf">
                <Check class="h-3 w-3 text-white" strokeWidth={3} />
              </span>
              {b}
            </li>
          {/each}
        </ul>

        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" class="btn btn-leaf mt-10">
          <MessageCircle class="h-5 w-5" />
          Get WhatsApp automation
          <ArrowRight class="h-5 w-5" />
        </a>
      </div>

      <!-- Illustrative chat: what an automated conversation looks like -->
      <figure class="relative mx-auto w-full max-w-sm" use:reveal={0.15}>
        <div class="rounded-[2.25rem] bg-ink-2 p-3 shadow-[0_40px_80px_-30px_rgb(0_0_0/0.6)] ring-1 ring-ink-3">
          <div class="overflow-hidden rounded-[1.75rem] bg-[#efe7dc]">
            <div class="flex items-center gap-3 bg-leaf-deep px-4 py-3.5 text-white">
              <span class="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 font-display text-sm font-bold">YB</span>
              <div class="leading-tight">
                <p class="text-sm font-semibold">Your Business</p>
                <p class="text-xs text-white/75">Automated assistant · online</p>
              </div>
            </div>

            <div class="space-y-2.5 px-3.5 py-5 text-[0.9rem] leading-snug text-ink">
              <p class="ml-auto w-fit max-w-[80%] rounded-2xl rounded-tr-md bg-[#d9f5c9] px-3.5 py-2">
                Hi! Are you open tomorrow?
              </p>
              <p class="w-fit max-w-[85%] rounded-2xl rounded-tl-md bg-white px-3.5 py-2 shadow-sm">
                Namaste! Yes, we’re open 9 AM – 6 PM. Would you like to book a slot?
              </p>
              <div class="flex flex-wrap gap-2 pl-1">
                <span class="rounded-full border border-leaf/40 bg-white px-3 py-1 text-xs font-medium text-leaf-deep">10:00 AM</span>
                <span class="rounded-full border border-leaf bg-leaf px-3 py-1 text-xs font-medium text-white">11:00 AM</span>
                <span class="rounded-full border border-leaf/40 bg-white px-3 py-1 text-xs font-medium text-leaf-deep">4:00 PM</span>
              </div>
              <p class="ml-auto w-fit max-w-[80%] rounded-2xl rounded-tr-md bg-[#d9f5c9] px-3.5 py-2">11:00 AM please</p>
              <p class="w-fit max-w-[85%] rounded-2xl rounded-tl-md bg-white px-3.5 py-2 shadow-sm">
                Booked for tomorrow at 11:00 AM. We’ll send a reminder an hour before.
              </p>
            </div>
          </div>
        </div>
        <figcaption class="mt-5 text-center">
          <span class="inline-block rounded-full bg-mari px-4 py-2 text-sm font-semibold text-ink">
            Replied instantly — no staff needed
          </span>
        </figcaption>
      </figure>
    </div>

    <div class="mt-24 grid gap-10 border-t border-ink-3 pt-14 lg:grid-cols-[1fr_1.2fr] lg:items-center" use:reveal>
      <dl class="grid grid-cols-3 gap-4">
        {#each results as r, i}
          <div>
            <dt class="sr-only">{r.label}</dt>
            <dd class="font-display text-4xl font-extrabold sm:text-5xl {i === 0 ? 'text-mari' : 'text-white'}">{r.value}</dd>
            <dd class="mt-2 text-sm text-mist">{r.label}</dd>
          </div>
        {/each}
      </dl>
      <blockquote class="rounded-[1.75rem] bg-ink-2 p-8 ring-1 ring-ink-3">
        <p class="font-display text-xl leading-snug sm:text-2xl">
          “{config.company.name}’s WhatsApp automation transformed our customer service. We now handle 300% more
          inquiries with faster responses and happier customers.”
        </p>
        <footer class="mt-4 text-sm text-mist">— A Namaste Soft client</footer>
      </blockquote>
    </div>
  </div>
</section>
