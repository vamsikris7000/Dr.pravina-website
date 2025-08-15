import mongoose from 'mongoose';

export const handler = async function(event, context) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
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
    console.log('=== ADMIN DATA TEST START ===');
    
    // Check environment variables
    const envCheck = {
      hasMongoUri: !!process.env.MONGODB_URI,
      hasAdminEmail: !!process.env.ADMIN_EMAIL,
      hasAdminPassword: !!process.env.ADMIN_PASSWORD,
      hasJwtSecret: !!process.env.JWT_SECRET
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
    let adminData = {
      workshops: { count: 0, data: [] },
      patients: { count: 0, data: [] },
      appointments: { count: 0, data: [] },
      messages: { count: 0, data: [] }
    };

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

      // Test Workshops Collection
      console.log('Testing workshops collection...');
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
      adminData.workshops.count = workshops.length;
      adminData.workshops.data = workshops.map(w => ({
        id: w._id,
        title: w.title,
        subtitle: w.subtitle,
        isActive: w.isActive,
        status: w.status
      }));

      // Test Patients Collection
      console.log('Testing patients collection...');
      const patients = await mongoose.connection.db.collection('patients_info').find({}).toArray();
      adminData.patients.count = patients.length;
      adminData.patients.data = patients.map(p => ({
        id: p._id,
        name: p.Name || p.name,
        email: p.email,
        status: p.status
      }));

      // Test Appointments Collection
      console.log('Testing appointments collection...');
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
      adminData.appointments.count = appointments.length;
      adminData.appointments.data = appointments.map(a => ({
        id: a._id,
        name: a.name,
        email: a.email,
        service: a.service,
        status: a.status
      }));

      // Test Messages Collection
      console.log('Testing messages collection...');
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
      adminData.messages.count = messages.length;
      adminData.messages.data = messages.map(m => ({
        id: m._id,
        name: m.name,
        email: m.email,
        subject: m.subject,
        status: m.status
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
      adminData: adminData,
      summary: {
        totalWorkshops: adminData.workshops.count,
        totalPatients: adminData.patients.count,
        totalAppointments: adminData.appointments.count,
        totalMessages: adminData.messages.count
      },
      timestamp: new Date().toISOString()
    };

    console.log('=== ADMIN DATA TEST END ===');

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
