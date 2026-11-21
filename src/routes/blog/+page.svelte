<script lang="ts">
  import { ArrowRight, ChevronRight } from 'lucide-svelte';
  import Navigation from '$components/Navigation.svelte';
  import Contact from '$components/Contact.svelte';
  import Footer from '$components/Footer.svelte';
  import Seo from '$components/Seo.svelte';
  import { config } from '@/lib/config';
  import { posts, blogCategories } from '@/lib/blog';
  import { organizationSchema, blogSchema, breadcrumbSchema } from '@/lib/seo';

  const schema = [
    organizationSchema(),
    blogSchema(posts),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Blog', path: '/blog' }
    ])
  ];

  const formatDate = (d: string) => new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
</script>

<Seo
  title="Blog: Software, Websites, Apps & Automation | Namaste Soft"
  description="Practical guides from {config.company.name} on custom software, websites, mobile apps, AI and WhatsApp automation for businesses in India."
  path="/blog"
  {schema}
/>

<Navigation />

<main>
  <section class="relative overflow-hidden pt-18">
    <div class="relative mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pt-14">
      <nav aria-label="Breadcrumb">
        <ol class="flex items-center gap-1.5 text-sm text-muted">
          <li><a href="/" class="hover:text-ink">Home</a></li>
          <li aria-hidden="true"><ChevronRight class="h-3.5 w-3.5" /></li>
          <li aria-current="page" class="font-medium text-ink">Blog</li>
        </ol>
      </nav>
      <p class="eyebrow mt-10 text-muted">Blog</p>
      <h1 class="mt-5 max-w-4xl text-[clamp(2.4rem,5.5vw,4.25rem)] font-extrabold leading-[1.02] text-ink">
        Guides on software, websites &amp; automation
      </h1>
    </div>
  </section>

  {#each blogCategories as category}
    <section class="border-t border-line py-14">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl font-bold text-ink sm:text-3xl">{category}</h2>
        <ul class="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {#each posts.filter((p) => p.category === category) as post}
            <li>
              <a href="/blog/{post.slug}" class="group flex h-full flex-col rounded-[1.75rem] border border-line bg-white p-7 transition-colors hover:border-ink">
                <time datetime={post.published} class="font-mono text-xs uppercase tracking-wider text-muted">{formatDate(post.published)}</time>
                <h3 class="mt-3 text-xl font-bold text-ink">{post.title}</h3>
                <p class="mt-2 leading-relaxed text-muted">{post.description}</p>
                <span class="mt-auto inline-flex items-center gap-2 pt-6 font-semibold text-ink">
                  Read article
                  <ArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            </li>
          {/each}
        </ul>
      </div>
    </section>
  {/each}

  <Contact />
</main>

<Footer />
