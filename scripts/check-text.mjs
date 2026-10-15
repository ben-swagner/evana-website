// Prüft die gebauten Seiten auf Verstöße gegen die EVANA-Schreibregeln.
// Aufruf nach dem Build: npm run check:text
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const regeln = [
  { name: 'Gedankenstrich (–)', muster: /–/g },
  { name: 'Geviertstrich (—)', muster: /—/g },
  { name: '"nicht ..., sondern" Konstruktion', muster: /\bnicht\b[^.!?]{0,80}\bsondern\b/gi },
  { name: 'Schreibweise "EVANA KI"', muster: /EVANA KI\b/g },
  { name: 'Schreibweise "EVANA360" oder "EVANA-TDR"', muster: /EVANA360|EVANA-TDR/g },
  { name: 'Veraltete Zahl Dokumenttypen', muster: /\b(360|400)\+?\s*Dokumenttypen/g },
  { name: 'Verbotene Farbe', muster: /#(0B1F3A|07444B|F2A104|147B8C|DB8C32|990066)\b/gi },
];

const dateien = [];
const sammle = (ordner) => {
  for (const name of readdirSync(ordner)) {
    const pfad = join(ordner, name);
    if (statSync(pfad).isDirectory()) sammle(pfad);
    else if (/\.(html|txt)$/.test(name)) dateien.push(pfad);
  }
};
sammle('dist');

let fehler = 0;
for (const datei of dateien) {
  const text = readFileSync(datei, 'utf8').replace(/<script[\s\S]*?<\/script>/g, '');
  for (const r of regeln) {
    const treffer = text.match(r.muster);
    if (treffer) {
      fehler += treffer.length;
      console.log(`${datei}: ${r.name} (${treffer.length}x)`);
    }
  }
}
console.log(fehler ? `\n${fehler} Verstöße gefunden.` : `Schreibregeln: ${dateien.length} Dateien geprüft, alles sauber.`);
process.exit(fehler ? 1 : 0);
