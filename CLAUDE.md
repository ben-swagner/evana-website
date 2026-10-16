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

**Bilder:** halbabstrakt, flat, UI-artig, keine Personen, keine Fotorealistik. Das Logo nie generieren, immer die Dateien aus `public/brand/` nutzen. Beispieldaten in UI-Szenen mit "Beispielhafte Darstellung" kennzeichnen.

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
