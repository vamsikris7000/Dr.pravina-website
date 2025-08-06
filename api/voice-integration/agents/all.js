export default async function handler(req, res) {
  const targetUrl = 'https://d1fs86umxjjz67.cloudfront.net/agents/all';
  
  console.log('Agents API called:', req.method, req.url);
  console.log('Target URL:', targetUrl);
  
  try {
    const response = await fetch(targetUrl, {
      method: req.method,
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': 'xpectrum-ai@123'
      }
    });
    
    console.log('Response status:', response.status);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Target server error:', response.status, errorText);
      return res.status(response.status).json({ 
        error: `Target server error: ${response.status}`,
        details: errorText
      });
    }
    
    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    console.error('Voice integration proxy error:', error);
    res.status(500).json({ error: 'Internal server error', details: error.message });
  }
} 