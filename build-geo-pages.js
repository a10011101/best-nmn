const fs = require('fs');
const path = require('path');

const root = __dirname;
const site = 'https://best-nmn.com';

const markets = [
  {
    code: 'us', lang: 'en-US', name: 'United States', adjective: 'US', slug: 'nmn-supplement-us',
    title: 'Best NMN Supplement in the USA 2026 | 99.9% Pure NMN',
    description: 'Compare NMN supplements for US buyers. Review purity testing, manufacturing standards, evidence and delivery terms before ordering 500mg Beta-NMN.',
    intro: 'A practical US guide to choosing an NMN supplement based on identity, purity, testing and transparent delivery terms.',
    search: 'NMN supplement USA, NAD supplement USA, best NMN supplement, NMN benefits research',
    delivery: 'Delivery options and any import or destination charges are shown at checkout for US orders.',
    note: 'Supplement rules and import requirements can change. Check current US guidance before ordering.'
  },
  {
    code: 'ca', lang: 'en-CA', name: 'Canada', adjective: 'Canadian', slug: 'nmn-supplement-canada',
    title: 'Best NMN Supplement in Canada 2026 | 99.9% Pure NMN',
    description: 'Compare NMN supplements for Canadian buyers. Learn how to assess Beta-NMN purity, third-party testing, manufacturing and delivery before ordering.',
    intro: 'A Canada-focused guide to comparing NMN products by evidence, purity verification, manufacturing and total delivered cost.',
    search: 'NMN supplement Canada, NAD supplement Canada, best NMN supplement, pure NMN',
    delivery: 'Delivery options, currency conversion, taxes and any import charges depend on the destination and are shown at checkout where available.',
    note: 'Canadian supplement and import requirements can change. Check current guidance before ordering.'
  },
  {
    code: 'au', lang: 'en-AU', name: 'Australia', adjective: 'Australian', slug: 'nmn-supplement-australia',
    title: 'Best NMN Supplement in Australia 2026 | 99.9% Pure NMN',
    description: 'Compare NMN supplements for Australian buyers. Check Beta-NMN identity, purity, certificates, manufacturing and international delivery terms.',
    intro: 'An Australia-focused guide to evaluating NMN quality and delivery before choosing a supplement from an international seller.',
    search: 'NMN supplement Australia, best NMN supplement Australia, NAD supplement Australia, pure NMN',
    delivery: 'International delivery availability, delivery times and any destination charges depend on the address and are shown at checkout.',
    note: 'Australian supplement and import rules can change. Check current guidance before ordering.'
  },
  {
    code: 'ie', lang: 'en-IE', name: 'Ireland', adjective: 'Irish', slug: 'nmn-supplement-ireland',
    title: 'Best NMN Supplement in Ireland 2026 | 99.9% Pure NMN',
    description: 'Compare NMN supplements for Ireland. Review Beta-NMN purity, third-party testing, European manufacturing and delivery terms before ordering.',
    intro: 'An Ireland-focused guide to comparing NMN products by quality evidence, manufacturing transparency and delivery terms.',
    search: 'NMN supplement Ireland, best NMN supplement Ireland, NAD supplement Ireland, pure NMN',
    delivery: 'Delivery options, taxes and any destination charges depend on the address and are shown at checkout.',
    note: 'Irish and EU supplement rules can change. Check current guidance before ordering.'
  },
  {
    code: 'nz', lang: 'en-NZ', name: 'New Zealand', adjective: 'New Zealand', slug: 'nmn-supplement-new-zealand',
    title: 'Best NMN Supplement in New Zealand 2026 | 99.9% Pure NMN',
    description: 'Compare NMN supplements for New Zealand buyers. Review purity, testing, manufacturing, capsule contents and international delivery terms.',
    intro: 'A New Zealand guide to assessing NMN quality and the total cost of ordering from an international supplier.',
    search: 'NMN supplement New Zealand, best NMN supplement NZ, NAD supplement New Zealand, pure NMN',
    delivery: 'International delivery availability, timing and any destination charges depend on the address and are shown at checkout.',
    note: 'New Zealand supplement and import requirements can change. Check current guidance before ordering.'
  },
  {
    code: 'sg', lang: 'en-SG', name: 'Singapore', adjective: 'Singaporean', slug: 'nmn-supplement-singapore',
    title: 'Best NMN Supplement in Singapore 2026 | 99.9% Pure NMN',
    description: 'Compare NMN supplements for Singapore buyers. Review Beta-NMN identity, purity testing, manufacturing, delivery and total landed cost before ordering.',
    intro: 'A Singapore-focused guide to comparing NMN quality, product transparency and the full cost of international delivery.',
    search: 'NMN supplement Singapore, best NMN supplement Singapore, NAD supplement Singapore, pure NMN Singapore',
    delivery: 'Delivery availability, SGD conversion, taxes and any destination charges depend on the address and are shown at checkout where available.',
    note: 'Singapore supplement and import requirements can change. Check current guidance before ordering.'
  }
];

