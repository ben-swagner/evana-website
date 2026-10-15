// Erzeugt aus src/data/redirects.json:
//  - public/_redirects        (Cloudflare Pages, Staging)
//  - docs/redirects-azure.csv (Vorlage für Azure Front Door Rules Engine, Produktion)
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const { regeln } = JSON.parse(readFileSync(new URL('../src/data/redirects.json', import.meta.url), 'utf8'));

// Spezifische Regeln vor Platzhalter-Regeln, sonst greift der Platzhalter zuerst.
const sortiert = [...regeln].sort((a, b) => Number(a.von.includes('*')) - Number(b.von.includes('*')));

const cloudflare = [
  '# Automatisch erzeugt aus src/data/redirects.json. Nicht von Hand bearbeiten.',
  ...sortiert.map((r) => `${r.von} ${r.nach} 301`),
  '',
].join('\n');
writeFileSync(new URL('../public/_redirects', import.meta.url), cloudflare);

mkdirSync(new URL('../docs/', import.meta.url), { recursive: true });
const csv = ['von;nach;status', ...sortiert.map((r) => `${r.von};${r.nach};${r.status}`), ''].join('\n');
writeFileSync(new URL('../docs/redirects-azure.csv', import.meta.url), csv);

console.log(`Weiterleitungen: ${regeln.length} Regeln geschrieben (${regeln.filter((r) => r.status === 'vorschlag').length} noch als Vorschlag markiert).`);
