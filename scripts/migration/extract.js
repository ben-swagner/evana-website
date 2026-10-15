// Läuft im Browser auf einer beliebigen evana.ai-Seite (gleiche Herkunft).
// Aufruf: await window.__extract(['https://evana.ai/…/', …]) legt Ergebnisse in window.__ev ab.
window.__extract = async (urls) => {
  const md = (root) => {
    const out = []; const imgs = [];
    root.querySelectorAll('script,style,noscript,header,footer,nav,form,iframe,.elementor-location-header,.elementor-location-footer').forEach((e) => e.remove());
    const walk = (el) => {
      for (const n of el.children) {
        const tag = n.tagName.toLowerCase();
        if (/^h[1-6]$/.test(tag)) { const t = n.textContent.trim(); if (t) out.push('#'.repeat(+tag[1]) + ' ' + t); continue; }
        if (tag === 'p') { const t = n.textContent.trim(); if (t) out.push(t); continue; }
        if (tag === 'ul' || tag === 'ol') { n.querySelectorAll(':scope>li').forEach((li) => { const t = li.textContent.trim().replace(/\s+/g, ' '); if (t) out.push('- ' + t); }); continue; }
        if (tag === 'blockquote') { out.push('> ' + n.textContent.trim().replace(/\s+/g, ' ')); continue; }
        if (tag === 'img') { const s = n.getAttribute('data-src') || n.getAttribute('src'); if (s && !s.startsWith('data:')) imgs.push({ src: s, alt: n.alt || '' }); continue; }
        if (n.children.length) walk(n);
        else { const t = n.textContent && n.textContent.trim(); if (t && t.length > 40 && ['span', 'div'].includes(tag)) out.push(t); }
      }
    };
    walk(root);
    return { text: out.filter((l, i) => out.indexOf(l) === i).join('\n\n'), imgs: imgs.filter((x, i) => imgs.findIndex((y) => y.src === x.src) === i).slice(0, 12) };
  };
  window.__ev = [];
  for (const url of urls) {
    try {
      const h = await fetch(url).then((r) => r.text());
      const d = new DOMParser().parseFromString(h, 'text/html');
      const meta = (n) => d.querySelector(`meta[property="${n}"],meta[name="${n}"]`)?.content || '';
      const root = d.querySelector('main, #content, .site-content, article') || d.body;
      window.__ev.push({ url, title: d.title, description: meta('description'), published: meta('article:published_time'), ogimage: meta('og:image'), ...md(root) });
    } catch (e) { window.__ev.push({ url, error: String(e) }); }
  }
  return window.__ev.length;
};
// Anzeige in Portionen für get_page_text: window.__show(i) ersetzt den Seiteninhalt durch Portion i.
window.__show = (i, size = 40000) => {
  const json = JSON.stringify(window.__ev);
  document.body.innerHTML = '<article><pre id="d"></pre></article>';
  document.getElementById('d').textContent = json.slice(i * size, (i + 1) * size);
  return Math.ceil(json.length / size);
};
'bereit';