function esc(value) {
  return value.replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
}

function page(market) {
  const url = `${site}/${market.slug}/`;
  const alternates = markets.map(m => `  <link rel="alternate" hreflang="${m.lang}" href="${site}/${m.slug}/" />`).join('\n');
  return `<!DOCTYPE html>
<html lang="${market.lang}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${esc(market.title)}</title>
  <meta name="description" content="${esc(market.description)}" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="${url}" />
${alternates}
  <link rel="alternate" hreflang="x-default" href="${site}/" />
  <meta property="og:title" content="${esc(market.title)}" />
  <meta property="og:description" content="${esc(market.description)}" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="${url}" />
  <meta property="og:image" content="${site}/og-image.png" />
  <meta property="og:site_name" content="Best NMN" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${esc(market.title)}" />
  <meta name="twitter:description" content="${esc(market.description)}" />
  <meta name="twitter:image" content="${site}/og-image.png" />
  <script type="application/ld+json">${JSON.stringify({
    '@context': 'https://schema.org', '@type': 'WebPage', name: market.title, url,
    description: market.description, inLanguage: market.lang,
    isPartOf: { '@type': 'WebSite', name: 'Best NMN', url: `${site}/` }
  })}</script>
  <style>
    :root{--green:#1a7a4a;--green-light:#e6f4ee;--ink:#17221d;--muted:#5b6b62;--line:#dbe7df;--bg:#f8fbf9;}
    *{box-sizing:border-box} body{margin:0;background:var(--bg);color:var(--ink);font-family:Inter,system-ui,-apple-system,sans-serif;line-height:1.65}
    .wrap{max-width:980px;margin:auto;padding:0 22px}.top{background:#fff;border-bottom:1px solid var(--line);padding:18px 0}.nav{display:flex;align-items:center;justify-content:space-between;gap:18px}.logo{font-weight:800;color:var(--green);text-decoration:none;font-size:1.15rem}.nav a{color:var(--muted);text-decoration:none;margin-left:16px}.hero{padding:72px 0 46px;background:linear-gradient(135deg,#eef8f1,#fff)}.eyebrow{color:var(--green);font-weight:800;letter-spacing:.08em;text-transform:uppercase;font-size:.8rem}.hero h1{max-width:760px;font-size:clamp(2.2rem,5vw,4.2rem);line-height:1.08;margin:14px 0 20px}.hero p{max-width:710px;font-size:1.15rem;color:var(--muted)}.actions{display:flex;flex-wrap:wrap;gap:12px;margin-top:26px}.btn{display:inline-block;padding:13px 20px;border-radius:8px;text-decoration:none;font-weight:750}.primary{background:var(--green);color:#fff}.secondary{border:1px solid var(--green);color:var(--green);background:#fff}.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin:34px 0}.card{background:#fff;border:1px solid var(--line);border-radius:12px;padding:22px}.card h2{font-size:1.08rem;margin:0 0 8px}.card p{margin:0;color:var(--muted);font-size:.95rem}.content{padding:44px 0}.content h2{font-size:1.75rem;margin-top:38px}.content ul{padding-left:22px}.note{background:#fff8e8;border-left:4px solid #d99a16;padding:16px 18px;border-radius:6px;color:#6b5016;margin:22px 0}.region{border-top:1px solid var(--line);padding:26px 0}.region a{color:var(--green);margin-right:16px}.footer{border-top:1px solid var(--line);padding:28px 0 46px;color:var(--muted);font-size:.9rem}@media(max-width:700px){.nav{align-items:flex-start}.nav a{margin-left:8px;font-size:.9rem}.grid{grid-template-columns:1fr}.hero{padding-top:48px}}
  </style>
</head>
<body>
  <header class="top"><div class="wrap nav"><a class="logo" href="${site}/">Best NMN</a><nav><a href="${site}/blog/">Research &amp; guides</a><a href="${site}/">Global overview</a></nav></div></header>
  <main>
    <section class="hero"><div class="wrap"><div class="eyebrow">NMN supplement guide · ${esc(market.name)}</div><h1>${esc(market.title.replace(' | 99.9% Pure NMN', ''))}</h1><p>${esc(market.intro)}</p><div class="actions"><a class="btn primary" href="https://avlabs.bio/products/nmn-500mg-pure-beta-nmn-capsules-uk">View 500mg NMN</a><a class="btn secondary" href="${site}/">Read the global comparison</a></div></div></section>
    <section class="wrap content">
      <div class="note"><strong>Availability note:</strong> ${esc(market.delivery)} ${esc(market.note)}</div>
      <div class="grid"><div class="card"><h2>What to check first</h2><p>Look for the exact Beta-NMN identity, a recent independent Certificate of Analysis, stated capsule contents and a traceable manufacturer.</p></div><div class="card"><h2>How to compare value</h2><p>Compare purity evidence, capsule count, cost per gram and delivered cost. A low headline price does not always mean better value.</p></div><div class="card"><h2>Search topics for this market</h2><p>${esc(market.search)}</p></div></div>
      <h2>NMN research, quality and purchasing context</h2><p>This page is a regional buying guide, not medical advice. It explains how to evaluate product information and delivery terms for ${esc(market.name)} readers. Research findings do not establish that a supplement treats, prevents or cures disease.</p>
      <h2>Questions to ask before ordering</h2><ul><li>Is the product clearly identified as Beta-NMN and supported by current testing?</li><li>Are the manufacturer, capsule count and serving information clearly stated?</li><li>Does checkout show delivery, taxes and any import or destination charges?</li><li>Do you understand the rules that apply to supplements in your location?</li></ul>
      <div class="region"><strong>Explore another market:</strong> ${markets.map(m => `<a href="${site}/${m.slug}/">${esc(m.name)}</a>`).join('')}<a href="${site}/">Global</a></div>
    </section>
  </main>
  <footer class="footer"><div class="wrap"><strong>Best NMN</strong><p>Independent NMN research and comparison resource. Product availability depends on destination.</p><a href="${site}/privacy-policy.html">Privacy</a> · <a href="${site}/terms-of-service.html">Terms</a> · <a href="${site}/blog/">Blog</a></div></footer>
</body></html>`;
}

