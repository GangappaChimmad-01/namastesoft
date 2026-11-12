<script lang="ts">
  import { Plus } from 'lucide-svelte';

  export let faqs: { q: string; a: string }[];
  export let tone: 'light' | 'dark' = 'light';
</script>

<!-- Native <details>: answers stay in the HTML (crawlable) and work without JavaScript. -->
<div class="divide-y {tone === 'dark' ? 'divide-ink-3 border-ink-3' : 'divide-line border-line'} border-y">
  {#each faqs as faq, i}
    <details class="group" open={i === 0}>
      <summary
        class="flex cursor-pointer list-none items-start justify-between gap-6 py-6 font-display text-lg font-semibold sm:text-xl [&::-webkit-details-marker]:hidden"
      >
        <h3>{faq.q}</h3>
        <span
          class="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-open:rotate-45
            {tone === 'dark' ? 'bg-ink-2 text-mari' : 'bg-sand text-ink'}"
          aria-hidden="true"
        >
          <Plus class="h-4 w-4" />
        </span>
      </summary>
      <p class="-mt-2 max-w-3xl pb-6 leading-relaxed {tone === 'dark' ? 'text-mist' : 'text-muted'}">{faq.a}</p>
    </details>
  {/each}
</div>
