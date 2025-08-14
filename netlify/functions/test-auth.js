export const handler = async function(event, context) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET'
  };

  try {
    // Check environment variables
    const envCheck = {
      hasAdminEmail: !!process.env.ADMIN_EMAIL,
      hasAdminPassword: !!process.env.ADMIN_PASSWORD,
      hasJwtSecret: !!process.env.JWT_SECRET,
      hasMongoUri: !!process.env.MONGODB_URI,
      adminEmail: process.env.ADMIN_EMAIL || 'NOT_SET',
      adminPassword: process.env.ADMIN_PASSWORD ? 'SET' : 'NOT_SET',
      jwtSecret: process.env.JWT_SECRET ? 'SET' : 'NOT_SET'
    };

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        message: 'Environment variables check',
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || 'production',
        variables: envCheck
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: 'Test failed',
        message: error.message
      })
    };
  }
};
