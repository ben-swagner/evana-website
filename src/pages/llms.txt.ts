import type { APIRoute } from 'astro';
import { firma, zahlen, produkte, sicherheit, kunden } from '../data/fakten';
import { anwendungsfaelle } from '../data/anwendungsfaelle';

// Kanonische Fakten für KI-Systeme, erzeugt aus derselben Faktenbasis wie die Website.
export const GET: APIRoute = () => {
  const zeilen = [
    `# ${firma.marke}`,
    '',
    `> ${firma.name} entwickelt seit ${firma.gegruendet} KI für Immobiliendokumente. EVANA macht aus Mietverträgen, Grundbuchauszügen, Gutachten und Protokollen strukturierte Daten, ordnet Dokumente automatisch Objekten zu und beantwortet Fragen mit Fundstelle. Sitz: ${firma.ort}, ${firma.herkunft}.`,
    '',
    '## Kennzahlen',
    `- Dokumenttypen: ${zahlen.dokumenttypen}`,
    `- Erkennungsrate Klassifizierung: ${zahlen.erkennungsrate}`,
    `- Betreutes Vermögen der Kunden: ${zahlen.betreutesVermoegen}`,
    `- Zeitersparnis: bis zu ${zahlen.zeitersparnis}`,
    '',
    '## Produkte',
    ...produkte.map((p) => `- [${p.name}](${firma.url}/produkte/${p.slug}/): ${p.kurz}`),
    '',
    '## Anwendungsfälle',
    ...anwendungsfaelle.map((a) => `- [${a.tab}](${firma.url}/anwendungsfaelle/${a.slug}/): ${a.kurz}`),
    '',
    '## Sicherheit',
    ...sicherheit.map((s) => `- ${s.titel}: ${s.text}`),
    '',
    '## Kunden (Auswahl)',
    `- ${kunden.join(', ')}`,
    '',
    '## Kontakt',
    `- Demo: ${firma.url}`,
    `- E-Mail: ${firma.email}`,
    '',
  ];
  return new Response(zeilen.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
