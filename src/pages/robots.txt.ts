import type { APIRoute } from 'astro';

// KI-Such- und Abruf-Bots sind ausdrücklich erwünscht (GEO). Auf Staging wird alles gesperrt.
const staging = process.env.STAGING === 'true';

export const GET: APIRoute = () => {
  const inhalt = staging
    ? 'User-agent: *\nDisallow: /\n'
    : [
        'User-agent: *',
        'Allow: /',
        '',
        '# KI-Suche und Abruf ausdrücklich erlaubt',
        ...['OAI-SearchBot', 'ChatGPT-User', 'GPTBot', 'PerplexityBot', 'ClaudeBot', 'Claude-SearchBot', 'Claude-User', 'Google-Extended', 'Bingbot']
          .flatMap((bot) => [`User-agent: ${bot}`, 'Allow: /', '']),
        'Sitemap: https://evana.ai/sitemap-index.xml',
        '',
      ].join('\n');
  return new Response(inhalt, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
