import { json, person } from '../_lib/kommentare.js';

// Wer bin ich? Das Widget zeigt damit den Namen an und erkennt eigene Kommentare.
export async function onRequestGet({ request, env }) {
  const ich = await person(request, env);
  return json({ ich, eingerichtet: Boolean(env.DB && (env.KOMMENTARE_DEV_USER || (env.ACCESS_TEAM && env.ACCESS_AUD))) });
}
