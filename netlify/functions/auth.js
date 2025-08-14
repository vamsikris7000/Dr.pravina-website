import jwt from 'jsonwebtoken';

export const handler = async function(event, context) {
  // Enable CORS with specific origins
  const origin = event.headers.origin || event.headers.Origin || '*';
  const headers = {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
    'Access-Control-Allow-Methods': 'POST, OPTIONS, GET',
    'Access-Control-Allow-Credentials': 'true',
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0'
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
    const { email, password } = JSON.parse(event.body);

    // Admin credentials from environment variables
    const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
    const JWT_SECRET = process.env.JWT_SECRET;

    // Enhanced debug logging for production troubleshooting
    console.log('=== AUTH DEBUG INFO ===');
    console.log('Environment:', process.env.NODE_ENV || 'production');
    console.log('Received credentials:', {
      email: email,
      passwordProvided: !!password,
      passwordLength: password ? password.length : 0
    });
    console.log('Environment variables status:', {
      hasAdminEmail: !!ADMIN_EMAIL,
      hasAdminPassword: !!ADMIN_PASSWORD,
      hasJwtSecret: !!JWT_SECRET,
      adminEmailValue: ADMIN_EMAIL || 'NOT_SET',
      adminPasswordSet: ADMIN_PASSWORD ? 'SET' : 'NOT_SET',
      jwtSecretSet: JWT_SECRET ? 'SET' : 'NOT_SET'
    });
    console.log('=== END DEBUG INFO ===');

    // Check if environment variables are set
    if (!ADMIN_EMAIL || !ADMIN_PASSWORD || !JWT_SECRET) {
      const missingVars = [];
      if (!ADMIN_EMAIL) missingVars.push('ADMIN_EMAIL');
      if (!ADMIN_PASSWORD) missingVars.push('ADMIN_PASSWORD');
      if (!JWT_SECRET) missingVars.push('JWT_SECRET');
      
      console.error('Missing environment variables:', missingVars);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ 
          error: 'Server configuration error',
          message: `Missing environment variables: ${missingVars.join(', ')}`,
          details: 'Please check Netlify environment variables configuration'
        })
      };
    }

    // Check credentials
    if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
      console.log('Invalid credentials:', {
        emailMatch: email === ADMIN_EMAIL,
        passwordMatch: password === ADMIN_PASSWORD,
        expectedEmail: ADMIN_EMAIL,
        receivedEmail: email
      });
      return {
        statusCode: 401,
        headers,
        body: JSON.stringify({ 
          message: 'Invalid credentials',
          error: 'LOGIN_FAILED'
        })
      };
    }

    // Generate JWT token
    const token = jwt.sign(
      { email: ADMIN_EMAIL, role: 'admin' },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    console.log('Login successful for:', ADMIN_EMAIL);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        token, 
        user: { 
          email: ADMIN_EMAIL, 
          role: 'admin' 
        },
        message: 'Login successful'
      })
    };
  } catch (error) {
    console.error('Auth error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Internal server error',
        message: error.message,
        details: 'Please check server logs for more information'
      })
    };
  }
}
