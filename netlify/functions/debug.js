const mongoose = require('mongoose');

exports.handler = async function(event, context) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  };

  try {
    const debugInfo = {
      timestamp: new Date().toISOString(),
      environment: {
        MONGODB_URI: process.env.MONGODB_URI ? 'SET' : 'NOT SET',
        BACKEND_URL: process.env.BACKEND_URL || 'NOT SET',
        NODE_ENV: process.env.NODE_ENV || 'NOT SET'
      },
      mongoose: {
        connectionState: mongoose.connection.readyState,
        connectionStateText: getConnectionStateText(mongoose.connection.readyState)
      },
      request: {
        method: event.httpMethod,
        path: event.path,
        queryParams: event.queryStringParameters
      }
    };

    // Try to connect to MongoDB if URI is available
    if (process.env.MONGODB_URI) {
      try {
        if (mongoose.connection.readyState !== 1) {
          await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
          debugInfo.mongodb = {
            status: 'connected',
            message: 'Successfully connected to MongoDB'
          };
        } else {
          debugInfo.mongodb = {
            status: 'already_connected',
            message: 'Already connected to MongoDB'
          };
        }
      } catch (dbError) {
        debugInfo.mongodb = {
          status: 'error',
          message: dbError.message,
          stack: dbError.stack
        };
      }
    } else {
      debugInfo.mongodb = {
        status: 'no_uri',
        message: 'MONGODB_URI environment variable not set'
      };
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(debugInfo, null, 2)
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: 'Debug function error',
        message: error.message,
        stack: error.stack
      })
    };
  }
};

function getConnectionStateText(state) {
  switch (state) {
    case 0: return 'disconnected';
    case 1: return 'connected';
    case 2: return 'connecting';
    case 3: return 'disconnecting';
    default: return 'unknown';
  }
}
