exports.handler = async function(event, context) {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const apiKey = 'app-SjuVYGo01iqolHNI7nKIsG4t';
    const apiUrl = 'https://d22yt2oewbcglh.cloudfront.net/v1/chat-messages';
    const body = JSON.parse(event.body);

    console.log('Chatbot API called with body:', body);

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    console.log('Dify API response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Dify API error:', errorText);
      return {
        statusCode: response.status,
        headers,
        body: JSON.stringify({ 
          error: 'Dify API error', 
          details: errorText,
          status: response.status 
        })
      };
    }

    // For streaming responses, we need to handle differently in Netlify
    if (response.headers.get('content-type')?.includes('text/event-stream')) {
      const data = await response.text();
      return {
        statusCode: 200,
        headers: {
          ...headers,
          'Content-Type': 'text/event-stream',
          'Cache-Control': 'no-cache',
          'Connection': 'keep-alive'
        },
        body: data
      };
    } else {
      const data = await response.json();
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(data)
      };
    }
  } catch (error) {
    console.error('Chatbot proxy error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Internal server error',
        details: error.message 
      })
    };
  }
}
