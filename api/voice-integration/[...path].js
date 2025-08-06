export default async function handler(req, res) {
  const { path } = req.query;
  const targetUrl = `https://d1fs86umxjjz67.cloudfront.net/${path.join('/')}`;
  
  try {
    const response = await fetch(targetUrl, {
      method: req.method,
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': 'xpectrum-ai@123',
        ...req.headers
      },
      body: req.method === 'POST' ? JSON.stringify(req.body) : undefined
    });
    
    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    console.error('Voice integration proxy error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
} 