for (const market of markets) {
  const dir = path.join(root, market.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), page(market));
}

const homepage = path.join(root, 'index.html');
let html = fs.readFileSync(homepage, 'utf8');
const canonical = '  <link rel="canonical" href="https://best-nmn.com/" />';
for (const market of markets) {
  const link = `  <link rel="alternate" hreflang="${market.lang}" href="${site}/${market.slug}/" />`;
  if (!html.includes(`hreflang="${market.lang}"`)) {
    html = html.replace('  <link rel="alternate" hreflang="x-default"', `${link}\n  <link rel="alternate" hreflang="x-default"`);
  }
}
if (!html.includes('best-nmn-geo-links')) {
  const block = `\n    <section id="best-nmn-geo-links" style="max-width:980px;margin:32px auto;padding:24px;border:1px solid #dbe7df;border-radius:12px;background:#f8fbf9;">\n      <h2 style="margin-top:0;">Choose your market</h2>\n      <p>Regional guides cover delivery, local search terms and purchasing context. The global guide remains the default.</p>\n      ${markets.map(m => `<a href="/${m.slug}/" style="color:#1a7a4a;margin-right:16px;">${m.name}</a>`).join('')}\n    </section>\n`;
  html = html.replace('<footer>', block + '  <footer>');
} else {
  const geoLinks = markets.map(m => `<a href="/${m.slug}/" style="color:#1a7a4a;margin-right:16px;">${m.name}</a>`).join('');
  html = html.replace(/(<section id="best-nmn-geo-links"[\s\S]*?<p>[^<]*<\/p>\s*)[\s\S]*?(<\/section>)/, `$1${geoLinks}\n    $2`);
}
fs.writeFileSync(homepage, html);

const sitemap = path.join(root, 'sitemap.xml');
if (fs.existsSync(sitemap)) {
  let map = fs.readFileSync(sitemap, 'utf8');
  for (const market of markets) {
    const loc = `${site}/${market.slug}/`;
    if (!map.includes(loc)) map = map.replace('</urlset>', `  <url><loc>${loc}</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>\n</urlset>`);
  }
  fs.writeFileSync(sitemap, map);
}

console.log(`Generated ${markets.length} localized Best-NMN pages plus homepage hreflang links.`);
