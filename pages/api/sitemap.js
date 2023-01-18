export const config = {
  runtime: 'edge',
};


export default function handler(req, res) {
    
    // generate sitemap here
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>/</loc>
      </url>
    </urlset>
  `;

  return new Response(xml, {
    status: 200,
    headers: {
      'content-type': 'text/xml',
      'cache-control': 'stale-while-revalidate, s-maxage=3600'
    }
  })
}