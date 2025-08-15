import mongoose from 'mongoose';

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

  try {
    console.log('=== MONGODB TEST START ===');
    
    // Check environment variables
    const envCheck = {
      hasMongoUri: !!process.env.MONGODB_URI,
      mongoUriStart: process.env.MONGODB_URI ? process.env.MONGODB_URI.substring(0, 30) + '...' : 'NOT_SET'
    };

    console.log('Environment check:', envCheck);

    if (!process.env.MONGODB_URI) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ 
          error: 'MONGODB_URI not configured',
          envCheck
        })
      };
    }

    // Connect to MongoDB
    let connectionStatus = 'not_attempted';
    let connectionError = null;
    let databaseName = null;
    let workshopsData = null;

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

      databaseName = mongoose.connection.db.databaseName;
      console.log('Connected to database:', databaseName);

      // Test workshops collection
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
      }), 'workshops');

      console.log('Querying workshops collection...');
      const workshops = await Workshop.find({});
      console.log(`Found ${workshops.length} workshops`);

      workshopsData = workshops.map(w => ({
        id: w._id,
        title: w.title,
        subtitle: w.subtitle,
        audience: w.audience,
        isActive: w.isActive,
        status: w.status,
        day: w.day,
        date: w.date,
        time: w.time
      }));

    } catch (dbError) {
      console.error('MongoDB connection/query error:', dbError);
      connectionStatus = 'failed';
      connectionError = dbError.message;
    }

    const testResult = {
      environment: envCheck,
      connection: {
        status: connectionStatus,
        error: connectionError,
        databaseName: databaseName
      },
      workshops: {
        count: workshopsData ? workshopsData.length : 0,
        data: workshopsData
      },
      timestamp: new Date().toISOString()
    };

    console.log('=== MONGODB TEST END ===');

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(testResult)
    };

  } catch (error) {
    console.error('Test function error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Test function failed',
        message: error.message
      })
    };
  }
};
