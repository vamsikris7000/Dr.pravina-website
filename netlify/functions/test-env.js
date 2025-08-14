export const handler = async function(event, context) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, OPTIONS'
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    // Check all environment variables
    const envCheck = {
      // Authentication variables
      hasAdminEmail: !!process.env.ADMIN_EMAIL,
      hasAdminPassword: !!process.env.ADMIN_PASSWORD,
      hasJwtSecret: !!process.env.JWT_SECRET,
      
      // Database variables
      hasMongoUri: !!process.env.MONGODB_URI,
      
      // API variables
      hasDifyApiBaseUrl: !!process.env.DIFY_API_BASE_URL,
      hasDifyApiKey: !!process.env.DIFY_API_KEY,
      hasVoiceApiBaseUrl: !!process.env.VOICE_API_BASE_URL,
      hasVoiceApiKey: !!process.env.VOICE_API_KEY,
      
      // Values (masked for security)
      adminEmail: process.env.ADMIN_EMAIL || 'NOT_SET',
      adminPassword: process.env.ADMIN_PASSWORD ? 'SET' : 'NOT_SET',
      jwtSecret: process.env.JWT_SECRET ? 'SET' : 'NOT_SET',
      mongoUri: process.env.MONGODB_URI ? 'SET' : 'NOT_SET',
      
      // Environment info
      nodeEnv: process.env.NODE_ENV || 'production',
      timestamp: new Date().toISOString()
    };

    // Determine if critical variables are missing
    const missingCritical = [];
    if (!process.env.ADMIN_EMAIL) missingCritical.push('ADMIN_EMAIL');
    if (!process.env.ADMIN_PASSWORD) missingCritical.push('ADMIN_PASSWORD');
    if (!process.env.JWT_SECRET) missingCritical.push('JWT_SECRET');
    if (!process.env.MONGODB_URI) missingCritical.push('MONGODB_URI');

    const status = missingCritical.length === 0 ? 'READY' : 'MISSING_CRITICAL';

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        message: 'Environment variables check',
        status: status,
        missingCritical: missingCritical,
        environment: envCheck,
        recommendations: missingCritical.length > 0 ? 
          `Set these variables in Netlify: ${missingCritical.join(', ')}` : 
          'All critical variables are set correctly'
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: 'Test failed',
        message: error.message,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      })
    };
  }
};
