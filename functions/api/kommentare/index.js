import { json, fehler, vorbereiten, zeile, text, zahl } from '../../_lib/kommentare.js';

// GET  /api/kommentare                 alle Kommentare (für Übersicht)
// GET  /api/kommentare?seite=/pfad/    Kommentare einer Seite
// GET  /api/kommentare?format=md       Markdown-Export, nach Seite gruppiert (zum Abarbeiten)
//      optional &status=offen|erledigt
// POST /api/kommentare                 neuer Kommentar oder Antwort (mit parentId)

export async function onRequestGet(context) {
  const { antwort } = await vorbereiten(context);
  if (antwort) return antwort;
  const url = new URL(context.request.url);
  const seite = url.searchParams.get('seite');
  const status = url.searchParams.get('status');

  let sql = 'SELECT * FROM kommentare';
  const bed = [];
  const werte = [];
  if (seite) { bed.push('seite = ?'); werte.push(seite); }
  if (bed.length) sql += ' WHERE ' + bed.join(' AND ');
  sql += ' ORDER BY seite, id';
  const { results = [] } = await context.env.DB.prepare(sql).bind(...werte).all();
  let liste = results.map(zeile);

  if (status) {
    const wurzeln = new Set(liste.filter((k) => !k.parentId && k.status === status).map((k) => k.id));
    liste = liste.filter((k) => wurzeln.has(k.id) || wurzeln.has(k.parentId));
  }

  if (url.searchParams.get('format') === 'md') {
    return new Response(markdown(liste, url.origin), {
      headers: { 'content-type': 'text/markdown; charset=utf-8', 'cache-control': 'no-store' },
    });
  }
  return json({ kommentare: liste });
}

export async function onRequestPost(context) {
  const { ich, antwort } = await vorbereiten(context);
  if (antwort) return antwort;
  let d;
  try { d = await context.request.json(); } catch (e) { return fehler('Ungültige Anfrage'); }

  const inhalt = text(d.inhalt, 4000)?.trim();
  if (!inhalt) return fehler('Der Kommentar ist leer.');
  const parentId = zahl(d.parentId);
  const jetzt = new Date().toISOString();
  const db = context.env.DB;

  let seite = text(d.seite, 300);
  if (parentId) {
    const eltern = await db.prepare('SELECT seite FROM kommentare WHERE id = ? AND parent_id IS NULL').bind(parentId).first();
    if (!eltern) return fehler('Der Kommentar, auf den Sie antworten, existiert nicht mehr.', 404);
    seite = eltern.seite;
  }
  if (!seite || !seite.startsWith('/')) return fehler('Seite fehlt.');

  const neu = await db
    .prepare(`INSERT INTO kommentare
      (parent_id, seite, selektor, ausschnitt, x, y, seite_y, breite, autor_email, autor_name, inhalt, status, erstellt, aktualisiert)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'offen', ?, ?) RETURNING *`)
    .bind(
      parentId,
      seite,
      parentId ? null : text(d.selektor, 1000),
      parentId ? null : text(d.ausschnitt, 300),
      parentId ? null : zahl(d.x),
      parentId ? null : zahl(d.y),
      parentId ? null : zahl(d.seiteY),
      parentId ? null : zahl(d.breite),
      ich.email,
      ich.name,
      inhalt,
      jetzt,
      jetzt,
    )
    .first();

  // Eine Antwort öffnet einen erledigten Faden wieder.
  if (parentId) {
    await db.prepare("UPDATE kommentare SET status = 'offen', erledigt_von = NULL, aktualisiert = ? WHERE id = ? AND status = 'erledigt'")
      .bind(jetzt, parentId).run();
  }
  return json({ kommentar: zeile(neu) }, 201);
}

function markdown(liste, origin) {
  const wurzeln = liste.filter((k) => !k.parentId);
  const antworten = liste.filter((k) => k.parentId);
  const seiten = [...new Set(wurzeln.map((k) => k.seite))];
  const datum = (iso) => new Date(iso).toLocaleString('de-DE', { timeZone: 'Europe/Berlin', dateStyle: 'short', timeStyle: 'short' });
  const offen = wurzeln.filter((k) => k.status === 'offen').length;

  let md = `# Kommentare zur Staging-Seite\n\nStand: ${datum(new Date().toISOString())}. ${wurzeln.length} Kommentare, davon ${offen} offen.\n`;
  for (const seite of seiten) {
    md += `\n## ${seite}\n`;
    for (const k of wurzeln.filter((w) => w.seite === seite)) {
      const ansicht = k.breite ? (k.breite < 768 ? 'Mobil' : 'Desktop') + `, ${k.breite}px` : '';
      md += `\n### #${k.id} ${k.status === 'erledigt' ? '[erledigt] ' : ''}${k.autor}, ${datum(k.erstellt)}${ansicht ? ` (${ansicht})` : ''}\n`;
      if (k.ausschnitt) md += `\n> Stelle: ${k.ausschnitt.replace(/\s+/g, ' ')}\n`;
      md += `\n${k.inhalt}\n`;
      for (const a of antworten.filter((x) => x.parentId === k.id)) {
        md += `\n- **${a.autor}** (${datum(a.erstellt)}): ${a.inhalt.replace(/\n+/g, ' ')}\n`;
      }
      md += `\nLink: ${origin}${seite}#evk-${k.id}\n`;
    }
  }
  return md;
}
