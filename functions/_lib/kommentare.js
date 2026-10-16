// Gemeinsame Helfer für den Kommentarmodus auf Staging (Cloudflare Pages Functions).
// Läuft nur auf Cloudflare. Azure liefert nur dist/ aus und kennt diesen Ordner nicht.
//
// Benötigte Einstellungen im Pages-Projekt:
//   D1-Binding  DB            Datenbank "evana-kommentare"
//   Variable    ACCESS_TEAM   Team-Name aus Zero Trust (xyz in xyz.cloudflareaccess.com)
//   Variable    ACCESS_AUD    Application Audience (AUD) Tag der Access-Anwendung
// Optional nur für lokale Tests: KOMMENTARE_DEV_USER = name@domain (überspringt die Access-Prüfung)

let tabelleBereit = false;
let schluesselCache = { zeit: 0, keys: [] };

export function json(daten, status = 200) {
  return new Response(JSON.stringify(daten), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
  });
}

export function fehler(text, status = 400) {
  return json({ fehler: text }, status);
}

export async function tabelle(env) {
  if (!env.DB) throw new Error('D1-Binding "DB" fehlt im Pages-Projekt.');
  if (tabelleBereit) return;
  await env.DB.batch([
    env.DB.prepare(`CREATE TABLE IF NOT EXISTS kommentare (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      parent_id INTEGER,
      seite TEXT NOT NULL,
      selektor TEXT,
      ausschnitt TEXT,
      x REAL, y REAL, seite_y REAL,
      breite INTEGER,
      autor_email TEXT NOT NULL,
      autor_name TEXT NOT NULL,
      inhalt TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'offen',
      erledigt_von TEXT,
      erstellt TEXT NOT NULL,
      aktualisiert TEXT NOT NULL
    )`),
    env.DB.prepare('CREATE INDEX IF NOT EXISTS idx_kommentare_seite ON kommentare (seite)'),
    env.DB.prepare('CREATE INDEX IF NOT EXISTS idx_kommentare_parent ON kommentare (parent_id)'),
  ]);
  tabelleBereit = true;
}

// Aus "sebastian.deppe@evana.de" wird "Sebastian Deppe".
export function nameAusEmail(email) {
  const lokal = email.split('@')[0] || email;
  return lokal
    .split(/[._-]+/)
    .filter(Boolean)
    .map((t) => t.charAt(0).toUpperCase() + t.slice(1))
    .join(' ');
}

function b64url(text) {
  const s = text.replace(/-/g, '+').replace(/_/g, '/');
  const bin = atob(s + '='.repeat((4 - (s.length % 4)) % 4));
  return Uint8Array.from(bin, (c) => c.charCodeAt(0));
}

async function schluessel(team) {
  if (Date.now() - schluesselCache.zeit < 60 * 60 * 1000 && schluesselCache.keys.length) return schluesselCache.keys;
  const antwort = await fetch(`https://${team}.cloudflareaccess.com/cdn-cgi/access/certs`);
  if (!antwort.ok) throw new Error('Access-Zertifikate nicht abrufbar');
  const { keys = [] } = await antwort.json();
  schluesselCache = { zeit: Date.now(), keys };
  return keys;
}

function cookie(request, name) {
  const kopf = request.headers.get('cookie') || '';
  const treffer = kopf.split(/;\s*/).find((c) => c.startsWith(name + '='));
  return treffer ? decodeURIComponent(treffer.slice(name.length + 1)) : null;
}

// Prüft das Access-Token (JWT) kryptografisch und gibt { email, name } zurück.
// Der Header allein reicht nicht, weil ein Client ihn sonst selbst setzen könnte.
export async function person(request, env) {
  if (env.KOMMENTARE_DEV_USER) {
    const email = String(env.KOMMENTARE_DEV_USER).toLowerCase();
    return { email, name: nameAusEmail(email) };
  }
  if (!env.ACCESS_TEAM || !env.ACCESS_AUD) return null;
  const token = request.headers.get('cf-access-jwt-assertion') || cookie(request, 'CF_Authorization');
  if (!token) return null;
  const teile = token.split('.');
  if (teile.length !== 3) return null;
  try {
    const kopf = JSON.parse(new TextDecoder().decode(b64url(teile[0])));
    const nutzlast = JSON.parse(new TextDecoder().decode(b64url(teile[1])));
    const keys = await schluessel(env.ACCESS_TEAM);
    const jwk = keys.find((k) => k.kid === kopf.kid);
    if (!jwk) return null;
    const key = await crypto.subtle.importKey('jwk', jwk, { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' }, false, ['verify']);
    const gueltig = await crypto.subtle.verify(
      'RSASSA-PKCS1-v1_5',
      key,
      b64url(teile[2]),
      new TextEncoder().encode(`${teile[0]}.${teile[1]}`),
    );
    if (!gueltig) return null;
    const aud = Array.isArray(nutzlast.aud) ? nutzlast.aud : [nutzlast.aud];
    if (!aud.includes(env.ACCESS_AUD)) return null;
    if (nutzlast.exp && nutzlast.exp * 1000 < Date.now()) return null;
    if (nutzlast.iss && nutzlast.iss !== `https://${env.ACCESS_TEAM}.cloudflareaccess.com`) return null;
    const email = String(nutzlast.email || '').toLowerCase();
    if (!email) return null;
    return { email, name: nameAusEmail(email) };
  } catch (e) {
    return null;
  }
}

export async function vorbereiten(context) {
  const { request, env } = context;
  const ich = await person(request, env);
  if (!ich) {
    return {
      antwort: fehler(
        env.ACCESS_TEAM ? 'Nicht angemeldet. Bitte die Seite neu laden.' : 'Kommentarmodus ist noch nicht eingerichtet (Access fehlt).',
        401,
      ),
    };
  }
  try {
    await tabelle(env);
  } catch (e) {
    return { antwort: fehler(String(e.message || e), 503) };
  }
  return { ich };
}

export function zeile(z) {
  return {
    id: z.id,
    parentId: z.parent_id,
    seite: z.seite,
    selektor: z.selektor,
    ausschnitt: z.ausschnitt,
    x: z.x,
    y: z.y,
    seiteY: z.seite_y,
    breite: z.breite,
    autorEmail: z.autor_email,
    autor: z.autor_name,
    inhalt: z.inhalt,
    status: z.status,
    erledigtVon: z.erledigt_von,
    erstellt: z.erstellt,
    aktualisiert: z.aktualisiert,
  };
}

export function text(wert, max) {
  if (wert === undefined || wert === null) return null;
  return String(wert).slice(0, max);
}

export function zahl(wert) {
  const n = Number(wert);
  return Number.isFinite(n) ? n : null;
}
