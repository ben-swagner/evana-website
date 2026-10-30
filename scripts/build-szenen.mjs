// Erzeugt aus der Messe-Animation "EVANA goes next level" einzelne, einbettbare Szenen
// unter public/szenen/<name>.html (für iframes auf Produkt- und Anwendungsfall-Seiten).
// Quelle: docs/animation/evana-goes-next-level.html (unverändert lassen).
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const quelle = readFileSync(new URL('../docs/animation/evana-goes-next-level.html', import.meta.url), 'utf8');

// level = data-level der Szene, schleife = Szene nach Ablauf neu starten (Autoplay der Szene),
// breit = Bühne ist 920 statt 820 px breit.
const szenen = {
  router: { level: '1', schleife: false, breit: true },
  mcp: { level: '2', schleife: true, breit: false },
  // qa spielt einmal durch und bleibt dann stehen, damit man in Ruhe lesen kann
  qa: { level: '3', schleife: true, einmal: true, breit: false },
  report: { level: 'erp', schleife: false, breit: true },
};

const fonts = `<style>
@font-face{font-family:'Titillium Web';font-weight:400;font-display:swap;src:url(/szenen/fonts/titillium-web-latin-400-normal.woff2) format('woff2')}
@font-face{font-family:'Titillium Web';font-weight:600;font-display:swap;src:url(/szenen/fonts/titillium-web-latin-600-normal.woff2) format('woff2')}
@font-face{font-family:'Titillium Web';font-weight:700;font-display:swap;src:url(/szenen/fonts/titillium-web-latin-700-normal.woff2) format('woff2')}
</style>`;

mkdirSync(new URL('../public/szenen/', import.meta.url), { recursive: true });

for (const [name, cfg] of Object.entries(szenen)) {
  let html = quelle;
  // Google Fonts entfernen (DSGVO), stattdessen selbst gehostet
  html = html.replace(/<link rel="preconnect"[^>]*>\s*/g, '').replace(/<link rel="stylesheet" href="https:\/\/fonts\.googleapis[^>]*>/, fonts);
  // Alle Szenen bleiben im DOM (das Skript greift auf ihre Elemente zu), Textspalte und Kopfzeile entfallen
  const levels = [...quelle.matchAll(/<section class="scene[^"]*" data-level="([^"]+)"/g)].map((m) => m[1]);
  const index = levels.indexOf(cfg.level);
  html = html.replace(/<section class="scene[^"]*" data-level="([^"]+)"[\s\S]*?<\/section>/g, (m) => {
    return m
      .replace(/<div class="topbar">[\s\S]*?<\/div><\/div><\/div>/, '')
      .replace(/<div class="copy[^"]*">[\s\S]*?<\/(ul|div)>\s*<\/div>\s*(?=<div class="stage)/, '');
  });
  const w = cfg.breit ? 920 : 820;
  const einbettung = `<meta name="robots" content="noindex"><style>
body.embed{background:transparent}
body.embed #deck{width:${w}px;height:690px;border-radius:0}
body.embed .stage{left:0!important;top:36px!important}
body.embed .controls,body.embed .hint,body.embed .reveal,body.embed #progBar,body.embed .topbar,body.embed .copy{display:none!important}
</style>`;
  html = html.replace('</head>', einbettung + '</head>');
  html = html.replace('<body', '<body class="clean embed"');
  // Skalierung auf die Bühne statt auf 1600 x 900
  html = html.replace('Math.min(innerWidth / 1600, innerHeight / 900)', `Math.min(innerWidth / ${w}, innerHeight / 690)`);
  // Szene in Schleife statt zur nächsten Szene
  html = html.replace('sLater(() => show(cur + 1), dur);', cfg.einmal ? '' : 'sLater(() => show(cur), dur);');
  // Start: direkt die Szene, ggf. mit Autoplay
  html = html.replace(
    "if (new URLSearchParams(location.search).has('autoplay')) setAuto(true); else show(0);",
    cfg.schleife ? `auto = true; document.body.classList.add("auto"); show(${index});` : `show(${index});`,
  );
  // Tastatursteuerung der Präsentation abschalten
  html = html.replace("document.addEventListener('keydown', e => {", "document.addEventListener('keydown_aus', e => {");
  writeFileSync(new URL(`../public/szenen/${name}.html`, import.meta.url), html);
}
console.log(`Szenen: ${Object.keys(szenen).join(', ')} erzeugt.`);
