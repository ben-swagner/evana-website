import { json, fehler, person, tabelle, text, zahl } from '../_lib/kommentare.js';
import { aktiv, spalten, antwortSpiegeln, rueckmeldungDirekt } from '../_lib/github.js';

// POST /api/rueckmeldung   Rückmeldung aus dem Rundgang der Nachtschicht-Vorschau
//   { paare: [{ issue, kommentar }], inhalt }   inhalt beginnt mit "Rückmeldung zur Umsetzung:"
// Gibt es den Faden in der Datenbank, wird die Rückmeldung eine Antwort darin (und wie jede Antwort
// ins Issue gespiegelt). Sonst geht sie direkt als Kommentar ins GitHub-Issue.
const PRAEFIX = 'Rückmeldung zur Umsetzung:';

export async function onRequestPost(context) {
  const { request, env } = context;
  const ich = await person(request, env);
  if (!ich) return fehler('Nicht angemeldet. Bitte die Seite neu laden.', 401);
  // Ohne GitHub-Verbindung würde die Nachtschicht die Rückmeldung nie sehen.
  if (!aktiv(env)) return fehler('In dieser Umgebung fehlt die Verbindung zu GitHub (GITHUB_TOKEN).', 503);
  let d;
  try { d = await request.json(); } catch (e) { return fehler('Ungültige Anfrage'); }
  const inhalt = text(d.inhalt, 2000)?.trim();
  if (!inhalt || !inhalt.startsWith(PRAEFIX)) return fehler('Ungültige Rückmeldung.');
  const paare = (Array.isArray(d.paare) ? d.paare : []).slice(0, 5)
    .map((p) => ({ issue: zahl(p?.issue), kommentar: zahl(p?.kommentar) }))
    .filter((p) => Number.isInteger(p.issue) && p.issue > 0);
  if (!paare.length) return fehler('Kein Kommentar angegeben.');

  const wege = [];
  for (const p of paare) {
    let erledigt = false;
    if (env.DB && Number.isInteger(p.kommentar)) {
      try {
        await tabelle(env);
        await spalten(env);
        const eltern = await env.DB.prepare('SELECT * FROM kommentare WHERE id = ? AND parent_id IS NULL AND github_issue = ?')
          .bind(p.kommentar, p.issue).first();
        if (eltern) {
          const jetzt = new Date().toISOString();
          const neu = await env.DB.prepare(`INSERT INTO kommentare (parent_id, seite, autor_email, autor_name, inhalt, status, erstellt, aktualisiert)
            VALUES (?, ?, ?, ?, ?, 'offen', ?, ?) RETURNING *`)
            .bind(eltern.id, eltern.seite, ich.email, ich.name, inhalt, jetzt, jetzt).first();
          await env.DB.prepare("UPDATE kommentare SET status = 'offen', erledigt_von = NULL, aktualisiert = ? WHERE id = ?").bind(jetzt, eltern.id).run();
          await antwortSpiegeln(env, neu, eltern);
          erledigt = true;
          wege.push('faden');
        }
      } catch (e) {
        console.error('[rueckmeldung]', e.message || e);
      }
    }
    if (!erledigt) {
      try { await rueckmeldungDirekt(env, p.issue, ich.name, inhalt); wege.push('github'); }
      catch (e) { return fehler(String(e.message || e), 502); }
    }
  }
  return json({ ok: true, autor: ich.name, wege });
}
