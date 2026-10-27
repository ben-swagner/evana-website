import { json, fehler, vorbereiten } from '../../_lib/kommentare.js';
import { aktiv, spalten, issueAnlegen, abgleichen } from '../../_lib/github.js';

// POST /api/kommentare/github   Nachtrag und Abgleich von Hand (nur angemeldet)
//   legt für alle offenen Fäden ohne Ticket ein GitHub-Issue an und gleicht danach sofort ab.
// GET  /api/kommentare/github   Status der Verbindung
export async function onRequestGet(context) {
  const { antwort } = await vorbereiten(context);
  if (antwort) return antwort;
  return json({ aktiv: aktiv(context.env), repo: context.env.GITHUB_REPO || 'ben-swagner/evana-website' });
}

export async function onRequestPost(context) {
  const { antwort } = await vorbereiten(context);
  if (antwort) return antwort;
  const { env } = context;
  if (!aktiv(env)) return fehler('GITHUB_TOKEN fehlt im Pages-Projekt.', 503);
  await spalten(env);
  const origin = new URL(context.request.url).origin;
  const { results = [] } = await env.DB
    .prepare("SELECT * FROM kommentare WHERE parent_id IS NULL AND github_issue IS NULL AND status = 'offen' ORDER BY id")
    .all();
  const angelegt = [];
  for (const k of results) {
    try { angelegt.push({ kommentar: k.id, issue: await issueAnlegen(env, k, origin) }); }
    catch (e) { return fehler(`Abbruch bei Kommentar #${k.id}: ${e.message}`, 502); }
  }
  let abgleich;
  try { abgleich = await abgleichen(env, { erzwingen: true }); } catch (e) { abgleich = { fehler: e.message }; }
  return json({ angelegt, abgleich });
}
