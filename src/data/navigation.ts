import { anwendungsfaelle } from './anwendungsfaelle';

export type NavPunkt = { label: string; href: string; kinder?: { label: string; href: string; text?: string }[] };

export const hauptnavigation: NavPunkt[] = [
  {
    label: 'Anwendungsfälle',
    href: '/anwendungsfaelle/',
    kinder: anwendungsfaelle.map((a) => ({ label: a.tab, href: `/anwendungsfaelle/${a.slug}/`, text: a.titel })),
  },
  {
    label: 'Für wen',
    href: '/loesungen/',
    kinder: [
      { label: 'Asset Management', href: '/loesungen/asset-management/' },
      { label: 'Property und Facility Management', href: '/loesungen/property-facility-management/' },
      { label: 'Transaktion und Due Diligence', href: '/loesungen/transaktion-due-diligence/' },
      { label: 'Banken, Versicherer und KVGs', href: '/loesungen/finanzwirtschaft/' },
      { label: 'Öffentliche Hand', href: '/loesungen/oeffentliche-hand/' },
      { label: 'Filialnetze und Franchise', href: '/loesungen/filialnetze-franchise/' },
      { label: 'Kanzleien und Beratung', href: '/loesungen/kanzleien-beratung/' },
      { label: 'Corporate Real Estate', href: '/loesungen/corporate-real-estate/' },
      { label: 'Healthcare und Pflege', href: '/loesungen/healthcare-pflege/' },
    ],
  },
  {
    label: 'Produkt',
    href: '/produkte/',
    kinder: [
      { label: 'Plattform im Überblick', href: '/produkte/', text: 'Wie EVA, EVANA 360, TDR und AI zusammenspielen' },
      { label: 'EVA', href: '/produkte/eva/', text: 'Die KI-Assistentin für Ihre Dokumente' },
      { label: 'Report', href: '/produkte/report/', text: 'Alle Daten eines Objekts auf einen Blick' },
      { label: 'Document Router', href: '/produkte/document-router/', text: 'Eingehende Dokumente automatisch zuordnen' },
      { label: 'EVANA 360', href: '/produkte/evana-360/', text: 'KI-Dokumentenmanagement für den Bestand' },
      { label: 'EVANA TDR', href: '/produkte/evana-tdr/', text: 'Transaktionsdatenraum mit KI' },
      { label: 'EVANA AI', href: '/produkte/evana-ai/', text: 'Die KI-Engine darunter' },
      { label: 'Integrationen', href: '/produkte/integrationen/', text: 'Claude, Copilot, SAP und APIs' },
      { label: 'Sicherheit', href: '/sicherheit/', text: 'ISO 27001, DORA, BaFin, DSGVO' },
    ],
  },
  { label: 'Referenzen', href: '/referenzen/' },
  {
    label: 'Wissen',
    href: '/wissen/',
    kinder: [
      { label: 'Fachbeiträge', href: '/wissen/', text: 'Ratgeber zu KI und Dokumentenmanagement' },
      { label: 'News und Presse', href: '/news/', text: 'Produktupdates und Pressemitteilungen' },
    ],
  },
];

export const footerSpalten = [
  { titel: 'Anwendungsfälle', links: anwendungsfaelle.map((a) => ({ label: a.tab, href: `/anwendungsfaelle/${a.slug}/` })) },
  {
    titel: 'Produkt',
    links: [
      { label: 'EVA', href: '/produkte/eva/' },
      { label: 'Report', href: '/produkte/report/' },
      { label: 'Document Router', href: '/produkte/document-router/' },
      { label: 'EVANA 360', href: '/produkte/evana-360/' },
      { label: 'EVANA TDR', href: '/produkte/evana-tdr/' },
      { label: 'EVANA AI', href: '/produkte/evana-ai/' },
      { label: 'Integrationen', href: '/produkte/integrationen/' },
      { label: 'Sicherheit', href: '/sicherheit/' },
    ],
  },
  {
    titel: 'Unternehmen',
    links: [
      { label: 'Über EVANA', href: '/unternehmen/' },
      { label: 'Referenzen', href: '/referenzen/' },
      { label: 'Wissen', href: '/wissen/' },
      { label: 'News und Presse', href: '/news/' },
      { label: 'Karriere', href: '/karriere/' },
      { label: 'Kontakt', href: '/kontakt/' },
    ],
  },
];

export const rechtliches = [
  { label: 'Impressum', href: '/impressum/' },
  { label: 'Datenschutz', href: '/datenschutz/' },
];

