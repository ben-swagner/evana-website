# EVANA Website (evana.ai)

Astro-Projekt mit reinem Static-Output. Staging auf Cloudflare Pages, Produktion auf Azure (Blob Storage hinter Azure Front Door Standard).

## Verbindliche Regeln

**Fakten:** Jede Zahl, jeder Kundenname und jede Zertifizierung kommt aus `src/data/fakten.ts`. Keine Zahlen frei im Text erfinden oder aus alten Seiten übernehmen. Ältere Werte (360 oder 400+ Dokumenttypen, 98 % Trefferquote) sind ungültig.

**Schreibweisen:** EVANA, EVA ("unsere KI-Assistentin EVA"), EVANA 360, EVANA TDR, EVANA AI. Nie "EVANA KI", "EVANA360", "EVANA-TDR". Die Website spricht in "Sie".

**Schreibregeln:**
- Kein Gedankenstrich (– oder —)
- Keine "Nicht X, sondern Y"-Konstruktionen, weder in einem Satz noch über zwei Sätze
- Keine Sätze ohne Subjekt und Verb als Stilmittel, keine Ketten kurzer Fragmente
- Keine rhetorischen Fragen als Einstieg, keine Boulevard-Sprache
- Nach jedem Build: `npm run check:text`

**Farben:** nur die Tokens in `src/styles/global.css`. Verboten: Navy, erfundene Blau- oder Türkistöne, die alten Werte #07444B und #F2A104.

**Schrift:** Titillium Web, selbst gehostet über @fontsource (kein Google-Fonts-CDN, DSGVO). H1 fett in Großbuchstaben.

**CTA:** Primär immer `cta.demo` (Heyflow-Flow auf demo.evana.ai). Kein Pricing auf der Website, Ausnahme ist die ROI-Sprint-Seite.

**Bilder:** halbabstrakt, flat, UI-artig, keine Personen, keine Fotorealistik. Das Logo nie generieren, immer die Dateien aus `public/brand/` nutzen. UI-Szenen tragen keinen Hinweis "Beispielhafte Darstellung" (Entscheidung Ben, 27.10.2026). Beispieldaten trotzdem plausibel halten und nie echte Kunden als Demo-Objekt zeigen.

## Struktur

- `src/data/fakten.ts`: Faktenbasis (Firma, Zahlen, Sicherheit, Produkte, Kunden)
- `src/data/anwendungsfaelle.ts`: die sechs Anwendungsfälle, speisen Startseite und `/anwendungsfaelle/[slug]/`
- `src/data/navigation.ts`: Haupt- und Footer-Navigation
- `src/data/redirects.json`: alle 301-Weiterleitungen der alten WordPress-URLs (eine Quelle für Cloudflare und Azure)
- `src/components/start/`: Sektionen der Startseite
- `src/components/DemoAnsicht.astro`: UI-Szenen (Eingang, Linie, Ergebnis)
- `src/pages/robots.txt.ts`, `src/pages/llms.txt.ts`: werden aus der Faktenbasis erzeugt
- `docs/`: Search-Console-Daten, Original-Logos, erzeugte Redirect-Tabelle für Azure

## Bildsprache

Leitmotiv ist die Linie, die von Dokumenten ausgeht und von Petrol über Magenta zu Orange wechselt (Einlesen, Verarbeiten, Antworten). Sie wird sparsam eingesetzt: animiert nur im Hero, statisch als Verbindung in den UI-Szenen und im Abschluss-CTA. Wiederkehrende Objekte sind weiße Dokumentkarten, der orange Knoten und Fundstellen-Chips.

## Kommentarmodus (nur Staging)

Auf Staging können angemeldete Personen (Cloudflare Access, @evana.de, @evana.ai, ben@swagner.co) Kommentare an beliebige Stellen der Seite heften.

- Widget: `src/components/Kommentarmodus.astro`, eingebunden in `Basis.astro` nur bei `STAGING=true`. Mit der Cloudflare-Variable `KOMMENTARE=false` und einem neuen Build verschwindet es ganz. Die Produktion enthält es nie.
- API: `functions/api/` (Cloudflare Pages Functions), Daten in D1 (`evana-kommentare`, Binding `DB`), Anmeldung über das Access-JWT (`ACCESS_TEAM`, `ACCESS_AUD`).
- Kommentare abarbeiten: `/api/kommentare?format=md&status=offen` liefert alle offenen Punkte als Markdown, nach Seite gruppiert, mit Link `#evk-<id>` zur Stelle. Nach dem Umsetzen den Faden auf der Seite als erledigt markieren.
- Lokal testen: `npm run build && npx wrangler pages dev dist --d1 DB=evana-kommentare --binding KOMMENTARE_DEV_USER=name@evana.de`
- GitHub-Spiegel (`functions/_lib/github.js`): Mit dem Secret `GITHUB_TOKEN` im Pages-Projekt wird jeder Kommentar ein Issue mit Label `kommentar`. Antworten werden Issue-Kommentare, Erledigen schließt das Issue. Geschlossene Issues und neue Issue-Kommentare fließen beim Laden der Kommentare zurück (höchstens einmal pro Minute). Nachtrag und sofortiger Abgleich: `POST /api/kommentare/github`.

## Nachtschicht

Eine geplante Claude-Aufgabe arbeitet nachts die offenen Issues mit Label `kommentar` ab, sobald mindestens 5 offen sind.

- Arbeitet auf einem Branch `nachtschicht/JJJJ-MM-TT` und öffnet einen Pull Request mit `Closes #n` für jedes umgesetzte Issue. Nie direkt auf `main` pushen.
- Klare Änderungen (Text, Layout, Reihenfolge) setzt sie um. Alles, was neue Zahlen, Produktaussagen, Kunden oder Rechtliches betrifft oder dem Faktendokument widerspricht, setzt sie nicht um. Dort schreibt sie eine kurze Rückfrage als Issue-Kommentar mit `<!-- nachtschicht -->` in der ersten Zeile und vergibt das Label `rueckfrage`.
- Issues mit Label `rueckfrage` oder `warten` lässt sie liegen, solange darauf keine neue Antwort gekommen ist.
- Vor dem Pull Request: `npm run build` und `npm run check:text` müssen sauber laufen.
- Ben prüft morgens die Vorschau des Branches und merged. Der Merge schließt die Issues, die Fäden auf der Seite springen dann auf erledigt.
