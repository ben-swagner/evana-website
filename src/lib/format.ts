export const datumLang = (d: Date) => d.toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' });
export const datumKurz = (d: Date) => d.toLocaleDateString('de-DE', { month: 'long', year: 'numeric' });
