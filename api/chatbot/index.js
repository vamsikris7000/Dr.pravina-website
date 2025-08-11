export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const apiKey = 'app-SjuVYGo01iqolHNI7nKIsG4t';
    const apiUrl = 'https://d22yt2oewbcglh.cloudfront.net/v1/chat-messages';

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });

    // For streaming responses, we need to pipe the response
    if (response.headers.get('content-type')?.includes('text/event-stream')) {
      res.setHeader('Content-Type', 'text/event-stream');
      res.setHeader('Cache-Control', 'no-cache');
      res.setHeader('Connection', 'keep-alive');
      
      // Pipe the response
      response.body.pipe(res);
    } else {
      const data = await response.json();
      res.status(response.status).json(data);
    }
  } catch (error) {
    console.error('Chatbot proxy error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
