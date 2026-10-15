// Helfer für strukturierte Daten (schema.org). Jede Seite übergibt ihre Schemas an Basis.astro.
import { firma } from '../data/fakten';

export const brotkrumen = (eintraege: { label: string; href: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [{ label: 'Start', href: '/' }, ...eintraege].map((e, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: e.label,
    item: new URL(e.href, firma.url).href,
  })),
});

export const faqSchema = (eintraege: { frage: string; antwort: string }[]) =>
  eintraege.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: eintraege.map((e) => ({
          '@type': 'Question',
          name: e.frage,
          acceptedAnswer: { '@type': 'Answer', text: e.antwort },
        })),
      }
    : null;

export const artikelSchema = (a: { titel: string; beschreibung: string; datum: Date; aktualisiert?: Date; autor: string; url: string; bild?: string }) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: a.titel,
  description: a.beschreibung,
  datePublished: a.datum.toISOString(),
  dateModified: (a.aktualisiert ?? a.datum).toISOString(),
  author: a.autor === 'EVANA Redaktion' ? { '@id': `${firma.url}/#organisation` } : { '@type': 'Person', name: a.autor },
  publisher: { '@id': `${firma.url}/#organisation` },
  mainEntityOfPage: new URL(a.url, firma.url).href,
  ...(a.bild ? { image: a.bild } : {}),
});

export const produktSchema = (p: { name: string; beschreibung: string; url: string }) => ({
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: p.name,
  description: p.beschreibung,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  url: new URL(p.url, firma.url).href,
  publisher: { '@id': `${firma.url}/#organisation` },
});

export const nurGueltig = <T,>(liste: (T | null | undefined)[]) => liste.filter(Boolean) as T[];
