export default async function handler(req, res) {
  const backendUrl = process.env.BACKEND_URL || 'http://localhost:5001';
  const { path } = req.query;
  const token = req.headers.authorization;

  // Reconstruct the path
  const apiPath = Array.isArray(path) ? path.join('/') : path;

  try {
    const response = await fetch(`${backendUrl}/api/${apiPath}`, {
      method: req.method,
      headers: {
        'Content-Type': 'application/json',
        ...(token && { 'Authorization': token }),
      },
      ...(req.body && { body: JSON.stringify(req.body) }),
    });

    const data = await response.json();
    
    if (response.ok) {
      res.status(200).json(data);
    } else {
      res.status(response.status).json(data);
    }
  } catch (error) {
    console.error('API proxy error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
