export const handler = async function(event, context) {
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
  
  // Extract path from URL if not in query parameters
  let apiPath = path;
  if (!apiPath) {
    const urlPath = event.path || '';
    console.log('Full URL path:', urlPath);
    
    // Remove the function name from the path
    // The URL structure is: /.netlify/functions/voice-integration/tokens/generate
    // We need to extract: tokens/generate
    if (urlPath.includes('/voice-integration/')) {
      apiPath = urlPath.split('/voice-integration/')[1];
    } else if (urlPath.includes('/.netlify/functions/voice-integration/')) {
      apiPath = urlPath.split('/.netlify/functions/voice-integration/')[1];
    }
    
    console.log('Extracted apiPath from URL:', apiPath);
  }
  
  console.log('=== VOICE INTEGRATION DEBUG ===');
  console.log('Original path from query:', path);
  console.log('Final apiPath:', apiPath);
  console.log('Method:', method);
  console.log('Full URL path:', event.path);
  console.log('Query parameters:', event.queryStringParameters);
  
  try {
    // Handle root path - return service info
    if (!apiPath || apiPath === '/' || apiPath === '') {
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
    if (apiPath === 'tokens/generate' || apiPath.startsWith('tokens/generate')) {
      const agentName = event.queryStringParameters?.agent_name || 'agent1';
      const apiKey = process.env.VOICE_API_KEY;
      const backendUrl = process.env.VOICE_API_BASE_URL;
      
      console.log(`=== TOKEN GENERATION DEBUG ===`);
      console.log(`Agent name: ${agentName}`);
      console.log(`API Key present: ${!!apiKey}`);
      console.log(`Backend URL present: ${!!backendUrl}`);
      console.log(`Backend URL: ${backendUrl}`);
      
      if (!apiKey || !backendUrl) {
        console.error('Missing environment variables for voice integration');
        
        // Return a mock token for testing
        console.log('Returning mock token for testing');
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({ 
            access_token: 'mock_token_for_testing_purposes_only',
            room_name: 'test-room',
            participant_identity: agentName,
            message: 'Mock token - configure VOICE_API_KEY and VOICE_API_BASE_URL for real tokens'
          })
        };
      }
      
      try {
        console.log(`Calling backend: ${backendUrl}/tokens/generate?agent_name=${agentName}`);
        
        const response = await fetch(`${backendUrl}/tokens/generate?agent_name=${agentName}`, {
          method: 'POST',
          headers: {
            'x-api-key': apiKey,
            'Content-Type': 'application/json',
          },
        });

        console.log(`Backend response status: ${response.status}`);
        console.log(`Backend response headers:`, Object.fromEntries(response.headers.entries()));
        
        if (!response.ok) {
          const errorText = await response.text();
          console.error(`Backend error: ${response.status} - ${errorText}`);
          return {
            statusCode: response.status,
            headers,
            body: JSON.stringify({ 
              error: 'Backend service error',
              status: response.status,
              message: errorText
            })
          };
        }

        const data = await response.json();
        console.log(`Token generation response data:`, data);
        
        // Check if the response contains the expected token
        if (!data.access_token && !data.token) {
          console.error('No access token in response:', data);
          return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ 
              error: 'Invalid token response',
              message: 'Backend did not return a valid access token',
              received: data
            })
          };
        }
        
        console.log(`=== TOKEN GENERATION SUCCESS ===`);
        
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify(data)
        };
      } catch (fetchError) {
        console.error('Fetch error:', fetchError);
        return {
          statusCode: 500,
          headers,
          body: JSON.stringify({ 
            error: 'Backend connection failed',
            message: fetchError.message
          })
        };
      }
    }
    
    // Handle agent join request
    if (apiPath === 'agents/join') {
      const apiKey = process.env.VOICE_API_KEY;
      const backendUrl = process.env.VOICE_API_BASE_URL;
      
      console.log('=== AGENT JOIN DEBUG ===');
      console.log('Agent join request body:', body);
      console.log('API Key present:', !!apiKey);
      console.log('Backend URL present:', !!backendUrl);
      
      if (!apiKey || !backendUrl) {
        console.log('Missing environment variables - returning mock response');
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({ 
            success: true,
            message: 'Mock agent join - configure VOICE_API_KEY and VOICE_API_BASE_URL for real agent',
            room_name: body.room_name || 'test-room',
            agent_name: body.agent_name || 'pravina'
          })
        };
      }
      
      try {
        console.log(`Calling backend: ${backendUrl}/agents/join`);
        
        const response = await fetch(`${backendUrl}/agents/join`, {
          method: 'POST',
          headers: {
            'x-api-key': apiKey,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body)
        });

        console.log(`Backend response status: ${response.status}`);
        
        if (!response.ok) {
          const errorText = await response.text();
          console.error(`Backend error: ${response.status} - ${errorText}`);
          
          // Return a mock success response if backend is not available
          if (response.status === 404) {
            console.log('Backend returned 404 - returning mock response');
            return {
              statusCode: 200,
              headers,
              body: JSON.stringify({ 
                success: true,
                message: 'Mock agent join - backend service not available',
                room_name: body.room_name || 'test-room',
                agent_name: body.agent_name || 'pravina'
              })
            };
          }
          
          return {
            statusCode: response.status,
            headers,
            body: JSON.stringify({ 
              error: 'Backend service error',
              status: response.status,
              message: errorText
            })
          };
        }

        const data = await response.json();
        console.log(`Agent join response data:`, data);
        
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify(data)
        };
      } catch (fetchError) {
        console.error('Fetch error:', fetchError);
        
        // Return a mock success response if connection fails
        console.log('Connection failed - returning mock response');
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({ 
            success: true,
            message: 'Mock agent join - connection failed',
            room_name: body.room_name || 'test-room',
            agent_name: body.agent_name || 'pravina'
          })
        };
      }
    }
    
    // Handle agents endpoint
    if (apiPath === 'agents/all') {
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
    console.log(`Unknown path: ${apiPath}`);
    return {
      statusCode: 404,
      headers,
      body: JSON.stringify({ error: 'Not found', path: apiPath })
    };
  } catch (error) {
    console.error('Voice integration error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Internal server error', details: error.message })
    };
  }
};