import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const seo = { seoTitle: z.string().optional(), seoDescription: z.string().optional() };

// Referenzen: Kundengeschichten im Schema Ausgangslage, Lösung, Ergebnis, Zitat.
const referenzen = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/referenzen' }),
  schema: z.object({
    titel: z.string(),
    kunde: z.string(),
    anonym: z.boolean().default(false),
    branche: z.string(),
    kurz: z.string(),
    datum: z.coerce.date(),
    kennzahlen: z.array(z.object({ wert: z.string(), label: z.string() })).default([]),
    zitat: z.object({ text: z.string(), person: z.string(), rolle: z.string() }).optional(),
    produkte: z.array(z.string()).default([]),
    anwendungsfaelle: z.array(z.string()).default([]),
    zielgruppen: z.array(z.string()).default([]),
    altUrl: z.string().optional(),
    bild: z.string().optional(),
    ...seo,
  }),
});

// News und Presse: Pressemitteilungen, Produktupdates, Unternehmensnachrichten.
const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    titel: z.string(),
    datum: z.coerce.date(),
    kategorie: z.enum(['Pressemitteilung', 'Produktupdate', 'Unternehmen', 'Interview']),
    kurz: z.string(),
    altUrl: z.string().optional(),
    bild: z.string().optional(),
    ...seo,
  }),
});

// Wissen: Fachbeiträge und Ratgeber mit Autor, Datum und FAQ für die KI-Suche.
const wissen = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/wissen' }),
  schema: z.object({
    titel: z.string(),
    datum: z.coerce.date(),
    aktualisiert: z.coerce.date().optional(),
    autor: z.string().default('EVANA Redaktion'),
    kurz: z.string(),
    thema: z.string(),
    faq: z.array(z.object({ frage: z.string(), antwort: z.string() })).default([]),
    altUrl: z.string().optional(),
    bild: z.string().optional(),
    ...seo,
  }),
});

const recht = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/recht' }),
  schema: z.object({ titel: z.string(), stand: z.string().optional() }),
});

export const collections = { referenzen, news, wissen, recht };
