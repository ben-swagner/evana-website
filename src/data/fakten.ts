// Zentrale Faktenbasis. Jede Zahl auf der Website kommt von hier.
// Quelle: Projekt-Doc "relaunch-fakten-und-entscheidungen.md" (Stand 15.10.2026).
// Änderungen nur nach Abstimmung mit EVANA.

export const firma = {
  name: 'EVANA AG',
  marke: 'EVANA',
  claim: 'Documents Talk. We translate.',
  // Der Name: EVAluation und ANAlytics.
  bedeutung: { ev: 'EV', evWort: 'aluation', ana: 'ANA', anaWort: 'lytics' },
  gegruendet: 2015,
  herkunft: 'DFKI-Campus Saarbrücken',
  strasse: 'Dudweilerstraße 17',
  plz: '66111',
  ort: 'Saarbrücken',
  weitererStandort: 'Frankfurt am Main',
  mitarbeitende: 'rund 100',
  email: 'sales@evana.de',
  emailInfo: 'info@evana.de',
  emailJobs: 'jobs@evana.de',
  emailSupport: 'support@evana.de',
  telefon: '+49 681 954460',
  telefonLink: '+49681954460',
  handelsregister: 'Amtsgericht Saarbrücken, HRB 103480',
  ustId: 'DE302060871',
  steuernummer: '040/100/02341',
  url: 'https://evana.ai',
  ceo: 'Martin Teiber',
  aufsichtsratVorsitz: 'Frank Hölzle',
  linkedin: 'https://www.linkedin.com/company/evana-ag/',
};

export const cta = {
  demo: 'https://demo.evana.ai/#mitarbeiter',
  demoLabel: 'Demo anfragen',
};

export const zahlen = {
  dokumenttypen: '460+',
  erkennungsrate: '95 %',
  betreutesVermoegen: 'über 200 Mrd. €',
  datenpunkte: '20 Mio.',
  zeitersparnis: '25 %',
  stundenProAsset: 'über 40 Stunden',
  evaAntwortzeit: 'unter 30 Sekunden',
};

export const sicherheit = [
  { titel: 'ISO 27001', text: 'Zertifiziertes Informationssicherheits-Managementsystem, auditiert durch TÜV Saarland.' },
  { titel: 'DORA-konform', text: 'Erfüllt die Anforderungen des Digital Operational Resilience Act für Finanzunternehmen und ihre IKT-Dienstleister.' },
  { titel: 'BaFin-ready', text: 'Geeignet für Banken, Versicherer und KVGs mit aufsichtsrechtlichen Pflichten.' },
  { titel: 'DSGVO-konform', text: 'Verarbeitung nach europäischem Datenschutzrecht, mit Rechte- und Löschkonzept.' },
  { titel: 'Penetrationstests', text: 'Regelmäßige unabhängige Audits und Penetrationstests, jährlich durch TÜV Austria.' },
  { titel: 'Hosting in der EU', text: 'EVANA Secure-Cloud auf Microsoft Azure, Ihre Daten bleiben in der EU.' },
  { titel: 'Rechte bis aufs Dokument', text: 'Granulare Rollen und Zugriffsrechte von der Gesellschaft bis zum einzelnen Dokument.' },
  { titel: 'SSO und SCIM', text: 'Anmeldung und Benutzerverwaltung über Ihre bestehende Identity-Lösung.' },
];

// Siegel und Partnerschaften (Datei: public/brand/evana-partner-2026.png zeigt TÜV Saarland, ISO 27001, BSFZ und Microsoft).
export const siegel = ['ISO 27001 (TÜV Saarland)', 'Forschungszulage BSFZ-Siegel', 'Microsoft Solutions Partner'];

// Team und Gremien laut alter Unternehmensseite (Stand April 2026). Vor Go-live mit EVANA abgleichen.
export const management = [
  { name: 'Martin Teiber', rolle: 'CEO, Vorstandsvorsitzender' },
  { name: 'Marc Arndt', rolle: 'VP Architecture & Engineering' },
  { name: 'Sebastian Deppe', rolle: 'VP Sales' },
];
export const aufsichtsrat = [
  { name: 'Frank Hölzle', rolle: 'Vorsitzender des Aufsichtsrats', org: 'Wecken & Cie.' },
  { name: 'Nico Schröder', rolle: 'Stellvertretender Vorsitzender', org: 'Aachener Grundvermögen KVG und AC+X Strategic Investments' },
  { name: 'Markus Grüner', rolle: 'Mitglied des Aufsichtsrats', org: 'PATRIZIA Alternative Investments' },
];
export const investoren = ['Wecken & Cie.', 'AC+X', 'Arventus', 'PATRIZIA', 'AM Alpha'];

export const produkte = [
  { name: 'EVA', slug: 'eva', kurz: 'Die KI-Assistentin. Sie fragen in normaler Sprache, EVA antwortet mit Fundstelle.' },
  { name: 'EVANA 360', slug: 'evana-360', kurz: 'KI-Dokumentenmanagement für den Bestand, vom Objekt bis zur Gesellschaft.' },
  { name: 'EVANA TDR', slug: 'evana-tdr', kurz: 'Transaktionsdatenraum für Ankauf, Verkauf und Due Diligence.' },
  { name: 'EVANA AI', slug: 'evana-ai', kurz: 'Die KI-Engine, die Dokumente klassifiziert, ausliest und strukturiert.' },
  { name: 'Report', slug: 'report', kurz: 'Alle Daten eines Objekts auf einen Blick, direkt aus den Dokumenten und immer aktuell.' },
  { name: 'Document Router', slug: 'document-router', kurz: 'Eingehende Dokumente landen automatisch beim richtigen Objekt, klassifiziert und abgelegt.' },
];

// Tracking: ID des Google Tag Managers. Leer = kein Tracking (z. B. auf Staging).
export const tracking = { gtmId: '' };

// Logoleiste: Dateien in public/kunden/, einheitlich grau. Reihenfolge = Anzeige.
export const kundenlogos = [
  { name: 'Ampega Talanx Investment Group', datei: 'ampega.png' },
  { name: 'PATRIZIA', datei: 'patrizia.png' },
  { name: 'TÜV Saarland Immobilienbewertung', datei: 'tuev-saarland.png' },
  { name: 'Mann Immobilien', datei: 'mann-immobilien.png' },
  { name: 'Wirtgen Invest', datei: 'wirtgen-invest.png' },
  { name: 'Polis Immobilien', datei: 'polis.png' },
  { name: 'Universitätsklinikum Schleswig-Holstein', datei: 'uksh.png' },
  { name: 'Meilenstein Realitäten', datei: 'meilenstein.png' },
  { name: 'Credit Suisse', datei: 'credit-suisse.png' },
];

// Für Texte und llms.txt (Auswahl, alle dürfen genannt werden).
export const kunden = [
  'Ampega', 'PATRIZIA', 'Aachener Grundvermögen', 'Mann Immobilien', 'HIH',
  'TÜV Saarland', 'Noerr', 'Polis Immobilien', 'UKSH', 'Wilo', 'Wirtgen Invest',
];
