// Spiegelt den Kommentarmodus in GitHub-Issues, damit die Nachtschicht (geplante Claude-Aufgabe)
// die Kommentare ohne Cloudflare-Login abarbeiten kann.
//
// Benötigte Einstellungen im Pages-Projekt (Production und Preview):
//   Secret    GITHUB_TOKEN   Fine-grained Token, nur Repo evana-website, Berechtigung "Issues: Read and write"
//   Variable  GITHUB_REPO    optional, Standard "ben-swagner/evana-website"
// Ohne GITHUB_TOKEN passiert hier nichts, der Kommentarmodus läuft dann wie bisher.
//
// Richtungen:
//   Seite -> GitHub   neuer Kommentar = Issue (Label "kommentar"), Antwort = Issue-Kommentar,
//                     erledigt/offen = Issue schließen/öffnen
//   GitHub -> Seite   geschlossenes Issue = Faden erledigt, wieder geöffnet = offen,
//                     neuer Issue-Kommentar (z. B. Rückfrage der Nachtschicht) = Antwort im Faden
//   Der Abgleich GitHub -> Seite läuft beim Laden der Kommentare, höchstens einmal pro Minute.

const MARKE = '<!-- evk -->';
const LABEL = 'kommentar';
let spaltenBereit = false;

function repo(env) {
  return env.GITHUB_REPO || 'ben-swagner/evana-website';
}

export function aktiv(env) {
  return Boolean(env.GITHUB_TOKEN);
}

async function gh(env, pfad, methode = 'GET', daten) {
  const basis = env.GITHUB_API || 'https://api.github.com'; // GITHUB_API nur für lokale Tests
  const antwort = await fetch(`${basis}/repos/${repo(env)}${pfad}`, {
    method: methode,
    headers: {
      authorization: `Bearer ${env.GITHUB_TOKEN}`,
      accept: 'application/vnd.github+json',
      'x-github-api-version': '2022-11-28',
      'user-agent': 'evana-kommentarmodus',
      ...(daten ? { 'content-type': 'application/json' } : {}),
    },
    body: daten ? JSON.stringify(daten) : undefined,
  });
  if (!antwort.ok) throw new Error(`GitHub ${methode} ${pfad}: ${antwort.status} ${await antwort.text()}`);
  return antwort.status === 204 ? null : antwort.json();
}

// Zusätzliche Spalten und eine kleine Merktabelle. ALTER TABLE scheitert, wenn die Spalte schon da ist.
export async function spalten(env) {
  if (spaltenBereit) return;
  for (const sql of [
    'ALTER TABLE kommentare ADD COLUMN github_issue INTEGER',
    'ALTER TABLE kommentare ADD COLUMN github_kommentar INTEGER',
  ]) {
    try { await env.DB.prepare(sql).run(); } catch (e) { /* Spalte existiert bereits */ }
  }
  await env.DB.prepare('CREATE TABLE IF NOT EXISTS kommentare_meta (schluessel TEXT PRIMARY KEY, wert TEXT)').run();
  spaltenBereit = true;
}

function kurz(text, max) {
  const t = String(text || '').replace(/\s+/g, ' ').trim();
  return t.length > max ? t.slice(0, max - 1) + '…' : t;
}

function issueText(k, origin) {
  const ansicht = k.breite ? `${k.breite < 768 ? 'Mobil' : 'Desktop'}, ${k.breite}px` : 'unbekannt';
  return [
    MARKE,
    `**${k.autor_name}** kommentiert auf \`${k.seite}\` (${ansicht})`,
    '',
    k.ausschnitt ? `> Stelle: ${kurz(k.ausschnitt, 300)}` : '',
    '',
    k.inhalt,
    '',
    `Zur Stelle auf Staging: ${origin}${k.seite}#evk-${k.id}`,
    '',
    `<sub>Kommentar #${k.id} aus dem Kommentarmodus. Schließen dieses Tickets markiert den Faden auf der Seite als erledigt.</sub>`,
  ].join('\n');
}

// Legt für einen Wurzel-Kommentar ein Issue an und merkt sich die Nummer.
export async function issueAnlegen(env, k, origin) {
  if (!aktiv(env) || k.parent_id || k.github_issue) return null;
  await spalten(env);
  const issue = await gh(env, '/issues', 'POST', {
    title: `#${k.id} ${k.seite}: ${kurz(k.inhalt, 70)}`,
    body: issueText(k, origin),
    labels: [LABEL],
  });
  await env.DB.prepare('UPDATE kommentare SET github_issue = ? WHERE id = ?').bind(issue.number, k.id).run();
  if (k.status === 'erledigt') await gh(env, `/issues/${issue.number}`, 'PATCH', { state: 'closed', state_reason: 'completed' });
  return issue.number;
}

