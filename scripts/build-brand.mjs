// Generates the Namaste Soft brand assets (logo, favicons, app icons, OG image) into static/.
// Run from a folder with the tooling installed:
//   npm i sharp@0.33.5 opentype.js@1.3.4 png-to-ico@2.1.8 @fontsource/bricolage-grotesque@5.1.0
//   node build-brand.mjs <path-to-this-repo>
import sharp from 'sharp';
import opentype from 'opentype.js';
import pngToIco from 'png-to-ico';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.argv[2];
if (!ROOT) throw new Error('pass project root');
const STATIC = path.join(ROOT, 'static');
const BRAND = path.join(STATIC, 'brand');
fs.mkdirSync(BRAND, { recursive: true });

const C = { mari: '#F4900C', verm: '#E4472B', ink: '#1A1633', paper: '#FBF7F1', mute: '#B9B3CC' };

// ---------- Mark geometry (64 grid) ----------
const K = 0.3, G = 2.1, CY = 34;
const cut = (y) => 32 - K * (y - CY);
const r2 = (n) => Math.round(n * 100) / 100;

// right arch curve: P0 apex -> P3 shoulder
const P = [[32, 9], [42, 15], [50, 24.5], [50, 35]];
const bez = (p, t) => {
  const u = 1 - t;
  return [0, 1].map((i) => u*u*u*p[0][i] + 3*u*u*t*p[1][i] + 3*u*t*t*p[2][i] + t*t*t*p[3][i]);
};
const split = (p, t) => {
  const lerp = (a, b) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
  const a = lerp(p[0], p[1]), b = lerp(p[1], p[2]), c = lerp(p[2], p[3]);
  const d = lerp(a, b), e = lerp(b, c), f = lerp(d, e);
  return [[p[0], a, d, f], [f, e, c, p[3]]];
};
// t where curve point crosses line x = cut(y) + off
const cross = (off) => {
  let lo = 0, hi = 1;
  const f = (t) => { const [x, y] = bez(P, t); return x - (cut(y) + off); };
  for (let i = 0; i < 60; i++) { const m = (lo + hi) / 2; (f(lo) * f(m) <= 0) ? (hi = m) : (lo = m); }
  return (lo + hi) / 2;
};
const t1 = cross(-G), t2 = cross(G);
const [segL] = split(P, t1);
const [, segR] = split(P, t2);
const pt = (p) => `${r2(p[0])} ${r2(p[1])}`;

const leftPath = `M${r2(cut(60) - G)} 60H17Q14 60 14 57V35C14 24.5 22 15 32 9C${pt(segL[1])} ${pt(segL[2])} ${pt(segL[3])}Z`;
const rightPath = `M${r2(cut(60) + G)} 60L${pt(segR[0])}C${pt(segR[1])} ${pt(segR[2])} 50 35V57Q50 60 47 60Z`;
const spark = { cx: r2(cut(4.5)), cy: 4.5, r: 3.6 };

const markInner = (left = C.mari, right = C.verm, dot = C.mari) =>
  `<path d="${leftPath}" fill="${left}"/><path d="${rightPath}" fill="${right}"/><circle cx="${spark.cx}" cy="${spark.cy}" r="${spark.r}" fill="${dot}"/>`;



