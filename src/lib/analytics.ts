/**
 * Google Analytics 4 / Google Tag Manager. IDs come from `config.analytics` in config.ts, or from these
 * build-time environment variables, which take precedence:
 *
 *   VITE_GTM_CONTAINER_ID=GTM-XXXXXXX          preferred: add GA4 and other tags inside GTM
 *   VITE_GA4_MEASUREMENT_ID=G-XXXXXXXXXX       used only when no GTM container is set
 *   VITE_ANALYTICS_CONSENT=granted|denied      default analytics_storage consent (default: granted)
 *
 * Only one of GTM or GA4 is loaded, so page views are never counted twice.
 * Events carry no personal data: never pass names, emails, phone numbers or message text to track().
 */
import { config } from './config';

const env = import.meta.env;
const pick = (value: unknown, pattern: RegExp) => (typeof value === 'string' && pattern.test(value.trim()) ? value.trim() : '');

// Environment variable first, then the ID in config.ts. Production builds only, so `npm run dev` never sends data.
export const gtmId = env.PROD ? pick(env.VITE_GTM_CONTAINER_ID || config.analytics.gtmContainerId, /^GTM-[A-Z0-9]+$/) : '';
export const ga4Id = env.PROD && !gtmId ? pick(env.VITE_GA4_MEASUREMENT_ID || config.analytics.ga4MeasurementId, /^G-[A-Z0-9]+$/) : '';
export const analyticsEnabled = Boolean(gtmId || ga4Id);
const analyticsConsent = env.VITE_ANALYTICS_CONSENT === 'denied' ? 'denied' : 'granted';

/** Inline bootstrap for <head>. Consent defaults are set before any tag loads (Consent Mode v2); ads are always denied. */
export function analyticsHeadScript() {
  if (!analyticsEnabled) return '';
  const consent = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'${analyticsConsent}'});`;
  if (gtmId) {
    return `${consent}dataLayer.push({'gtm.start':new Date().getTime(),event:'gtm.js'});`;
  }
  return `${consent}gtag('js',new Date());gtag('config','${ga4Id}');`;
}

export const analyticsScriptSrc = gtmId
  ? `https://www.googletagmanager.com/gtm.js?id=${gtmId}`
  : ga4Id
    ? `https://www.googletagmanager.com/gtag/js?id=${ga4Id}`
    : '';

type Params = Record<string, string | number | undefined>;

/** Send an event. With GTM it lands on the dataLayer (use a Custom Event trigger); with GA4 it goes straight to gtag. */
export function track(event: string, params: Params = {}) {
  if (!analyticsEnabled || typeof window === 'undefined') return;
  const w = window as unknown as { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void };
  const payload = { page_path: window.location.pathname, ...params };
  if (gtmId) (w.dataLayer ??= []).push({ event, ...payload });
  else w.gtag?.('event', event, payload);
}

/**
 * One delegated click listener for the whole site (attached once in the root layout).
 * - Elements with data-track="event_name" send that event (optional data-track-label).
 * - Otherwise WhatsApp, phone and email links are detected from their href.
 * A click sends at most one event.
 */
export function trackClicks(event: MouseEvent) {
  const el = (event.target as Element | null)?.closest<HTMLElement>('a, button');
  if (!el) return;

  const label = el.dataset.trackLabel ?? el.textContent?.replace(/\s+/g, ' ').trim().slice(0, 60);
  if (el.dataset.track) return track(el.dataset.track, { link_text: label });

  const href = el.getAttribute('href') ?? '';
  if (/^https:\/\/(wa\.me|api\.whatsapp\.com)\//.test(href)) track('whatsapp_click', { link_text: label });
  else if (href.startsWith('tel:')) track('phone_click', { link_text: label });
  else if (href.startsWith('mailto:')) track('email_click', { link_text: label });
}
