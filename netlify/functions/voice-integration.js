exports.handler = async function(event, context) {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, x-api-key',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  const { path } = event.queryStringParameters || {};
  const method = event.httpMethod;
  const body = event.body ? JSON.parse(event.body) : {};
  
  try {
    // Handle root path - return service info
    if (!path || path === '/') {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          message: "Voice Integration API",
          version: "1.0.0",
          endpoints: [
            "/tokens/generate?agent_name=agent1",
            "/agents/all",
            "/agents/join"
          ]
        })
      };
    }
    
    // Handle token generation
    if (path === 'tokens/generate') {
      const agentName = event.queryStringParameters?.agent_name || 'agent1';
      const apiKey = process.env.VOICE_API_KEY;
      const backendUrl = process.env.VOICE_API_BASE_URL;
      
      console.log(`Generating token for agent: ${agentName}`);
      
      const response = await fetch(`${backendUrl}/tokens/generate?agent_name=${agentName}`, {
        method: 'POST',
        headers: {
          'x-api-key': apiKey,
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      
      console.log(`Token generation response: ${response.status}`, data);
      
      return {
        statusCode: response.status,
        headers,
        body: JSON.stringify(data)
      };
    }
    
    // Handle agent join request
    if (path === 'agents/join') {
      const apiKey = process.env.VOICE_API_KEY;
      const backendUrl = process.env.VOICE_API_BASE_URL;
      
      console.log('Agent join request:', body);
      
      const response = await fetch(`${backendUrl}/agents/join`, {
        method: 'POST',
        headers: {
          'x-api-key': apiKey,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
      });

      const data = await response.json();
      
      console.log(`Agent join response: ${response.status}`, data);
      
      return {
        statusCode: response.status,
        headers,
        body: JSON.stringify(data)
      };
    }
    
    // Handle agents endpoint
    if (path === 'agents/all') {
      const apiKey = process.env.VOICE_API_KEY;
      const backendUrl = process.env.VOICE_API_BASE_URL;
      
      const response = await fetch(`${backendUrl}/agents/all`, {
        headers: {
          'x-api-key': apiKey,
        },
      });

      const data = await response.json();
      
      return {
        statusCode: response.status,
        headers,
        body: JSON.stringify(data)
      };
    }
    
    // Default response for unknown paths
    return {
      statusCode: 404,
      headers,
      body: JSON.stringify({ error: 'Not found', path })
    };
  } catch (error) {
    console.error('Voice integration error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Internal server error', details: error.message })
    };
  }
}
