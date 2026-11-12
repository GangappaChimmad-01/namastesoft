<script lang="ts">
  import { onDestroy } from 'svelte';
  import { Mail, Phone, MapPin, Send, MessageCircle, Linkedin, Github } from 'lucide-svelte';
  import { toast } from '@/lib/toastStore';
  import { config } from '@/lib/config';
  import { generateWhatsAppLink } from '@/lib/utils';
  import { projectType } from '@/lib/contactPrefill';
  import { reveal } from '@/lib/reveal';

  let form = { name: '', email: '', phone: '', subject: '', message: '' };

  // A service card's "Discuss" link prefills the project type
  const unsubscribe = projectType.subscribe((value) => {
    if (value) form.subject = value;
  });
  onDestroy(unsubscribe);

  // The site is static (no backend), so the enquiry is handed to WhatsApp,
  // pre-written, rather than pretending to "send" it.
  function handleSubmit(event: SubmitEvent) {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: 'A few details missing', description: 'Please add your name, email and project details.', type: 'error' });
      return;
    }

    const lines = [
      `Namaste! I'd like to discuss a project.`,
      ``,
      `Name: ${form.name.trim()}`,
      `Email: ${form.email.trim()}`,
      form.phone.trim() ? `Phone: ${form.phone.trim()}` : null,
      form.subject.trim() ? `Project type: ${form.subject.trim()}` : null,
      ``,
      form.message.trim()
    ].filter((line) => line !== null);

    window.open(generateWhatsAppLink(config.whatsapp.supportNumber, lines.join('\n')), '_blank', 'noopener');
    toast({
      title: 'Opening WhatsApp',
      description: 'Your message is ready — just press send in WhatsApp.',
      type: 'success'
    });
  }

  const phones = config.company.phones.map((p) => ({
    ...p,
    tel: `tel:+${p.wa}`,
    whatsapp: generateWhatsAppLink(p.wa, 'Hi! I need assistance with my project.')
  }));

  const workingHours = config.hours;
</script>

