// Renders each public route to static HTML in dist/ after the client + SSR builds.
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = process.cwd();
const dist = path.join(root, 'dist');
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const { render, getRouteMeta, PRERENDER_ROUTES } = await import(
  pathToFileURL(path.join(root, 'dist-server', 'entry-server.js')).href
);

const SITE = 'https://vedantsutariya.com';
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

function replaceOnce(html, regex, replacement, label) {
  if (!regex.test(html)) throw new Error(`prerender: could not find ${label} in index.html`);
  return html.replace(regex, () => replacement);
}

function buildPage(route) {
  const meta = getRouteMeta(route);
  let html = template;
  html = replaceOnce(html, /<title>[^<]*<\/title>/, `<title>${esc(meta.title)}</title>`, 'title');
  html = replaceOnce(html, /<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${esc(meta.description)}" />`, 'description');
  html = replaceOnce(html, /<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${esc(meta.canonical)}" />`, 'canonical');
  const pairs = [
    ['property="og:title"', meta.title],
    ['property="og:description"', meta.description],
    ['property="og:url"', meta.canonical],
    ['name="twitter:title"', meta.title],
    ['name="twitter:description"', meta.description],
  ];
  for (const [attr, value] of pairs) {
    html = replaceOnce(html, new RegExp(`<meta ${attr} content="[^"]*" />`), `<meta ${attr} content="${esc(value)}" />`, attr);
  }
  const ld = meta.jsonLd
    .map((o) => `<script type="application/ld+json">${JSON.stringify(o).replace(/</g, '\u003c')}</script>`)
    .join('\n    ');
  if (!html.includes('<!--jsonld-->')) throw new Error('prerender: jsonld marker missing in index.html');
  html = html.replace('<!--jsonld-->', () => ld);
  const body = render(route);
  html = replaceOnce(html, /<div id="root"><\/div>/, `<div id="root" data-route="${route}">${body}</div>`, 'root');
  return html;
}

for (const route of PRERENDER_ROUTES) {
  const out = route === '/' ? path.join(dist, 'index.html') : path.join(dist, route, 'index.html');
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, buildPage(route));
  console.log(`prerendered ${route}`);
}

const today = new Date().toISOString().slice(0, 10);
const urls = PRERENDER_ROUTES.map(
  (r) => `  <url>\n    <loc>${SITE}${r}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${r === '/' ? '1.0' : '0.8'}</priority>\n  </url>`
).join('\n');
fs.writeFileSync(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
);
console.log('wrote sitemap.xml');
