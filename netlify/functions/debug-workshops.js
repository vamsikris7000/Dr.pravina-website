import mongoose from 'mongoose';

export const handler = async function(event, context) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
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

  try {
    console.log('=== WORKSHOPS DEBUG START ===');
    
    // Check environment variables
    const envCheck = {
      hasMongoUri: !!process.env.MONGODB_URI,
      mongoUriLength: process.env.MONGODB_URI ? process.env.MONGODB_URI.length : 0,
      mongoUriStart: process.env.MONGODB_URI ? process.env.MONGODB_URI.substring(0, 20) + '...' : 'NOT_SET',
      nodeEnv: process.env.NODE_ENV || 'production',
      timestamp: new Date().toISOString()
    };

    console.log('Environment check:', envCheck);

    // Check if MongoDB URI is available
    if (!process.env.MONGODB_URI) {
      console.error('MONGODB_URI not set');
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ 
          error: 'MONGODB_URI not configured',
          envCheck
        })
      };
    }

    // Test MongoDB connection
    let connectionStatus = 'not_attempted';
    let connectionError = null;
    let workshopsCount = 0;

    try {
      console.log('Attempting MongoDB connection...');
      
      if (mongoose.connection.readyState !== 1) {
        await mongoose.connect(process.env.MONGODB_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
        connectionStatus = 'connected';
      } else {
        console.log('MongoDB already connected');
        connectionStatus = 'already_connected';
      }

      // Test workshop collection
      const Workshop = mongoose.model('Workshop', new mongoose.Schema({
        title: String,
        subtitle: String,
        audience: String,
        icon: String,
        day: String,
        date: String,
        time: String,
        price: Number,
        features: [String],
        description: String,
        isActive: Boolean,
        order: Number,
        status: String,
        createdAt: Date,
        updatedAt: Date
      }), 'workshops'); // Explicitly specify collection name

      console.log('Testing workshops collection in drs_db...');
      const workshops = await Workshop.find({});
      workshopsCount = workshops.length;
      console.log(`Found ${workshopsCount} workshops in database`);
      
      if (workshopsCount > 0) {
        console.log('Workshop titles:', workshops.map(w => w.title));
        console.log('Sample workshop:', {
          title: workshops[0].title,
          isActive: workshops[0].isActive,
          status: workshops[0].status
        });
      }

    } catch (dbError) {
      console.error('MongoDB connection/query error:', dbError);
      connectionStatus = 'failed';
      connectionError = dbError.message;
    }

    // Test API endpoint
    let apiTestResult = 'not_tested';
    let apiError = null;

    try {
      console.log('Testing API endpoint...');
      
      // Simulate the API call that the frontend makes
      const apiPath = '/workshops';
      console.log('API path:', apiPath);
      
      // This would normally be handled by the main API function
      // For now, we'll just check if we can query the database
      if (connectionStatus === 'connected' || connectionStatus === 'already_connected') {
        apiTestResult = 'success';
      } else {
        apiTestResult = 'failed';
        apiError = 'Database connection failed';
      }
    } catch (apiTestError) {
      console.error('API test error:', apiTestError);
      apiTestResult = 'failed';
      apiError = apiTestError.message;
    }

    const debugInfo = {
      environment: envCheck,
      mongodb: {
        status: connectionStatus,
        error: connectionError,
        workshopsCount: workshopsCount
      },
      api: {
        status: apiTestResult,
        error: apiError
      },
      recommendations: []
    };

    // Generate recommendations
    if (!process.env.MONGODB_URI) {
      debugInfo.recommendations.push('Set MONGODB_URI environment variable in Netlify');
    }
    
    if (connectionStatus === 'failed') {
      debugInfo.recommendations.push('Check MongoDB connection string format');
      debugInfo.recommendations.push('Verify MongoDB Atlas network access settings');
    }
    
    if (workshopsCount === 0) {
      debugInfo.recommendations.push('Populate workshops using populate-workshops function');
    }
    
    if (apiTestResult === 'failed') {
      debugInfo.recommendations.push('Check API function configuration');
    }

    console.log('=== WORKSHOPS DEBUG END ===');

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(debugInfo)
    };

  } catch (error) {
    console.error('Debug function error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Debug function failed',
        message: error.message,
        stack: error.stack
      })
    };
  }
};
