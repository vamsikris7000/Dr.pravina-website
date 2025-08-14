import mongoose from 'mongoose';

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
  name: String,
  email: String,
  phone: String,
  age: Number,
  gender: String,
  concern: String,
  status: {
    type: String,
    enum: ['pending', 'contacted', 'consulted', 'completed'],
    default: 'pending'
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

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
  Patient = mongoose.model('Patient');
  Appointment = mongoose.model('Appointment');
  Message = mongoose.model('Message');
} catch {
  Workshop = mongoose.model('Workshop', workshopSchema);
  Patient = mongoose.model('Patient', patientSchema);
  Appointment = mongoose.model('Appointment', appointmentSchema);
  Message = mongoose.model('Message', messageSchema);
}

export default async function handler(event, context) {
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

  // Reconstruct the path
  const apiPath = path || '';

  try {
    // Connect to MongoDB
    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    }

    // Handle different API endpoints
    if (apiPath.startsWith('workshops')) {
      return await handleWorkshops(method, apiPath, body, headers);
    } else if (apiPath.startsWith('patients')) {
      return await handlePatients(method, apiPath, body, headers);
    } else if (apiPath.startsWith('appointments')) {
      return await handleAppointments(method, apiPath, body, headers);
    } else if (apiPath.startsWith('messages')) {
      return await handleMessages(method, apiPath, body, headers);
    } else {
      // Fallback to backend proxy for other routes
      const backendUrl = process.env.BACKEND_URL || 'http://localhost:5001';
      const response = await fetch(`${backendUrl}/api/${apiPath}`, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
          ...(token && { 'Authorization': token }),
        },
        ...(body && { body: JSON.stringify(body) }),
      });

      const data = await response.json();
      
      return {
        statusCode: response.status,
        headers,
        body: JSON.stringify(data)
      };
    }
  } catch (error) {
    console.error('API error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Internal server error' })
    };
  }
}

// Workshop handlers
async function handleWorkshops(method, path, body, headers) {
  const parts = path.split('/');
  const id = parts[1];

  if (method === 'GET') {
    if (id) {
      // Get specific workshop
      const workshop = await Workshop.findById(id);
      if (!workshop) {
        return {
          statusCode: 404,
          headers,
          body: JSON.stringify({ error: 'Workshop not found' })
        };
      }
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(workshop)
      };
    } else if (parts[1] === 'all') {
      // Get all workshops (for admin)
      const workshops = await Workshop.find({}).sort({ order: 1 });
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(workshops)
      };
    } else {
      // Get active workshops
      const workshops = await Workshop.find({ isActive: true }).sort({ order: 1 });
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(workshops)
      };
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
async function handlePatients(method, path, body, headers) {
  const parts = path.split('/');
  const id = parts[1];

  if (method === 'GET') {
    if (id) {
      // Get specific patient
      const patient = await Patient.findById(id);
      if (!patient) {
        return {
          statusCode: 404,
          headers,
          body: JSON.stringify({ error: 'Patient not found' })
        };
      }
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(patient)
      };
    } else {
      // Get all patients
      const patients = await Patient.find({}).sort({ createdAt: -1 });
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(patients)
      };
    }
  } else if (method === 'POST') {
    // Create new patient
    const patient = new Patient(body);
    const savedPatient = await patient.save();
    return {
      statusCode: 201,
      headers,
      body: JSON.stringify(savedPatient)
    };
  } else if (method === 'PATCH' && id) {
    // Update patient
    const updatedPatient = await Patient.findByIdAndUpdate(
      id,
      { ...body, updatedAt: new Date() },
      { new: true, runValidators: true }
    );
    if (!updatedPatient) {
      return {
        statusCode: 404,
        headers,
        body: JSON.stringify({ error: 'Patient not found' })
      };
    }
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(updatedPatient)
    };
  } else if (method === 'DELETE' && id) {
    // Delete patient
    const deletedPatient = await Patient.findByIdAndDelete(id);
    if (!deletedPatient) {
      return {
        statusCode: 404,
        headers,
        body: JSON.stringify({ error: 'Patient not found' })
      };
    }
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'Patient deleted successfully' })
    };
  } else {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }
}

// Appointment handlers
async function handleAppointments(method, path, body, headers) {
  const parts = path.split('/');
  const id = parts[1];

  if (method === 'GET') {
    if (id) {
      // Get specific appointment
      const appointment = await Appointment.findById(id);
      if (!appointment) {
        return {
          statusCode: 404,
          headers,
          body: JSON.stringify({ error: 'Appointment not found' })
        };
      }
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(appointment)
      };
    } else {
      // Get all appointments
      const appointments = await Appointment.find({}).sort({ createdAt: -1 });
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(appointments)
      };
    }
  } else if (method === 'POST') {
    // Create new appointment
    const appointment = new Appointment(body);
    const savedAppointment = await appointment.save();
    return {
      statusCode: 201,
      headers,
      body: JSON.stringify(savedAppointment)
    };
  } else if (method === 'PATCH' && id) {
    // Update appointment
    const updatedAppointment = await Appointment.findByIdAndUpdate(
      id,
      { ...body, updatedAt: new Date() },
      { new: true, runValidators: true }
    );
    if (!updatedAppointment) {
      return {
        statusCode: 404,
        headers,
        body: JSON.stringify({ error: 'Appointment not found' })
      };
    }
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(updatedAppointment)
    };
  } else if (method === 'DELETE' && id) {
    // Delete appointment
    const deletedAppointment = await Appointment.findByIdAndDelete(id);
    if (!deletedAppointment) {
      return {
        statusCode: 404,
        headers,
        body: JSON.stringify({ error: 'Appointment not found' })
      };
    }
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
async function handleMessages(method, path, body, headers) {
  const parts = path.split('/');
  const id = parts[1];

  if (method === 'GET') {
    if (id) {
      // Get specific message
      const message = await Message.findById(id);
      if (!message) {
        return {
          statusCode: 404,
          headers,
          body: JSON.stringify({ error: 'Message not found' })
        };
      }
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(message)
      };
    } else {
      // Get all messages
      const messages = await Message.find({}).sort({ createdAt: -1 });
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(messages)
      };
    }
  } else if (method === 'POST') {
    // Create new message
    const message = new Message(body);
    const savedMessage = await message.save();
    return {
      statusCode: 201,
      headers,
      body: JSON.stringify(savedMessage)
    };
  } else if (method === 'PATCH' && id) {
    // Update message
    const updatedMessage = await Message.findByIdAndUpdate(
      id,
      { ...body, updatedAt: new Date() },
      { new: true, runValidators: true }
    );
    if (!updatedMessage) {
      return {
        statusCode: 404,
        headers,
        body: JSON.stringify({ error: 'Message not found' })
      };
    }
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(updatedMessage)
    };
  } else if (method === 'DELETE' && id) {
    // Delete message
    const deletedMessage = await Message.findByIdAndDelete(id);
    if (!deletedMessage) {
      return {
        statusCode: 404,
        headers,
        body: JSON.stringify({ error: 'Message not found' })
      };
    }
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
