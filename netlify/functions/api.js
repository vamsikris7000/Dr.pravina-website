import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

// Authentication middleware
const authenticateToken = (token) => {
  if (!token) {
    return { valid: false, error: 'No token provided' };
  }
  
  try {
    const cleanToken = token.replace('Bearer ', '');
    const decoded = jwt.verify(cleanToken, process.env.JWT_SECRET);
    return { valid: true, user: decoded };
  } catch (error) {
    return { valid: false, error: 'Invalid token' };
  }
};

// Define schemas
const workshopSchema = new mongoose.Schema({
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
  status: {
    type: String,
    enum: ['live', 'coming-soon'],
    default: 'coming-soon'
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const patientSchema = new mongoose.Schema({
  Name: String, // Capitalized to match MongoDB data
  name: String, // Also support lowercase
  email: String,
  phone: String,
  phoneNumber: Number,
  age: Number,
  gender: String,
  city: String,
  concern: String,
  mainHealthConcern: String,
  symptomsExperienced: String,
  healthGoals: String,
  status: {
    type: String,
    enum: ['pending', 'contacted', 'consulted', 'completed'],
    default: 'pending'
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}, { strict: false }); // Allow additional fields

const appointmentSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  date: String,
  time: String,
  service: String,
  message: String,
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'completed', 'cancelled'],
    default: 'pending'
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  subject: String,
  message: String,
  status: {
    type: String,
    enum: ['unread', 'read', 'replied'],
    default: 'unread'
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Create models
let Workshop, Patient, Appointment, Message;
try {
  Workshop = mongoose.model('Workshop');
  Patient = mongoose.model('patients_info', patientSchema); // Use correct collection name
  Appointment = mongoose.model('Appointment');
  Message = mongoose.model('Message');
} catch {
  Workshop = mongoose.model('Workshop', workshopSchema, 'workshops'); // Explicitly specify collection name
  Patient = mongoose.model('patients_info', patientSchema); // Use correct collection name
  Appointment = mongoose.model('Appointment', appointmentSchema, 'appointments'); // Explicitly specify collection name
  Message = mongoose.model('Message', messageSchema, 'messages'); // Explicitly specify collection name
}

export const handler = async function(event, context) {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS'
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  const { path } = event.queryStringParameters || {};
  const token = event.headers.authorization;
  const method = event.httpMethod;
  const body = event.body ? JSON.parse(event.body) : {};

  // Reconstruct the path - handle both query parameter and direct path
  let apiPath = path || '';
  
  // If no path in query params, try to extract from the URL path
  if (!apiPath) {
    const urlPath = event.path || '';
    // Remove the function name from the path
    apiPath = urlPath.replace('/.netlify/functions/api', '').replace('/api', '');
  }

  console.log('API Path:', apiPath);
  console.log('Method:', method);

  try {
    // Check if MongoDB URI is available
    if (!process.env.MONGODB_URI) {
      console.error('MONGODB_URI environment variable not set');
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ 
          error: 'Database configuration error',
          message: 'MongoDB URI not configured'
        })
      };
    }

    // Connect to MongoDB with better error handling
    try {
      if (mongoose.connection.readyState !== 1) {
        console.log('Connecting to MongoDB...');
        console.log('MongoDB URI:', process.env.MONGODB_URI ? 'SET' : 'NOT_SET');
        await mongoose.connect(process.env.MONGODB_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
        console.log('Connected to database:', mongoose.connection.db.databaseName);
      }
    } catch (dbError) {
      console.error('MongoDB connection error:', dbError);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ 
          error: 'Database connection failed',
          message: dbError.message
        })
      };
    }

    // Handle different API endpoints
    if (apiPath.startsWith('workshops')) {
      return await handleWorkshops(method, apiPath, body, headers, token);
    } else if (apiPath.startsWith('patients')) {
      return await handlePatients(method, apiPath, body, headers, token);
    } else if (apiPath.startsWith('appointments')) {
      return await handleAppointments(method, apiPath, body, headers, token);
    } else if (apiPath.startsWith('messages')) {
      return await handleMessages(method, apiPath, body, headers, token);
    } else {
      // Return empty data for unknown paths
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify([])
      };
    }
  } catch (error) {
    console.error('API error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Internal server error',
        message: error.message,
        stack: error.stack
      })
    };
  }
}

