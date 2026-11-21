/**
 * Plain-markdown descriptions of the company for AI assistants and LLM crawlers (https://llmstxt.org).
 * Served as /llms.txt (short index) and /llms-full.txt (complete profile). Both are generated
 * at build time from the same data as the pages, so they never drift from the site.
 */
import { config } from './config';
import { profile } from './profile';
import { servicePages } from './services';
import { products } from './products';
import { projects } from './projects';
import { absolute } from './seo';

const { company } = config;
const phones = company.phones.map((p) => p.display).join(', ');

const header = () => `# ${company.name}

> ${company.name} (Namastesoft) is a software development and digital solutions company in ${company.address}. It builds websites, custom web applications, mobile apps, enterprise software, AI-powered solutions, e-commerce, payment gateway integrations, cloud/DevOps and business automation (including WhatsApp Business API) for startups, SMEs and enterprises across India. ${profile.slogan}

- Website: ${absolute('/')}
- Email: ${company.email}
- Phone / WhatsApp: ${phones}
- Location: ${company.address} (serves clients across India, remotely)
- Hours: ${config.hours.map((h) => `${h.day} ${h.time}`).join('; ')}
- Experience: ${config.stats.years} years, ${config.stats.projects} projects delivered
- Engagement: free first consultation, then a fixed, itemised quote`;

export function llmsTxt() {
  return `${header()}

## Services

${servicePages.map((p) => `- [${p.h1}](${absolute(`/${p.slug}`)}): ${p.description}`).join('\n')}

## Products

${products.map((p) => `- [${p.name}](${absolute(`/products#${p.id}`)}): ${p.tagline}. ${p.description} Live at ${p.url}`).join('\n')}

## Portfolio

${projects.map((p) => `- [${p.name}](${absolute(`/portfolio#${p.id}`)}): ${p.summary} (${p.status}${p.url ? `, ${p.url}` : ''})`).join('\n')}

## Company

- [About ${company.name}](${absolute('/about')}): Overview, vision, mission, technology stack, industries, development process and engagement models.
- [Portfolio](${absolute('/portfolio')}): Selected live projects with features and technology stack.
- [Products](${absolute('/products')}): Ready-to-use software built and run by ${company.name}.

## Optional

- [Full company profile](${absolute('/llms-full.txt')}): Every service capability, technology, industry and project in one plain-text document.
`;
}

export function llmsFullTxt() {
  const bullets = (items: string[]) => items.map((i) => `- ${i}`).join('\n');
  const titled = (items: { title: string; text: string }[]) => items.map((i) => `- **${i.title}:** ${i.text}`).join('\n');

  return `${header()}

## Company overview

${profile.overview.join('\n\n')}

## Vision

${profile.vision}

## Mission

${bullets(profile.mission)}

## Services and capabilities

${profile.capabilities.map((c) => `### ${c.name}\n\nPage: ${absolute(c.page)}\n\n${bullets(c.items)}`).join('\n\n')}

## Technology expertise

${profile.technologies.map((t) => `- **${t.group}:** ${t.items.join(', ')}`).join('\n')}

## Industries served

${profile.industries.map((i) => `- **${i.name}:** ${i.items.join(', ')}`).join('\n')}

## Development process

${profile.process.map((s, i) => `${i + 1}. **${s.title}:** ${s.text}`).join('\n')}

## Why choose ${company.name}

${titled(profile.whyChoose)}

## Engagement models

${titled(profile.engagementModels)}

## Quality and client commitment

${bullets(profile.commitments)}

## Products

${products
  .map(
    (p) => `### ${p.name}

${p.tagline}. ${p.description}

- Website: ${p.url}
- Platforms: ${p.platforms.join(', ')}
- Made for: ${p.audience.join(', ')}
${titled(p.features)}`
  )
  .join('\n\n')}

## Portfolio: selected projects

${projects
  .map(
    (p) => `### ${p.name}

- Type: ${p.type}
- Platform: ${p.platform}
- Status: ${p.status}${p.url ? `\n- Live: ${p.url}` : ''}${p.client ? `\n- Client: ${p.client}` : ''}
- Technology: ${p.stack.map((s) => `${s.label}: ${s.value}`).join('; ')}

${p.overview}

Key features:

${bullets(p.features)}`
  )
  .join('\n\n')}

## Frequently asked questions

${servicePages
  .flatMap((p) => p.faqs)
  .map((f) => `**${f.q}**\n${f.a}`)
  .join('\n\n')}

## Contact

Have an idea, a business challenge or a software requirement? Contact ${company.name} for a free consultation.

- Email: ${company.email}
- Phone / WhatsApp: ${phones}
- Website: ${absolute('/')}
`;
}