const svg = (w, h, vb, body, title = 'Namaste Soft') =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="${vb}" role="img" aria-label="${title}"><title>${title}</title>${body}</svg>\n`;

// Mark: 4..60 vertically (spark top at 0.9); crop to the mark's box
const MARK_VB = '12 0 40 61';
fs.writeFileSync(path.join(BRAND, 'namastesoft-mark.svg'), svg(160, 244, MARK_VB, markInner()));
fs.writeFileSync(path.join(BRAND, 'namastesoft-mark-ink.svg'), svg(160, 244, MARK_VB, markInner(C.ink, C.ink, C.ink)));
fs.writeFileSync(path.join(BRAND, 'namastesoft-mark-white.svg'), svg(160, 244, MARK_VB, markInner('#fff', '#fff', '#fff')));

// App tile: mark centred on ink
const tileBody = (rx, scale = 0.8) =>
  `<rect width="64" height="64" rx="${rx}" fill="${C.ink}"/><g transform="translate(32 32.5) scale(${scale}) translate(-32 -30.5)">${markInner()}</g>`;
const faviconSvg = svg(64, 64, '0 0 64 64', tileBody(14));
fs.writeFileSync(path.join(STATIC, 'favicon.svg'), faviconSvg);

// ---------- Wordmark (outlined text) ----------
const fontDir = path.resolve('node_modules/@fontsource/bricolage-grotesque/files');
const bold = opentype.loadSync(path.join(fontDir, 'bricolage-grotesque-latin-800-normal.woff'));
const medium = opentype.loadSync(path.join(fontDir, 'bricolage-grotesque-latin-500-normal.woff'));

function textPath(font, text, x, baseline, size, tracking = 0) {
  let d = '', cx = x;
  for (const g of font.stringToGlyphs(text)) {
    d += g.getPath(cx, baseline, size).toPathData(2);
    cx += (g.advanceWidth / font.unitsPerEm) * size + tracking;
  }
  return { d, width: cx - x - tracking };
}

function lockup({ onDark = false } = {}) {
  const ink = onDark ? '#FFFFFF' : C.ink;
  const soft = onDark ? C.mari : C.verm;
  const size = 44, base = 46;
  const a = textPath(bold, 'namaste', 0, 0, size, -0.9);
  const b = textPath(medium, 'soft', 0, 0, size, -0.6);
  const markW = 40 * (58 / 61); // mark box scaled to 58 tall
  const gap = 14;
  const x1 = markW + gap;
  const x2 = x1 + a.width + 1;
  const W = Math.ceil(x2 + b.width + 2);
  const body =
    `<g transform="translate(0 2) scale(${58 / 61}) translate(-12 0)">${markInner()}</g>` +
    `<path transform="translate(${r2(x1)} ${base})" d="${a.d}" fill="${ink}"/>` +
    `<path transform="translate(${r2(x2)} ${base})" d="${b.d}" fill="${soft}"/>`;
  return { W, H: 62, body };
}
const L = lockup(), LD = lockup({ onDark: true });
fs.writeFileSync(path.join(BRAND, 'namastesoft-logo.svg'), svg(L.W * 2, 124, `0 0 ${L.W} 62`, L.body));
fs.writeFileSync(path.join(BRAND, 'namastesoft-logo-on-dark.svg'), svg(LD.W * 2, 124, `0 0 ${LD.W} 62`, LD.body));

// ---------- Raster exports ----------
const png = (s, w, h, out) => sharp(Buffer.from(s), { density: 384 }).resize(w, h).png().toFile(out);

await png(svg(64, 64, '0 0 64 64', tileBody(0)), 180, 180, path.join(STATIC, 'apple-touch-icon.png'));
await png(svg(64, 64, '0 0 64 64', tileBody(14)), 192, 192, path.join(STATIC, 'icon-192.png'));
await png(svg(64, 64, '0 0 64 64', tileBody(14)), 512, 512, path.join(STATIC, 'icon-512.png'));
await png(svg(64, 64, '0 0 64 64', tileBody(0, 0.62)), 512, 512, path.join(STATIC, 'icon-maskable-512.png'));
await png(svg(L.W, 62, `0 0 ${L.W} 62`, L.body), L.W * 8, 62 * 8, path.join(BRAND, 'namastesoft-logo.png'));
await png(svg(40, 61, MARK_VB, markInner()), 400, 610, path.join(BRAND, 'namastesoft-mark.png'));

const icoPngs = [];
for (const s of [16, 32, 48]) {
  icoPngs.push(await sharp(Buffer.from(faviconSvg), { density: 384 }).resize(s, s).png().toBuffer());
}
fs.writeFileSync(path.join(STATIC, 'favicon.ico'), await pngToIco(icoPngs));

// ---------- Open Graph image ----------
{
  const tag = textPath(medium, 'Websites  ·  Apps  ·  AI  ·  WhatsApp automation', 0, 0, 34, 0);
  const head = textPath(bold, 'Namaste. Let’s build', 0, 0, 84, -2);
  const head2 = textPath(bold, 'something that works.', 0, 0, 84, -2);
  const scale = 2.2;
  const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<rect width="1200" height="630" fill="${C.ink}"/>
<g opacity="0.07" transform="translate(860 110) scale(9) translate(-12 0)">${markInner('#fff', '#fff', '#fff')}</g>
<g transform="translate(80 80) scale(${scale / 2})">${LD.body}</g>
<path transform="translate(80 330)" d="${head.d}" fill="#fff"/>
<path transform="translate(80 425)" d="${head2.d}" fill="${C.mari}"/>
<path transform="translate(80 530)" d="${tag.d}" fill="${C.mute}"/>
<rect x="0" y="618" width="600" height="12" fill="${C.mari}"/><rect x="600" y="618" width="600" height="12" fill="${C.verm}"/>
</svg>`;
  await sharp(Buffer.from(og)).png().toFile(path.join(STATIC, 'og-image.png'));
}

fs.writeFileSync(
  path.join(STATIC, 'site.webmanifest'),
  JSON.stringify(
    {
      name: 'Namaste Soft',
      short_name: 'Namaste Soft',
      icons: [
        { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
        { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
        { src: '/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
      ],
      theme_color: C.ink,
      background_color: C.paper,
      display: 'standalone'
    },
    null,
    2
  ) + '\n'
);

console.log(JSON.stringify({ leftPath, rightPath, spark, lockupWidth: L.W }, null, 2));