// Workshop handlers
async function handleWorkshops(method, path, body, headers, token) {
  const parts = path.split('/');
  const id = parts[1];

  console.log('=== WORKSHOPS HANDLER ===');
  console.log('Method:', method);
  console.log('Path:', path);
  console.log('Parts:', parts);
  console.log('ID:', id);

  // Check authentication for admin operations
  if (method === 'GET' && id === 'all') {
    // Getting all workshops requires authentication
    const auth = authenticateToken(token);
    if (!auth.valid) {
      return {
        statusCode: 401,
        headers,
        body: JSON.stringify({ error: 'Authentication required', message: auth.error })
      };
    }
  }

  if (method === 'GET') {
    if (id === 'all') {
      // Get all workshops (for admin)
      try {
        console.log('Fetching all workshops for admin...');
        console.log('Database name:', mongoose.connection.db.databaseName);
        console.log('Collection name: workshops');
        
        const workshops = await Workshop.find({}).sort({ order: 1 });
        console.log(`Found ${workshops.length} workshops in database`);
        console.log('Workshop titles:', workshops.map(w => w.title));
        
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify(workshops)
        };
      } catch (error) {
        console.error('Error fetching all workshops:', error);
        return {
          statusCode: 500,
          headers,
          body: JSON.stringify({ 
            error: 'Failed to fetch workshops',
            message: error.message
          })
        };
      }
    } else if (id) {
      // Get specific workshop
      try {
        console.log('Fetching specific workshop with ID:', id);
        const workshop = await Workshop.findById(id);
        if (!workshop) {
          console.log('Workshop not found with ID:', id);
          return {
            statusCode: 404,
            headers,
            body: JSON.stringify({ error: 'Workshop not found' })
          };
        }
        console.log('Found workshop:', workshop.title);
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify(workshop)
        };
      } catch (error) {
        console.error('Error fetching specific workshop:', error);
        return {
          statusCode: 500,
          headers,
          body: JSON.stringify({ 
            error: 'Failed to fetch workshop',
            message: error.message
          })
        };
      }
    } else {
      // Get active workshops
      try {
        console.log('Fetching active workshops...');
        console.log('Database name:', mongoose.connection.db.databaseName);
        console.log('Collection name: workshops');
        
        const workshops = await Workshop.find({ isActive: true }).sort({ order: 1 });
        console.log(`Found ${workshops.length} active workshops in database`);
        console.log('Active workshop titles:', workshops.map(w => w.title));
        
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify(workshops)
        };
      } catch (error) {
        console.error('Error fetching active workshops:', error);
        return {
          statusCode: 500,
          headers,
          body: JSON.stringify({ 
            error: 'Failed to fetch active workshops',
            message: error.message
          })
        };
      }
    }
  } else if (method === 'POST') {
    // Create new workshop
    const workshop = new Workshop(body);
    const savedWorkshop = await workshop.save();
    return {
      statusCode: 201,
      headers,
      body: JSON.stringify(savedWorkshop)
    };
  } else if (method === 'PUT' && id) {
    // Update workshop
    const updatedWorkshop = await Workshop.findByIdAndUpdate(
      id,
      { ...body, updatedAt: new Date() },
      { new: true, runValidators: true }
    );
    if (!updatedWorkshop) {
      return {
        statusCode: 404,
        headers,
        body: JSON.stringify({ error: 'Workshop not found' })
      };
    }
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(updatedWorkshop)
    };
  } else if (method === 'DELETE' && id) {
    // Soft delete workshop
    const deletedWorkshop = await Workshop.findByIdAndUpdate(
      id,
      { isActive: false, updatedAt: new Date() },
      { new: true }
    );
    if (!deletedWorkshop) {
      return {
        statusCode: 404,
        headers,
        body: JSON.stringify({ error: 'Workshop not found' })
      };
    }
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'Workshop deleted successfully' })
    };
  } else {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }
}