<section id="contact" class="py-24 lg:py-32">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="grid gap-14 lg:grid-cols-[1fr_1.25fr] lg:gap-20">
      <div use:reveal>
        <p class="eyebrow text-muted">Contact</p>
        <h2 class="mt-5 text-4xl font-bold leading-[1.05] text-ink sm:text-5xl">
          Ready to start your next project?
        </h2>
        <p class="mt-6 text-lg leading-relaxed text-muted">
          Tell us about your idea. We’ll get back with questions, honest advice and a clear next step.
        </p>

        <ul class="mt-10 divide-y divide-line border-y border-line">
          <li>
            <a href="mailto:{config.company.email}" class="group flex items-center gap-4 py-4 hover:text-verm-deep">
              <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sand text-ink transition-colors group-hover:bg-mari">
                <Mail class="h-[1.1rem] w-[1.1rem]" />
              </span>
              <span>
                <span class="block font-mono text-[0.7rem] uppercase tracking-wider text-muted">Email</span>
                <span class="font-semibold">{config.company.email}</span>
              </span>
            </a>
          </li>

          {#each phones as p}
            <li class="flex items-center gap-4 py-4">
              <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sand text-ink">
                <Phone class="h-[1.1rem] w-[1.1rem]" />
              </span>
              <span class="min-w-0 flex-1">
                <span class="block font-mono text-[0.7rem] uppercase tracking-wider text-muted">Call or WhatsApp</span>
                <a href={p.tel} class="font-semibold whitespace-nowrap hover:text-verm-deep">{p.display}</a>
              </span>
              <span class="flex shrink-0 gap-2">
                <a
                  href={p.tel}
                  class="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-ink hover:bg-ink hover:text-white"
                  aria-label="Call {p.display}"
                >
                  <Phone class="h-4 w-4" />
                </a>
                <a
                  href={p.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex h-10 w-10 items-center justify-center rounded-full bg-leaf text-white transition-colors hover:bg-leaf-deep"
                  aria-label="WhatsApp {p.display}"
                >
                  <MessageCircle class="h-4 w-4" />
                </a>
              </span>
            </li>
          {/each}

          <li class="flex items-center gap-4 py-4">
            <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sand text-ink">
              <MapPin class="h-[1.1rem] w-[1.1rem]" />
            </span>
            <span>
              <span class="block font-mono text-[0.7rem] uppercase tracking-wider text-muted">Based in</span>
              <span class="font-semibold">{config.company.address}</span>
            </span>
          </li>
        </ul>

        <div class="mt-10 grid gap-8 sm:grid-cols-[1fr_auto] sm:gap-12">
          <div>
            <h3 class="font-mono text-xs uppercase tracking-wider text-muted">Working hours</h3>
            <dl class="mt-3 max-w-xs space-y-1.5 text-[0.95rem]">
              {#each workingHours as h}
                <div class="flex justify-between gap-4 whitespace-nowrap">
                  <dt class="text-muted">{h.day}</dt>
                  <dd class="font-medium {h.time === 'Closed' ? 'text-muted' : 'text-ink'}">{h.time}</dd>
                </div>
              {/each}
            </dl>
          </div>
          <div>
            <h3 class="font-mono text-xs uppercase tracking-wider text-muted">Follow us</h3>
            <div class="mt-3 flex gap-2">
              <a
                href="https://linkedin.com/{config.social.linkedin}"
                target="_blank"
                rel="noopener noreferrer"
                class="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-ink hover:bg-ink hover:text-white"
                aria-label="Namaste Soft on LinkedIn"
              >
                <Linkedin class="h-5 w-5" />
              </a>
              <a
                href="https://github.com/{config.social.github}"
                target="_blank"
                rel="noopener noreferrer"
                class="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-ink hover:bg-ink hover:text-white"
                aria-label="Namaste Soft on GitHub"
              >
                <Github class="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <form
        class="rounded-[2rem] border border-line bg-white p-7 shadow-[0_30px_60px_-40px_rgb(26_22_51/0.35)] sm:p-10"
        on:submit={handleSubmit}
        novalidate
        use:reveal={0.1}
      >
        <h3 class="text-2xl font-bold text-ink">Send us a message</h3>
        <p class="mt-1 text-muted">Fields marked * are required.</p>

        <div class="mt-8 grid gap-5 sm:grid-cols-2">
          <div>
            <label for="contact-name" class="mb-2 block text-sm font-semibold text-ink">Full name *</label>
            <input id="contact-name" class="field" autocomplete="name" placeholder="Your full name" bind:value={form.name} required />
          </div>
          <div>
            <label for="contact-email" class="mb-2 block text-sm font-semibold text-ink">Email *</label>
            <input id="contact-email" type="email" class="field" autocomplete="email" placeholder="you@company.com" bind:value={form.email} required />
          </div>
          <div>
            <label for="contact-phone" class="mb-2 block text-sm font-semibold text-ink">Phone</label>
            <input id="contact-phone" type="tel" class="field" autocomplete="tel" placeholder="+91 98765 43210" bind:value={form.phone} />
          </div>
          <div>
            <label for="contact-subject" class="mb-2 block text-sm font-semibold text-ink">Project type</label>
            <input id="contact-subject" class="field" placeholder="Website, mobile app, AI…" bind:value={form.subject} />
          </div>
          <div class="sm:col-span-2">
            <label for="contact-message" class="mb-2 block text-sm font-semibold text-ink">Project details *</label>
            <textarea
              id="contact-message"
              class="field min-h-36 resize-y"
              placeholder="What are you building? Any timeline or must-have features?"
              bind:value={form.message}
              required
            ></textarea>
          </div>
        </div>

        <button type="submit" class="btn btn-ink mt-7 w-full">
          Send via WhatsApp
          <Send class="h-4 w-4" />
        </button>
        <p class="mt-4 text-center text-sm text-muted">
          Prefer email? Write to
          <a href="mailto:{config.company.email}" class="font-medium text-ink underline decoration-mari decoration-2 underline-offset-4">{config.company.email}</a>
        </p>
      </form>
    </div>
  </div>
</section>
