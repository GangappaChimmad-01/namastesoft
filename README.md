# Namaste Soft - Professional Software Development Services

A modern, responsive website built with SvelteKit and Tailwind CSS showcasing software development services with a focus on WhatsApp automation solutions.

## 🚀 Features

- **Modern Design**: Beautiful, responsive UI built with Tailwind CSS v4
- **WhatsApp Integration**: Automated WhatsApp contact functionality
- **Component-Based**: Modular Svelte components for easy maintenance
- **TypeScript Support**: Full TypeScript integration for better development experience
- **Optimized Performance**: Fast loading with Vite and SvelteKit
- **SEO Ready**: Proper meta tags and structured data

## 🛠️ Technologies Used

- **Framework**: SvelteKit
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide Svelte
- **Language**: TypeScript
- **Build Tool**: Vite
- **Package Manager**: npm

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd namastesoft
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5174`

## 🏗️ Project Structure

```
src/
├── components/           # Reusable Svelte components
│   ├── ui/              # UI components (Button, etc.)
│   ├── Hero.svelte      # Hero section
│   ├── Navigation.svelte # Navigation bar
│   ├── Services.svelte   # Services section
│   ├── WhatsAppAutomation.svelte # WhatsApp automation showcase
│   └── ...
├── lib/                 # Utility functions and configurations
│   ├── config.ts        # Application configuration
│   └── utils.ts         # Utility functions
├── routes/              # SvelteKit routes
│   ├── +layout.svelte   # Main layout
│   ├── +layout.server.ts # Server-side data loading
│   └── +page.svelte     # Homepage
└── app.css             # Global styles and CSS variables
```

## 🎨 Brand

The mark joins two palms (the *namaste* gesture) as an arch, split by a code slash, with a spark above:
a greeting and a line of code in one.

| Token | Hex | Use |
| --- | --- | --- |
| Ink | `#1A1633` | Text, dark surfaces |
| Paper | `#FBF7F1` | Page background |
| Marigold | `#F4900C` | Left palm, spark, highlights |
| Vermilion | `#E4472B` | Right palm, "soft" in the wordmark |

Type: Bricolage Grotesque (headings), DM Sans (body), JetBrains Mono (labels).

Assets live in `static/brand/` (SVG + PNG logo and mark, ink/white single-colour marks), plus
`static/favicon.svg|ico`, app icons and `static/og-image.png`. In code, use `src/components/brand/Logo.svelte`.
To regenerate every asset, see the header of `scripts/build-brand.mjs`.

## 🛠 Customization

### Colors and Themes
Design tokens are defined in the `@theme` block of `src/app.css`.

### Company Information
Update the configuration in `src/lib/config.ts` to change company details.

### WhatsApp Integration
The WhatsApp functionality automatically uses the phone number from the config file.

## 🔎 SEO, AI crawlers & analytics

Content lives in data files; pages, JSON-LD, the sitemap and `/llms.txt` are all generated from them.

| To change | Edit |
| --- | --- |
| Company facts (overview, tech stack, industries, process) | `src/lib/profile.ts` |
| Service landing pages (title, description, FAQ, …) | `src/lib/services.ts` |
| Products (`/products/<id>`, incl. optional screenshots) | `src/lib/products.ts` |
| Portfolio projects | `src/lib/projects.ts` |
| Phone, email, hours, social profiles | `src/lib/config.ts` |
| Blog posts | `src/content/blog/<slug>.svelte` (copy `_template.svelte`) |

- **Per-page metadata**: `src/components/Seo.svelte` (title, description, canonical, Open Graph, Twitter, JSON-LD). Schema builders are in `src/lib/seo.ts`.
- **Sitemap**: `/sitemap.xml`, built from the data files. `lastmod` comes from git history and is omitted on shallow clones rather than guessed.
- **AI assistants**: `/llms.txt` and `/llms-full.txt`; AI crawlers are explicitly allowed in `static/robots.txt`.
- **404s**: unknown URLs return a real HTTP 404 via `src/routes/+error.svelte`.
- **Blog**: nothing is published until a post has `draft: false`; until then `/blog` is a 404 and is not linked or listed.
- **Analytics**: set `VITE_GTM_CONTAINER_ID` (or `VITE_GA4_MEASUREMENT_ID`) — see `.env.example`. Events: `generate_lead`, `whatsapp_click`, `phone_click`, `email_click`, `consultation_click`, `demo_request_click`, `product_enquiry_click`, `product_site_click`. Add `data-track="event_name"` to any link or button to track it.

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📱 Features Showcase

- WhatsApp Automation Section with interactive cards
- Modern UI with glass-morphism effects
- Responsive design for all devices
- Smooth animations and transitions
