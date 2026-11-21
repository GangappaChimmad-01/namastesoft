<script lang="ts">
  import { ArrowRight, ChevronRight } from 'lucide-svelte';
  import Navigation from '$components/Navigation.svelte';
  import Contact from '$components/Contact.svelte';
  import Footer from '$components/Footer.svelte';
  import Seo from '$components/Seo.svelte';
  import { config } from '@/lib/config';
  import { relatedPosts } from '@/lib/blog';
  import { getServicePage } from '@/lib/services';
  import { organizationSchema, blogPostingSchema, breadcrumbSchema } from '@/lib/seo';
  import type { PageData } from './$types';

  export let data: PageData;

  $: post = data.post;
  $: path = `/blog/${post.slug}`;
  $: related = relatedPosts(post);
  $: services = (post.services ?? []).map(getServicePage).filter((s) => s !== undefined);
  $: schema = [
    organizationSchema(),
    blogPostingSchema(post),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Blog', path: '/blog' },
      { name: post.title, path }
    ])
  ];

  const formatDate = (d: string) => new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
</script>

<Seo
  title="{post.title} | {config.company.name}"
  description={post.description}
  {path}
  {schema}
  type="article"
  image={post.image?.src}
  imageAlt={post.image?.alt}
  imageWidth={post.image?.width}
  imageHeight={post.image?.height}
  article={{ published: post.published, modified: post.updated, section: post.category, tags: post.tags }}
/>

<Navigation />

<main>
  <article class="pt-18">
    <header class="mx-auto max-w-3xl px-4 pt-10 sm:px-6 lg:pt-14">
      <nav aria-label="Breadcrumb">
        <ol class="flex flex-wrap items-center gap-1.5 text-sm text-muted">
          <li><a href="/" class="hover:text-ink">Home</a></li>
          <li aria-hidden="true"><ChevronRight class="h-3.5 w-3.5" /></li>
          <li><a href="/blog" class="hover:text-ink">Blog</a></li>
          <li aria-hidden="true"><ChevronRight class="h-3.5 w-3.5" /></li>
          <li aria-current="page" class="font-medium text-ink">{post.category}</li>
        </ol>
      </nav>
      <p class="eyebrow mt-10 text-muted">{post.category}</p>
      <h1 class="mt-5 text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold leading-[1.05] text-ink">{post.title}</h1>
      <p class="mt-6 text-sm text-muted">
        By <span class="font-medium text-ink">{post.author?.name ?? config.company.name}</span>
        · Published <time datetime={post.published}>{formatDate(post.published)}</time>
        {#if post.updated}· Updated <time datetime={post.updated}>{formatDate(post.updated)}</time>{/if}
      </p>
      {#if post.image}
        <img src={post.image.src} alt={post.image.alt} width={post.image.width} height={post.image.height} fetchpriority="high" class="mt-10 h-auto w-full rounded-[1.75rem] border border-line" />
      {/if}
    </header>

    <div class="prose prose-lg mx-auto mt-10 max-w-3xl px-4 pb-16 sm:px-6 prose-headings:font-display prose-headings:text-ink prose-a:text-ink prose-a:decoration-mari prose-a:decoration-2">
      <svelte:component this={post.component} />
    </div>
  </article>

  {#if services.length || related.length}
    <section class="border-t border-line py-16">
      <div class="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {#if services.length}
          <div>
            <h2 class="font-mono text-xs uppercase tracking-wider text-muted">Related services</h2>
            <ul class="mt-5 space-y-4">
              {#each services as s}
                <li>
                  <a href="/{s.slug}" class="group flex items-center justify-between rounded-2xl border border-line bg-white px-6 py-5 font-display text-lg font-semibold text-ink transition-colors hover:border-ink">
                    {s.h1}
                    <ArrowRight class="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </li>
              {/each}
            </ul>
          </div>
        {/if}
        {#if related.length}
          <div>
            <h2 class="font-mono text-xs uppercase tracking-wider text-muted">Related articles</h2>
            <ul class="mt-5 space-y-4">
              {#each related as r}
                <li>
                  <a href="/blog/{r.slug}" class="group flex items-center justify-between rounded-2xl border border-line bg-white px-6 py-5 font-display text-lg font-semibold text-ink transition-colors hover:border-ink">
                    {r.title}
                    <ArrowRight class="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
                  </a>
                </li>
              {/each}
            </ul>
          </div>
        {/if}
      </div>
    </section>
  {/if}

  <Contact />
</main>

<Footer />
