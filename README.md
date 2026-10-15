# evana.ai

Neue Website der EVANA AG, gebaut mit Astro als statische Seite.

## Lokal starten

```bash
npm install
npm run dev        # Entwicklung auf http://localhost:4321
npm run build      # erzeugt Redirects und baut nach dist/
npm run check:text # prüft Schreibregeln im Build
```

## Staging auf Cloudflare Pages

1. Im Cloudflare-Dashboard: Workers & Pages → Create → Pages → Connect to Git → Repo `evana-website` wählen
2. Framework preset: Astro, Build command `npm run build`, Output directory `dist`
3. Unter Settings → Environment variables: `STAGING` = `true` und `NODE_VERSION` = `22`
4. Optional: Zugriff schützen über Zero Trust → Access → Application für die `*.pages.dev`-Domain

Jeder Push auf `main` aktualisiert die Staging-Seite, jeder Branch bekommt eine eigene Vorschau-URL. Mit `STAGING=true` setzt die Seite `noindex` und sperrt Crawler per robots.txt.

## Produktion auf Azure

Ziel: Azure Storage (Static Website) hinter **Azure Front Door Standard**. Das klassische Azure CDN nimmt seit August 2025 keine neuen Profile mehr an und wird am 30.09.2027 abgeschaltet.

1. Storage Account anlegen, "Static website" aktivieren (Index `index.html`, Fehlerseite `404.html`)
2. Front Door Standard mit dem Static-Website-Endpunkt als Origin, eigene Domain `evana.ai` und `www.evana.ai`
3. Weiterleitungen: Regeln aus `docs/redirects-azure.csv` im Front Door Rule Set anlegen, dazu `www` → Apex
4. Deployment: GitHub Action `.github/workflows/deploy-azure.yml` (manuell auslösbar, Secrets siehe Datei)

**Wichtig beim DNS-Umzug:** Der Eintrag für `demo.evana.ai` (Heyflow) bleibt unverändert.

## Inhalte pflegen

- Zahlen und Fakten: `src/data/fakten.ts`
- Anwendungsfälle: `src/data/anwendungsfaelle.ts`
- Weiterleitungen: `src/data/redirects.json`

Regeln für Texte, Farben und Bilder stehen in `CLAUDE.md`.
