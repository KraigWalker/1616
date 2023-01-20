// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export const config = {
  runtime: 'edge',
};

export default function handler(req, res) {
  return new Response(JSON.stringify({ name: 'Kraig Walker' }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
