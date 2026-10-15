# Content-Umzug von evana.ai (WordPress) in dieses Repo

## Inhalte holen

Die alte Seite ist nur über den Chrome-Browser des Nutzers erreichbar (Claude in Chrome). Ablauf:

1. Eigenen neuen Tab öffnen, eine beliebige Seite auf `https://evana.ai/` laden (z. B. `/kontakt/`).
2. Inhalt von `scripts/migration/extract.js` per `javascript_exec` ausführen, dann `await window.__extract([...urls])`.
   Der Server ist langsam: Bei einem Timeout des Tools läuft der Abruf im Hintergrund weiter. Mit `window.__ev.length` den Fortschritt prüfen.
3. `window.__show(0)` aufrufen und mit `get_page_text` lesen, dann `__show(1)` usw. (Rückgabewert = Anzahl Portionen).

## Zielformat

Schemas stehen in `src/content.config.ts`. Dateiname = neuer Slug (Kleinbuchstaben, Bindestriche, ä→ae usw.).

- Referenzen → `src/content/referenzen/<slug>.md`, Body mit `## Ausgangslage`, `## Lösung`, `## Ergebnis` (optional weitere H2)
- News → `src/content/news/<slug>.md`
- Wissen → `src/content/wissen/<slug>.md`, mit 2 bis 4 FAQ-Einträgen im Frontmatter
- `altUrl` = alter Pfad, z. B. `/tuev-saarland/`

## Redaktionelle Regeln (verbindlich)

- Inhalte und Fakten übernehmen, Sprache glätten. Nichts erfinden: keine neuen Zahlen, Zitate, Namen.
- Zahlen: 460+ Dokumenttypen, 95 % Erkennungsrate. Alte Werte (360, 400+, 98 %) ersetzen oder weglassen. Fallbezogene Zahlen (z. B. 300 Seiten, 48 Stunden, 800 Grundbücher) bleiben wie im Original.
- Schreibweisen: EVANA, EVA, EVANA 360, EVANA TDR, EVANA AI. Nie "EVANA KI", "EVANA360", "Evana".
- Website spricht in "Sie" (alte Landingpages duzen teilweise, umstellen).
- Kein Gedankenstrich (– oder —). Stattdessen Komma, Punkt, Doppelpunkt oder Klammer.
- Keine "nicht X, sondern Y"-Konstruktionen, auch nicht über zwei Sätze verteilt.
- Keine Satzfragmente als Stilmittel, keine Boulevard-Sprache, keine rhetorischen Fragen als Einstieg, keine Ausrufezeichen in Überschriften.
- Zitate wörtlich lassen (nur offensichtliche Tippfehler korrigieren), mit Person und Rolle.
- Keine H1 im Body (die setzt das Layout), Body beginnt mit Text oder H2.
- Consent-Platzhalter, Newsletter-Boxen, "Kontakt"-Blöcke und Footer-Reste weglassen.
