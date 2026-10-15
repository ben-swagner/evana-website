// Zentrale Faktenbasis. Jede Zahl auf der Website kommt von hier.
// Quelle: Projekt-Doc "relaunch-fakten-und-entscheidungen.md" (Stand 15.10.2026).
// Änderungen nur nach Abstimmung mit EVANA.

export const firma = {
  name: 'EVANA AG',
  marke: 'EVANA',
  claim: 'Documents Talk. We translate.',
  gegruendet: 2015,
  herkunft: 'DFKI-Campus Saarbrücken',
  strasse: 'Dudweilerstraße 17',
  plz: '66111',
  ort: 'Saarbrücken',
  weitererStandort: 'Frankfurt am Main',
  mitarbeitende: 'rund 100',
  email: 'sales@evana.de',
  url: 'https://evana.ai',
  ceo: 'Martin Teiber',
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
  { titel: 'ISO 27001', text: 'Zertifiziert durch TÜV Saarland, mit jährlichen Audits.' },
  { titel: 'Penetrationstests', text: 'Jährlich unabhängig geprüft durch TÜV Austria.' },
  { titel: 'Hosting in der EU', text: 'Microsoft Azure, Ihre Daten bleiben ausschließlich in der EU.' },
  { titel: 'DSGVO-konform', text: 'Datenschutz nach europäischem Recht, mit Lösch- und Rechtekonzept.' },
  { titel: 'BaFin-ready und DORA', text: 'Geeignet für Banken, Versicherer und KVGs mit regulatorischen Pflichten.' },
  { titel: 'SSO und SCIM', text: 'Anmeldung und Benutzerverwaltung über Ihre bestehende Identity-Lösung.' },
];

export const produkte = [
  { name: 'EVA', slug: 'eva', kurz: 'Die KI-Assistentin. Sie fragen in normaler Sprache, EVA antwortet mit Fundstelle.' },
  { name: 'EVANA 360', slug: 'evana-360', kurz: 'KI-Dokumentenmanagement für den Bestand, vom Objekt bis zur Gesellschaft.' },
  { name: 'EVANA TDR', slug: 'evana-tdr', kurz: 'Transaktionsdatenraum für Ankauf, Verkauf und Due Diligence.' },
  { name: 'EVANA AI', slug: 'evana-ai', kurz: 'Die KI-Engine, die Dokumente klassifiziert, ausliest und strukturiert.' },
];

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
