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

export default async function handler(req, res) {
  const { path } = req.query;
  const token = req.headers.authorization;

  // Reconstruct the path
  const apiPath = Array.isArray(path) ? path.join('/') : path;

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
      await handleWorkshops(req, res, apiPath);
    } else if (apiPath.startsWith('patients')) {
      await handlePatients(req, res, apiPath);
    } else if (apiPath.startsWith('appointments')) {
      await handleAppointments(req, res, apiPath);
    } else if (apiPath.startsWith('messages')) {
      await handleMessages(req, res, apiPath);
    } else {
      // Fallback to backend proxy for other routes
      const backendUrl = process.env.BACKEND_URL || 'http://localhost:5001';
      const response = await fetch(`${backendUrl}/api/${apiPath}`, {
        method: req.method,
        headers: {
          'Content-Type': 'application/json',
          ...(token && { 'Authorization': token }),
        },
        ...(req.body && { body: JSON.stringify(req.body) }),
      });

      const data = await response.json();
      
      if (response.ok) {
        res.status(200).json(data);
      } else {
        res.status(response.status).json(data);
      }
    }
  } catch (error) {
    console.error('API error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// Workshop handlers
async function handleWorkshops(req, res, path) {
  const parts = path.split('/');
  const id = parts[1];

  if (req.method === 'GET') {
    if (id) {
      // Get specific workshop
      const workshop = await Workshop.findById(id);
      if (!workshop) {
        return res.status(404).json({ error: 'Workshop not found' });
      }
      res.status(200).json(workshop);
    } else if (parts[1] === 'all') {
      // Get all workshops (for admin)
      const workshops = await Workshop.find({}).sort({ order: 1 });
      res.status(200).json(workshops);
    } else {
      // Get active workshops
      const workshops = await Workshop.find({ isActive: true }).sort({ order: 1 });
      res.status(200).json(workshops);
    }
  } else if (req.method === 'POST') {
    // Create new workshop
    const workshop = new Workshop(req.body);
    const savedWorkshop = await workshop.save();
    res.status(201).json(savedWorkshop);
  } else if (req.method === 'PUT' && id) {
    // Update workshop
    const updatedWorkshop = await Workshop.findByIdAndUpdate(
      id,
      { ...req.body, updatedAt: new Date() },
      { new: true, runValidators: true }
    );
    if (!updatedWorkshop) {
      return res.status(404).json({ error: 'Workshop not found' });
    }
    res.status(200).json(updatedWorkshop);
  } else if (req.method === 'DELETE' && id) {
    // Soft delete workshop
    const deletedWorkshop = await Workshop.findByIdAndUpdate(
      id,
      { isActive: false, updatedAt: new Date() },
      { new: true }
    );
    if (!deletedWorkshop) {
      return res.status(404).json({ error: 'Workshop not found' });
    }
    res.status(200).json({ message: 'Workshop deleted successfully' });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

// Patient handlers
async function handlePatients(req, res, path) {
  const parts = path.split('/');
  const id = parts[1];

  if (req.method === 'GET') {
    if (id) {
      // Get specific patient
      const patient = await Patient.findById(id);
      if (!patient) {
        return res.status(404).json({ error: 'Patient not found' });
      }
      res.status(200).json(patient);
    } else {
      // Get all patients
      const patients = await Patient.find({}).sort({ createdAt: -1 });
      res.status(200).json(patients);
    }
  } else if (req.method === 'POST') {
    // Create new patient
    const patient = new Patient(req.body);
    const savedPatient = await patient.save();
    res.status(201).json(savedPatient);
  } else if (req.method === 'PATCH' && id) {
    // Update patient
    const updatedPatient = await Patient.findByIdAndUpdate(
      id,
      { ...req.body, updatedAt: new Date() },
      { new: true, runValidators: true }
    );
    if (!updatedPatient) {
      return res.status(404).json({ error: 'Patient not found' });
    }
    res.status(200).json(updatedPatient);
  } else if (req.method === 'DELETE' && id) {
    // Delete patient
    const deletedPatient = await Patient.findByIdAndDelete(id);
    if (!deletedPatient) {
      return res.status(404).json({ error: 'Patient not found' });
    }
    res.status(200).json({ message: 'Patient deleted successfully' });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

// Appointment handlers
async function handleAppointments(req, res, path) {
  const parts = path.split('/');
  const id = parts[1];

  if (req.method === 'GET') {
    if (id) {
      // Get specific appointment
      const appointment = await Appointment.findById(id);
      if (!appointment) {
        return res.status(404).json({ error: 'Appointment not found' });
      }
      res.status(200).json(appointment);
    } else {
      // Get all appointments
      const appointments = await Appointment.find({}).sort({ createdAt: -1 });
      res.status(200).json(appointments);
    }
  } else if (req.method === 'POST') {
    // Create new appointment
    const appointment = new Appointment(req.body);
    const savedAppointment = await appointment.save();
    res.status(201).json(savedAppointment);
  } else if (req.method === 'PATCH' && id) {
    // Update appointment
    const updatedAppointment = await Appointment.findByIdAndUpdate(
      id,
      { ...req.body, updatedAt: new Date() },
      { new: true, runValidators: true }
    );
    if (!updatedAppointment) {
      return res.status(404).json({ error: 'Appointment not found' });
    }
    res.status(200).json(updatedAppointment);
  } else if (req.method === 'DELETE' && id) {
    // Delete appointment
    const deletedAppointment = await Appointment.findByIdAndDelete(id);
    if (!deletedAppointment) {
      return res.status(404).json({ error: 'Appointment not found' });
    }
    res.status(200).json({ message: 'Appointment deleted successfully' });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

// Message handlers
async function handleMessages(req, res, path) {
  const parts = path.split('/');
  const id = parts[1];

  if (req.method === 'GET') {
    if (id) {
      // Get specific message
      const message = await Message.findById(id);
      if (!message) {
        return res.status(404).json({ error: 'Message not found' });
      }
      res.status(200).json(message);
    } else {
      // Get all messages
      const messages = await Message.find({}).sort({ createdAt: -1 });
      res.status(200).json(messages);
    }
  } else if (req.method === 'POST') {
    // Create new message
    const message = new Message(req.body);
    const savedMessage = await message.save();
    res.status(201).json(savedMessage);
  } else if (req.method === 'PATCH' && id) {
    // Update message
    const updatedMessage = await Message.findByIdAndUpdate(
      id,
      { ...req.body, updatedAt: new Date() },
      { new: true, runValidators: true }
    );
    if (!updatedMessage) {
      return res.status(404).json({ error: 'Message not found' });
    }
    res.status(200).json(updatedMessage);
  } else if (req.method === 'DELETE' && id) {
    // Delete message
    const deletedMessage = await Message.findByIdAndDelete(id);
    if (!deletedMessage) {
      return res.status(404).json({ error: 'Message not found' });
    }
    res.status(200).json({ message: 'Message deleted successfully' });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
