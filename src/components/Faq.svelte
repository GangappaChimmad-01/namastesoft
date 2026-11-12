<script lang="ts">
  import FaqList from '$components/FaqList.svelte';
  import { homeFaqs } from '@/lib/homeFaqs';
  import { reveal } from '@/lib/reveal';
</script>

<section id="faq" class="bg-sand py-24 lg:py-32">
  <div class="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_2fr] lg:gap-20 lg:px-8">
    <div use:reveal>
      <p class="eyebrow text-muted">04 — FAQ</p>
      <h2 class="mt-5 text-4xl font-bold leading-[1.05] text-ink sm:text-5xl">Questions, answered.</h2>
      <p class="mt-5 text-lg text-muted">Still curious? Ask us on WhatsApp. We’re happy to talk it through.</p>
    </div>
    <FaqList faqs={homeFaqs} />
  </div>
</section>
