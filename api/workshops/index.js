export default async function handler(req, res) {
  const backendUrl = process.env.BACKEND_URL || 'http://localhost:5001';
  const token = req.headers.authorization;

  try {
    const response = await fetch(`${backendUrl}/api/workshops`, {
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
    console.error('Workshops proxy error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
