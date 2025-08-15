import mongoose from 'mongoose';

export const handler = async function(event, context) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, OPTIONS'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  console.log('=== COMPREHENSIVE DEBUG START ===');
  
  const debugInfo = {
    environment: {
      hasMongoUri: !!process.env.MONGODB_URI,
      mongoUriStart: process.env.MONGODB_URI ? process.env.MONGODB_URI.substring(0, 30) + '...' : 'NOT_SET',
      nodeEnv: process.env.NODE_ENV || 'production'
    },
    connection: {
      status: 'disconnected',
      error: null,
      databaseName: null
    },
    collections: {
      patients_info: { count: 0, error: null, sample: null },
      workshops: { count: 0, error: null, sample: null },
      appointments: { count: 0, error: null, sample: null },
      messages: { count: 0, error: null, sample: null }
    },
    apiEndpoints: {
      patients: { status: 'not_tested', error: null },
      workshops: { status: 'not_tested', error: null },
      appointments: { status: 'not_tested', error: null },
      messages: { status: 'not_tested', error: null }
    },
    timestamp: new Date().toISOString()
  };

  try {
    // Test MongoDB connection
    console.log('Testing MongoDB connection...');
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI not set');
    }

    if (mongoose.connection.readyState !== 1) {
      console.log('Connecting to MongoDB...');
      await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    }

    debugInfo.connection.status = 'connected';
    debugInfo.connection.databaseName = mongoose.connection.db.databaseName;
    console.log('Connected to database:', debugInfo.connection.databaseName);

    // Test each collection
    const collections = ['patients_info', 'workshops', 'appointments', 'messages'];
    
    for (const collectionName of collections) {
      console.log(`Testing collection: ${collectionName}`);
      try {
        const collection = mongoose.connection.db.collection(collectionName);
        const count = await collection.countDocuments({});
        const sample = await collection.findOne({});
        
        debugInfo.collections[collectionName] = {
          count: count,
          error: null,
          sample: sample ? {
            _id: sample._id,
            title: sample.title || sample.Name || sample.name || 'No title field',
            createdAt: sample.createdAt
          } : null
        };
        
        console.log(`Collection ${collectionName}: ${count} documents`);
      } catch (error) {
        console.error(`Error testing collection ${collectionName}:`, error);
        debugInfo.collections[collectionName] = {
          count: 0,
          error: error.message,
          sample: null
        };
      }
    }

    // Test API endpoints by simulating the handlers
    console.log('Testing API endpoints...');
    
    // Test workshops endpoint
    try {
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
      
      const workshops = await Workshop.find({});
      debugInfo.apiEndpoints.workshops = {
        status: 'success',
        error: null,
        count: workshops.length
      };
    } catch (error) {
      debugInfo.apiEndpoints.workshops = {
        status: 'error',
        error: error.message
      };
    }

    // Test patients endpoint
    try {
      const patients = await mongoose.connection.db.collection('patients_info').find({}).toArray();
      debugInfo.apiEndpoints.patients = {
        status: 'success',
        error: null,
        count: patients.length
      };
    } catch (error) {
      debugInfo.apiEndpoints.patients = {
        status: 'error',
        error: error.message
      };
    }

    // Test appointments endpoint
    try {
      const Appointment = mongoose.model('Appointment', new mongoose.Schema({
        name: String,
        email: String,
        phone: String,
        date: String,
        time: String,
        service: String,
        message: String,
        status: String,
        createdAt: Date,
        updatedAt: Date
      }));
      
      const appointments = await Appointment.find({});
      debugInfo.apiEndpoints.appointments = {
        status: 'success',
        error: null,
        count: appointments.length
      };
    } catch (error) {
      debugInfo.apiEndpoints.appointments = {
        status: 'error',
        error: error.message
      };
    }

    // Test messages endpoint
    try {
      const Message = mongoose.model('Message', new mongoose.Schema({
        name: String,
        email: String,
        phone: String,
        subject: String,
        message: String,
        status: String,
        createdAt: Date,
        updatedAt: Date
      }));
      
      const messages = await Message.find({});
      debugInfo.apiEndpoints.messages = {
        status: 'success',
        error: null,
        count: messages.length
      };
    } catch (error) {
      debugInfo.apiEndpoints.messages = {
        status: 'error',
        error: error.message
      };
    }

  } catch (error) {
    console.error('Debug error:', error);
    debugInfo.connection.status = 'error';
    debugInfo.connection.error = error.message;
  }

  console.log('=== COMPREHENSIVE DEBUG COMPLETE ===');
  console.log('Debug info:', JSON.stringify(debugInfo, null, 2));

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify(debugInfo)
  };
};