// Patient handlers
async function handlePatients(method, path, body, headers, token) {
  const parts = path.split('/');
  const id = parts[1];

  console.log('=== PATIENTS HANDLER ===');
  console.log('Method:', method);
  console.log('Path:', path);
  console.log('Parts:', parts);
  console.log('ID:', id);
  console.log('Database name:', mongoose.connection.db.databaseName);

  // Check authentication for admin operations
  if (method === 'GET' && !id) {
    // Getting all patients requires authentication
    const auth = authenticateToken(token);
    if (!auth.valid) {
      return {
        statusCode: 401,
        headers,
        body: JSON.stringify({ error: 'Authentication required', message: auth.error })
      };
    }
  }

  if (method === 'GET') {
    if (id) {
      // Get specific patient
      console.log('Fetching specific patient with ID:', id);
      const patient = await Patient.findById(id);
      if (!patient) {
        console.log('Patient not found with ID:', id);
        return {
          statusCode: 404,
          headers,
          body: JSON.stringify({ error: 'Patient not found' })
        };
      }
      console.log('Found patient:', patient.Name || patient.name);
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(patient)
      };
    } else {
      // Get all patients using direct collection query
      try {
        console.log('Fetching all patients from patients_info collection...');
        console.log('Collection name: patients_info');
        
        const patients = await mongoose.connection.db.collection('patients_info').find({}).toArray();
        console.log(`Found ${patients.length} patients in database`);
        console.log('Patient names:', patients.map(p => p.Name || p.name || 'No name'));
        
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify(patients)
        };
      } catch (error) {
        console.error('Error fetching patients:', error);
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify([])
        };
      }
    }
  } else if (method === 'POST') {
    // Create new patient
    console.log('Creating new patient:', body);
    const patient = new Patient(body);
    const savedPatient = await patient.save();
    console.log('Patient created successfully:', savedPatient._id);
    return {
      statusCode: 201,
      headers,
      body: JSON.stringify(savedPatient)
    };
  } else if (method === 'PATCH' && id) {
    // Update patient using direct collection query
    try {
      console.log('Updating patient with ID:', id);
      const updateData = { ...body, updatedAt: new Date() };
      const result = await mongoose.connection.db.collection('patients_info').updateOne(
        { _id: new mongoose.Types.ObjectId(id) },
        { $set: updateData }
      );
      if (result.matchedCount === 1) {
        const updatedPatient = await mongoose.connection.db.collection('patients_info').findOne({ _id: new mongoose.Types.ObjectId(id) });
        console.log('Patient updated successfully');
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify(updatedPatient)
        };
      } else {
        console.log('Patient not found for update');
        return {
          statusCode: 404,
          headers,
          body: JSON.stringify({ error: 'Patient not found' })
        };
      }
    } catch (error) {
      console.error('Error updating patient:', error);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'Internal server error' })
      };
    }
  } else if (method === 'DELETE' && id) {
    // Delete patient using direct collection query
    try {
      console.log('Deleting patient with ID:', id);
      const result = await mongoose.connection.db.collection('patients_info').deleteOne({ _id: new mongoose.Types.ObjectId(id) });
      if (result.deletedCount === 1) {
        console.log('Patient deleted successfully');
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({ message: 'Patient deleted successfully' })
        };
      } else {
        console.log('Patient not found for deletion');
        return {
          statusCode: 404,
          headers,
          body: JSON.stringify({ error: 'Patient not found' })
        };
      }
    } catch (error) {
      console.error('Error deleting patient:', error);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'Internal server error' })
      };
    }
  } else {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }
}

