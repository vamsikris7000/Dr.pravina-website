import jwt from 'jsonwebtoken';

export const handler = async function(event, context) {
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
    const { email, password } = JSON.parse(event.body);

    // Admin credentials from environment variables
    const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
    const JWT_SECRET = process.env.JWT_SECRET;

    // Debug logging for production troubleshooting
    console.log('Auth attempt:', {
      receivedEmail: email,
      receivedPassword: password ? '***' : 'undefined',
      envAdminEmail: ADMIN_EMAIL,
      envAdminPassword: ADMIN_PASSWORD ? '***' : 'undefined',
      envJwtSecret: JWT_SECRET ? '***' : 'undefined'
    });

    // Check if environment variables are set
    if (!ADMIN_EMAIL || !ADMIN_PASSWORD || !JWT_SECRET) {
      console.error('Missing environment variables:', {
        hasAdminEmail: !!ADMIN_EMAIL,
        hasAdminPassword: !!ADMIN_PASSWORD,
        hasJwtSecret: !!JWT_SECRET
      });
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'Server configuration error' })
      };
    }

    // Check credentials
    if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
      console.log('Invalid credentials:', {
        emailMatch: email === ADMIN_EMAIL,
        passwordMatch: password === ADMIN_PASSWORD
      });
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ message: 'Invalid credentials' })
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
        } 
      })
    };
  } catch (error) {
    console.error('Auth error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Internal server error' })
    };
  }
}