// Antwort im Faden als Issue-Kommentar, öffnet ein geschlossenes Issue wieder.
export async function antwortSpiegeln(env, antwort, eltern) {
  if (!aktiv(env) || !eltern?.github_issue) return;
  await spalten(env);
  const c = await gh(env, `/issues/${eltern.github_issue}/comments`, 'POST', {
    body: `${MARKE}\n**${antwort.autor_name}** antwortet:\n\n${antwort.inhalt}`,
  });
  await env.DB.prepare('UPDATE kommentare SET github_kommentar = ? WHERE id = ?').bind(c.id, antwort.id).run();
  await gh(env, `/issues/${eltern.github_issue}`, 'PATCH', { state: 'open' });
}

export async function statusSpiegeln(env, k, status) {
  if (!aktiv(env) || !k?.github_issue) return;
  await gh(env, `/issues/${k.github_issue}`, 'PATCH',
    status === 'erledigt' ? { state: 'closed', state_reason: 'completed' } : { state: 'open' });
}

export async function schliessenUngeplant(env, k) {
  if (!aktiv(env) || !k?.github_issue) return;
  await gh(env, `/issues/${k.github_issue}/comments`, 'POST', { body: `${MARKE}\nDer Kommentar wurde auf der Seite gelöscht.` });
  await gh(env, `/issues/${k.github_issue}`, 'PATCH', { state: 'closed', state_reason: 'not_planned' });
}

// GitHub -> Seite. Höchstens einmal pro Minute, Fehler werden nur protokolliert.
export async function abgleichen(env, { erzwingen = false } = {}) {
  if (!aktiv(env)) return { aktiv: false };
  await spalten(env);
  const db = env.DB;
  const jetzt = new Date();
  const meta = await db.prepare("SELECT wert FROM kommentare_meta WHERE schluessel = 'abgleich'").first();
  const letzter = meta ? new Date(meta.wert) : new Date(0);
  if (!erzwingen && jetzt - letzter < 60 * 1000) return { aktiv: true, uebersprungen: true };
  // Kleiner Puffer, damit nichts zwischen zwei Abgleichen verloren geht.
  const seit = new Date(letzter.getTime() - 2 * 60 * 1000).toISOString();
  await db.prepare("INSERT INTO kommentare_meta (schluessel, wert) VALUES ('abgleich', ?) ON CONFLICT(schluessel) DO UPDATE SET wert = excluded.wert")
    .bind(jetzt.toISOString()).run();

  let status = 0;
  let antworten = 0;

  const issues = await gh(env, `/issues?labels=${LABEL}&state=all&since=${encodeURIComponent(seit)}&per_page=100`);
  for (const issue of issues || []) {
    if (issue.pull_request) continue;
    const ziel = issue.state === 'closed' ? 'erledigt' : 'offen';
    const r = await db.prepare(
      'UPDATE kommentare SET status = ?, erledigt_von = ?, aktualisiert = ? WHERE github_issue = ? AND parent_id IS NULL AND status != ?',
    ).bind(ziel, ziel === 'erledigt' ? 'GitHub' : null, jetzt.toISOString(), issue.number, ziel).run();
    status += r.meta?.changes || 0;
  }

  const kommentare = await gh(env, `/issues/comments?since=${encodeURIComponent(seit)}&per_page=100`);
  for (const c of kommentare || []) {
    if (String(c.body || '').includes(MARKE)) continue; // stammt von der Seite selbst
    const nummer = Number(String(c.issue_url).split('/').pop());
    const eltern = await db.prepare('SELECT id, seite FROM kommentare WHERE github_issue = ? AND parent_id IS NULL').bind(nummer).first();
    if (!eltern) continue;
    const schon = await db.prepare('SELECT id FROM kommentare WHERE github_kommentar = ?').bind(c.id).first();
    if (schon) continue;
    const nachtschicht = String(c.body).includes('<!-- nachtschicht -->');
    const name = nachtschicht ? 'Nachtschicht (Claude)' : (c.user?.login || 'GitHub');
    const inhalt = String(c.body).replace(/<!--[\s\S]*?-->/g, '').trim().slice(0, 4000);
    if (!inhalt) continue;
    const zeit = c.created_at || jetzt.toISOString();
    await db.prepare(`INSERT INTO kommentare
      (parent_id, seite, autor_email, autor_name, inhalt, status, erstellt, aktualisiert, github_kommentar)
      VALUES (?, ?, ?, ?, ?, 'offen', ?, ?, ?)`)
      .bind(eltern.id, eltern.seite, `github:${c.user?.login || 'unbekannt'}`, name, inhalt, zeit, zeit, c.id).run();
    antworten += 1;
  }
  return { aktiv: true, status, antworten };
}

// Im Hintergrund ausführen, ohne die Antwort an den Browser aufzuhalten.
export function imHintergrund(context, arbeit) {
  const p = arbeit().catch((e) => console.error('[github]', e.message || e));
  if (context.waitUntil) context.waitUntil(p);
  return p;
}
