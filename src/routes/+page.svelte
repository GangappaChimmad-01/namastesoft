<script>
  import Navigation from '$components/Navigation.svelte';
  import Hero from '$components/Hero.svelte';
  import Services from '$components/Services.svelte';
  import About from '$components/About.svelte';
  import WhatsAppAutomation from '$components/WhatsAppAutomation.svelte';
  import Faq from '$components/Faq.svelte';
  import Contact from '$components/Contact.svelte';
  import Footer from '$components/Footer.svelte';
  import Seo from '$components/Seo.svelte';
  import { organizationSchema, websiteSchema, faqSchema } from '@/lib/seo';
  import { homeFaqs } from '@/lib/homeFaqs';

  const schema = [organizationSchema(), websiteSchema(), faqSchema(homeFaqs)];
</script>

<Seo
  title="Software Development Company in India | Namaste Soft"
  description="Bengaluru-based Namaste Soft builds custom software, websites, mobile apps, AI solutions and business automation for startups and growing businesses across India."
  path="/"
  {schema}
/>

<Navigation />
<main>
  <Hero />
  <About />
  <Services />
  <!-- <FeaturedProjects /> -->
  <WhatsAppAutomation />
  <!-- <Testimonials /> -->
  <Faq />
  <Contact />
</main>
<Footer />
