export const handler = async function(event, context) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, OPTIONS'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  console.log('=== VOICE INTEGRATION TEST ===');
  
  const voiceConfig = {
    environment: {
      hasVoiceApiKey: !!process.env.VOICE_API_KEY,
      hasVoiceApiBaseUrl: !!process.env.VOICE_API_BASE_URL,
      voiceApiKeyStart: process.env.VOICE_API_KEY ? process.env.VOICE_API_KEY.substring(0, 10) + '...' : 'NOT_SET',
      voiceApiBaseUrl: process.env.VOICE_API_BASE_URL || 'NOT_SET'
    },
    testResults: {
      tokenGeneration: 'not_tested',
      backendConnection: 'not_tested'
    },
    timestamp: new Date().toISOString()
  };

  try {
    // Test token generation endpoint
    if (process.env.VOICE_API_KEY && process.env.VOICE_API_BASE_URL) {
      console.log('Testing token generation...');
      
      try {
        const response = await fetch(`${process.env.VOICE_API_BASE_URL}/tokens/generate?agent_name=pravina`, {
          method: 'POST',
          headers: {
            'x-api-key': process.env.VOICE_API_KEY,
            'Content-Type': 'application/json',
          },
        });

        console.log(`Backend response status: ${response.status}`);
        
        if (response.ok) {
          const data = await response.json();
          voiceConfig.testResults.backendConnection = 'success';
          voiceConfig.testResults.tokenGeneration = data.access_token || data.token ? 'success' : 'no_token';
          voiceConfig.tokenResponse = {
            hasAccessToken: !!(data.access_token || data.token),
            responseKeys: Object.keys(data),
            status: response.status
          };
        } else {
          voiceConfig.testResults.backendConnection = 'error';
          voiceConfig.testResults.tokenGeneration = 'error';
          voiceConfig.error = {
            status: response.status,
            message: await response.text()
          };
        }
      } catch (error) {
        console.error('Backend test error:', error);
        voiceConfig.testResults.backendConnection = 'error';
        voiceConfig.testResults.tokenGeneration = 'error';
        voiceConfig.error = {
          message: error.message,
          type: 'connection_error'
        };
      }
    } else {
      voiceConfig.testResults.backendConnection = 'not_configured';
      voiceConfig.testResults.tokenGeneration = 'not_configured';
    }

  } catch (error) {
    console.error('Voice test error:', error);
    voiceConfig.error = {
      message: error.message,
      type: 'general_error'
    };
  }

  console.log('=== VOICE INTEGRATION TEST COMPLETE ===');
  console.log('Voice config:', JSON.stringify(voiceConfig, null, 2));

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify(voiceConfig)
  };
};
