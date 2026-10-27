import { json, fehler, vorbereiten, zeile, text } from '../../_lib/kommentare.js';
import { statusSpiegeln, schliessenUngeplant, imHintergrund } from '../../_lib/github.js';

// PATCH  /api/kommentare/:id   { status: 'offen' | 'erledigt' }  (alle)
//                              { inhalt }                        (nur eigene)
// DELETE /api/kommentare/:id   nur eigene, Antworten werden mit gelöscht

export async function onRequestPatch(context) {
  const { ich, antwort } = await vorbereiten(context);
  if (antwort) return antwort;
  const id = Number(context.params.id);
  const db = context.env.DB;
  const vorhanden = await db.prepare('SELECT * FROM kommentare WHERE id = ?').bind(id).first();
  if (!vorhanden) return fehler('Kommentar nicht gefunden.', 404);

  let d;
  try { d = await context.request.json(); } catch (e) { return fehler('Ungültige Anfrage'); }
  const jetzt = new Date().toISOString();

  if (d.status === 'offen' || d.status === 'erledigt') {
    if (vorhanden.parent_id) return fehler('Nur ganze Fäden lassen sich erledigen.');
    await db.prepare('UPDATE kommentare SET status = ?, erledigt_von = ?, aktualisiert = ? WHERE id = ?')
      .bind(d.status, d.status === 'erledigt' ? ich.name : null, jetzt, id).run();
    if (d.status !== vorhanden.status) imHintergrund(context, () => statusSpiegeln(context.env, vorhanden, d.status));
  }
  if (d.inhalt !== undefined) {
    if (vorhanden.autor_email !== ich.email) return fehler('Sie können nur eigene Kommentare bearbeiten.', 403);
    const inhalt = text(d.inhalt, 4000)?.trim();
    if (!inhalt) return fehler('Der Kommentar ist leer.');
    await db.prepare('UPDATE kommentare SET inhalt = ?, aktualisiert = ? WHERE id = ?').bind(inhalt, jetzt, id).run();
  }
  const neu = await db.prepare('SELECT * FROM kommentare WHERE id = ?').bind(id).first();
  return json({ kommentar: zeile(neu) });
}

export async function onRequestDelete(context) {
  const { ich, antwort } = await vorbereiten(context);
  if (antwort) return antwort;
  const id = Number(context.params.id);
  const db = context.env.DB;
  const vorhanden = await db.prepare('SELECT * FROM kommentare WHERE id = ?').bind(id).first();
  if (!vorhanden) return fehler('Kommentar nicht gefunden.', 404);
  if (vorhanden.autor_email !== ich.email) return fehler('Sie können nur eigene Kommentare löschen.', 403);
  await db.batch([
    db.prepare('DELETE FROM kommentare WHERE parent_id = ?').bind(id),
    db.prepare('DELETE FROM kommentare WHERE id = ?').bind(id),
  ]);
  // Gelöschter Faden: Ticket als "nicht umgesetzt" schließen.
  if (!vorhanden.parent_id) imHintergrund(context, () => schliessenUngeplant(context.env, vorhanden));
  return json({ geloescht: id });
}
