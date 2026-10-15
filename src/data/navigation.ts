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
    ],
  },
  {
    label: 'Produkt',
    href: '/produkte/',
    kinder: [
      { label: 'Plattform im Überblick', href: '/produkte/' },
      { label: 'EVA', href: '/produkte/eva/' },
      { label: 'EVANA 360', href: '/produkte/evana-360/' },
      { label: 'EVANA TDR', href: '/produkte/evana-tdr/' },
      { label: 'EVANA AI', href: '/produkte/evana-ai/' },
      { label: 'Integrationen', href: '/produkte/integrationen/' },
      { label: 'Sicherheit', href: '/sicherheit/' },
    ],
  },
  { label: 'Referenzen', href: '/referenzen/' },
  { label: 'Wissen', href: '/wissen/' },
];

export const footerSpalten = [
  { titel: 'Anwendungsfälle', links: anwendungsfaelle.map((a) => ({ label: a.tab, href: `/anwendungsfaelle/${a.slug}/` })) },
  {
    titel: 'Produkt',
    links: [
      { label: 'EVA', href: '/produkte/eva/' },
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