// Appointment handlers
async function handleAppointments(method, path, body, headers, token) {
  const parts = path.split('/');
  const id = parts[1];

  console.log('=== APPOINTMENTS HANDLER ===');
  console.log('Method:', method);
  console.log('Path:', path);
  console.log('Parts:', parts);
  console.log('ID:', id);
  console.log('Database name:', mongoose.connection.db.databaseName);

  // Check authentication for admin operations
  if (method === 'GET' && !id) {
    // Getting all appointments requires authentication
    const auth = authenticateToken(token);
    if (!auth.valid) {
      return {
        statusCode: 401,
        headers,
        body: JSON.stringify({ error: 'Authentication required', message: auth.error })
      };
    }
  }

  if (method === 'GET') {
    if (id) {
      // Get specific appointment
      console.log('Fetching specific appointment with ID:', id);
      const appointment = await Appointment.findById(id);
      if (!appointment) {
        console.log('Appointment not found with ID:', id);
        return {
          statusCode: 404,
          headers,
          body: JSON.stringify({ error: 'Appointment not found' })
        };
      }
      console.log('Found appointment:', appointment.name);
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(appointment)
      };
    } else {
      // Get all appointments
      try {
        console.log('Fetching all appointments from appointments collection...');
        console.log('Collection name: appointments');
        
        const appointments = await Appointment.find({}).sort({ createdAt: -1 });
        console.log(`Found ${appointments.length} appointments in database`);
        console.log('Appointment names:', appointments.map(a => a.name || 'No name'));
        
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify(appointments)
        };
      } catch (error) {
        console.error('Error fetching appointments:', error);
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify([])
        };
      }
    }
  } else if (method === 'POST') {
    // Create new appointment
    console.log('Creating new appointment:', body);
    const appointment = new Appointment(body);
    const savedAppointment = await appointment.save();
    console.log('Appointment created successfully:', savedAppointment._id);
    return {
      statusCode: 201,
      headers,
      body: JSON.stringify(savedAppointment)
    };
  } else if (method === 'PATCH' && id) {
    // Update appointment
    console.log('Updating appointment with ID:', id);
    const updatedAppointment = await Appointment.findByIdAndUpdate(
      id,
      { ...body, updatedAt: new Date() },
      { new: true, runValidators: true }
    );
    if (!updatedAppointment) {
      console.log('Appointment not found for update');
      return {
        statusCode: 404,
        headers,
        body: JSON.stringify({ error: 'Appointment not found' })
      };
    }
    console.log('Appointment updated successfully');
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(updatedAppointment)
    };
  } else if (method === 'DELETE' && id) {
    // Delete appointment
    console.log('Deleting appointment with ID:', id);
    const deletedAppointment = await Appointment.findByIdAndDelete(id);
    if (!deletedAppointment) {
      console.log('Appointment not found for deletion');
      return {
        statusCode: 404,
        headers,
        body: JSON.stringify({ error: 'Appointment not found' })
      };
    }
    console.log('Appointment deleted successfully');
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'Appointment deleted successfully' })
    };
  } else {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }
}

// Message handlers
async function handleMessages(method, path, body, headers, token) {
  const parts = path.split('/');
  const id = parts[1];

  console.log('=== MESSAGES HANDLER ===');
  console.log('Method:', method);
  console.log('Path:', path);
  console.log('Parts:', parts);
  console.log('ID:', id);
  console.log('Database name:', mongoose.connection.db.databaseName);

  // Check authentication for admin operations
  if (method === 'GET' && !id) {
    // Getting all messages requires authentication
    const auth = authenticateToken(token);
    if (!auth.valid) {
      return {
        statusCode: 401,
        headers,
        body: JSON.stringify({ error: 'Authentication required', message: auth.error })
      };
    }
  }

  if (method === 'GET') {
    if (id) {
      // Get specific message
      console.log('Fetching specific message with ID:', id);
      const message = await Message.findById(id);
      if (!message) {
        console.log('Message not found with ID:', id);
        return {
          statusCode: 404,
          headers,
          body: JSON.stringify({ error: 'Message not found' })
        };
      }
      console.log('Found message:', message.name);
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(message)
      };
    } else {
      // Get all messages
      try {
        console.log('Fetching all messages from messages collection...');
        console.log('Collection name: messages');
        
        const messages = await Message.find({}).sort({ createdAt: -1 });
        console.log(`Found ${messages.length} messages in database`);
        console.log('Message names:', messages.map(m => m.name || 'No name'));
        
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify(messages)
        };
      } catch (error) {
        console.error('Error fetching messages:', error);
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify([])
        };
      }
    }
  } else if (method === 'POST') {
    // Create new message
    console.log('Creating new message:', body);
    const message = new Message(body);
    const savedMessage = await message.save();
    console.log('Message created successfully:', savedMessage._id);
    return {
      statusCode: 201,
      headers,
      body: JSON.stringify(savedMessage)
    };
  } else if (method === 'PATCH' && id) {
    // Update message
    console.log('Updating message with ID:', id);
    const updatedMessage = await Message.findByIdAndUpdate(
      id,
      { ...body, updatedAt: new Date() },
      { new: true, runValidators: true }
    );
    if (!updatedMessage) {
      console.log('Message not found for update');
      return {
        statusCode: 404,
        headers,
        body: JSON.stringify({ error: 'Message not found' })
      };
    }
    console.log('Message updated successfully');
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(updatedMessage)
    };
  } else if (method === 'DELETE' && id) {
    // Delete message
    console.log('Deleting message with ID:', id);
    const deletedMessage = await Message.findByIdAndDelete(id);
    if (!deletedMessage) {
      console.log('Message not found for deletion');
      return {
        statusCode: 404,
        headers,
        body: JSON.stringify({ error: 'Message not found' })
      };
    }
    console.log('Message deleted successfully');
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'Message deleted successfully' })
    };
  } else {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }
}
