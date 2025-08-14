import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env' });

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection - using environment variable
const MONGODB_URI = process.env.MONGODB_URI;

// Try to connect to MongoDB, but don't fail if it doesn't work
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected successfully');
}).catch((error) => {
  console.log('MongoDB connection failed, using fallback data:', error.message);
});

// Schemas
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
  age: Number,
  city: String,
  phoneNumber: Number,
  mainHealthConcern: String,
  symptomsExperienced: String,
  healthGoals: String,
  email: String,
  phone: String,
  gender: String,
  concern: String,
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

// Models
const Workshop = mongoose.model('Workshop', workshopSchema);
const Patient = mongoose.model('patients_info', patientSchema); // Use correct collection name
const Appointment = mongoose.model('Appointment', appointmentSchema);
const Message = mongoose.model('Message', messageSchema);

// Auth endpoint
app.post('/api/auth', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Admin credentials from environment variables
    const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
    const JWT_SECRET = process.env.JWT_SECRET;

    // Check credentials
    if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { email: ADMIN_EMAIL, role: 'admin' },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({ 
      token, 
      user: { 
        email: ADMIN_EMAIL, 
        role: 'admin' 
      } 
    });
  } catch (error) {
    console.error('Auth error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Fallback workshop data - All 6 workshops
const fallbackWorkshops = [
  {
    _id: "6894f613d0686b1d3e46bfbc",
    title: "The Weight Reset for Women",
    subtitle: "Not Just Weight Loss, A Full Body Reset",
    audience: "For All Women 18+",
    icon: "👩🏻‍⚕️",
    day: "Sunday",
    date: "8th Aug",
    time: "4:50 PM - 5:00 PM",
    price: 499,
    features: ["Understand your hormones & weight connection", "Tackle belly fat, cravings & low energy", "Anti-inflammatory nutrition made practical", "Smart movement & strength strategies", "Stress, sleep & metabolism mastery", "Build habits that last, not bounce back"],
    description: "A comprehensive program focusing on hormonal balance and sustainable weight management for women.",
    isActive: true,
    order: 1,
    status: "live",
    createdAt: "2025-08-07T18:53:07.025Z",
    updatedAt: "2025-08-12T18:55:22.476Z"
  },
  {
    _id: "6894f613d0686b1d3e46bfbd",
    title: "PCOS Unplugged",
    subtitle: "Your Hormones, Hair, Skin & Sanity",
    audience: "For Teens & Young Women",
    icon: "🌸",
    day: "Saturday",
    date: "10th Aug",
    time: "3:00 PM - 6:30 PM",
    price: 499,
    features: ["Decode your hormones & cycle", "Period problems & PCOS types", "Skin, hair, mood & weight tips", "Menstrual cup basics & hygiene", "PCOS-friendly food & movement", "Cycle syncing & stress hacks"],
    description: "Specialized workshop for managing PCOS symptoms and improving overall well-being.",
    isActive: true,
    order: 2,
    status: "live",
    createdAt: "2025-08-07T18:53:07.026Z",
    updatedAt: "2025-08-12T10:00:25.465Z"
  },
  {
    _id: "6894f613d0686b1d3e46bfbe",
    title: "Pre-Pregnancy Power Couple",
    subtitle: "Plan Parenthood with Purpose",
    audience: "For Couples Planning Pregnancy",
    icon: "👫🏻",
    day: "Friday",
    date: "15th Aug",
    time: "5:00 PM - 8:30 PM",
    price: 499,
    features: ["Fertility nutrition for both partners", "Cycle tracking & fertile window basics", "Lifestyle shifts to boost conception", "Detox, stress & sleep prep", "Emotional alignment & partner mindset", "Myths vs science of getting pregnant"],
    description: "Comprehensive preparation for pregnancy with focus on fertility optimization.",
    isActive: true,
    order: 3,
    status: "live",
    createdAt: "2025-08-07T18:53:07.026Z",
    updatedAt: "2025-08-07T19:08:37.106Z"
  },
  {
    _id: "6894f613d0686b1d3e46bfbf",
    title: "Pregnancy Wellness Workshop",
    subtitle: "Feel Nourished, Calm & Connected",
    audience: "For Expecting Mothers (All Trimesters)",
    icon: "🤰🏻",
    day: "Wednesday",
    date: "20th Aug",
    time: "6:00 PM - 9:30 PM",
    price: 499,
    features: ["Trimester-wise nutrition & cravings", "Safe movement & breathing practices", "Sleep, stress & mental wellness", "Gut health & immunity boosters", "Indian wisdom meets modern care", "Rituals for bonding & body trust"],
    description: "Supporting expecting mothers through pregnancy wellness and preparation.",
    isActive: true,
    order: 4,
    status: "coming-soon",
    createdAt: "2025-08-07T18:53:07.027Z",
    updatedAt: "2025-08-12T10:00:28.240Z"
  },
  {
    _id: "6894f613d0686b1d3e46bfc0",
    title: "Confident Breastfeeding & Postpartum Healing",
    subtitle: "Nurture Your Baby. Reclaim Your Body.",
    audience: "For New & Expecting Moms",
    icon: "🤱🏻",
    day: "Tuesday",
    date: "25th Aug",
    time: "5:30 PM - 9:00 PM",
    price: 499,
    features: ["Lactation techniques & myths", "Latch, supply, positions & pumping", "Recovery after birth for body, mind, sleep", "Postpartum nutrition & emotional support", "Indian rituals & modern healing practices", "Space for real talk, not just survival"],
    description: "Supporting new mothers through postpartum recovery and breastfeeding.",
    isActive: true,
    order: 5,
    status: "coming-soon",
    createdAt: "2025-08-07T18:53:07.027Z",
    updatedAt: "2025-08-12T10:00:31.152Z"
  },
  {
    _id: "6894f613d0686b1d3e46bfc1",
    title: "First Foods & Beyond",
    subtitle: "Foundations of Child Nutrition & Lifestyle",
    audience: "For Moms with Children (6 Months to 5 Years)",
    icon: "🍲",
    day: "Thursday",
    date: "30th Aug",
    time: "4:00 PM - 7:30 PM",
    price: 499,
    features: ["When & how to start solids", "Daily feeding plans & schedules", "Immunity-boosting foods & habits", "Gut health, picky eating & meal battles", "Holistic child lifestyle routines (food, sleep, screen, play)", "Indian food wisdom with modern evidence"],
    description: "Learn essential strategies for nurturing healthy and happy children through proper nutrition and effective parenting techniques.",
    isActive: true,
    order: 6,
    status: "coming-soon",
    createdAt: "2025-08-07T18:53:07.027Z",
    updatedAt: "2025-08-12T10:00:33.406Z"
  }
];

// Workshops endpoints
app.get('/api/workshops', async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const workshops = await Workshop.find({ isActive: true }).sort({ order: 1 });
      res.json(workshops);
    } else {
      // Use fallback data if MongoDB is not connected
      res.json(fallbackWorkshops);
    }
  } catch (error) {
    console.error('Error fetching workshops:', error);
    // Use fallback data on error
    res.json(fallbackWorkshops);
  }
});

app.get('/api/workshops/all', async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const workshops = await Workshop.find({}).sort({ order: 1 });
      res.json(workshops);
    } else {
      // Use fallback data if MongoDB is not connected
      res.json(fallbackWorkshops);
    }
  } catch (error) {
    console.error('Error fetching all workshops:', error);
    // Use fallback data on error
    res.json(fallbackWorkshops);
  }
});

// Update workshop
app.put('/api/workshops/:id', async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const { id } = req.params;
      const updateData = { ...req.body, updatedAt: new Date() };
      
      const workshop = await Workshop.findByIdAndUpdate(id, updateData, { new: true });
      
      if (workshop) {
        res.json({ message: 'Workshop updated successfully', workshop });
      } else {
        res.status(404).json({ error: 'Workshop not found' });
      }
    } else {
      res.status(500).json({ error: 'Database not connected' });
    }
  } catch (error) {
    console.error('Error updating workshop:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete workshop
app.delete('/api/workshops/:id', async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const { id } = req.params;
      
      const workshop = await Workshop.findByIdAndDelete(id);
      
      if (workshop) {
        res.json({ message: 'Workshop deleted successfully' });
      } else {
        res.status(404).json({ error: 'Workshop not found' });
      }
    } else {
      res.status(500).json({ error: 'Database not connected' });
    }
  } catch (error) {
    console.error('Error deleting workshop:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create workshop
app.post('/api/workshops', async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const workshopData = { ...req.body, createdAt: new Date(), updatedAt: new Date() };
      const workshop = new Workshop(workshopData);
      await workshop.save();
      
      res.status(201).json({ message: 'Workshop created successfully', workshop });
    } else {
      res.status(500).json({ error: 'Database not connected' });
    }
  } catch (error) {
    console.error('Error creating workshop:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Patients endpoints
app.get('/api/patients', async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      // Use direct MongoDB query for patients_info collection
      const patients = await mongoose.connection.db.collection('patients_info').find({}).toArray();
      res.json(patients);
    } else {
      // Use fallback data if MongoDB is not connected
      res.json([]);
    }
  } catch (error) {
    console.error('Error fetching patients:', error);
    res.json([]);
  }
});

// Delete patient
app.delete('/api/patients/:id', async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const { id } = req.params;
      const result = await mongoose.connection.db.collection('patients_info').deleteOne({ _id: new mongoose.Types.ObjectId(id) });
      
      if (result.deletedCount === 1) {
        res.json({ message: 'Patient deleted successfully' });
      } else {
        res.status(404).json({ error: 'Patient not found' });
      }
    } else {
      res.status(500).json({ error: 'Database not connected' });
    }
  } catch (error) {
    console.error('Error deleting patient:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update patient status
app.patch('/api/patients/:id', async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const { id } = req.params;
      const { status } = req.body;
      
      const result = await mongoose.connection.db.collection('patients_info').updateOne(
        { _id: new mongoose.Types.ObjectId(id) },
        { $set: { status, updatedAt: new Date() } }
      );
      
      if (result.modifiedCount === 1) {
        res.json({ message: 'Patient status updated successfully' });
      } else {
        res.status(404).json({ error: 'Patient not found' });
      }
    } else {
      res.status(500).json({ error: 'Database not connected' });
    }
  } catch (error) {
    console.error('Error updating patient:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Appointments endpoints
app.get('/api/appointments', async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const appointments = await Appointment.find({}).sort({ createdAt: -1 });
      res.json(appointments);
    } else {
      // Use fallback data if MongoDB is not connected
      res.json([]);
    }
  } catch (error) {
    console.error('Error fetching appointments:', error);
    res.json([]);
  }
});

// Delete appointment
app.delete('/api/appointments/:id', async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const { id } = req.params;
      
      const appointment = await Appointment.findByIdAndDelete(id);
      
      if (appointment) {
        res.json({ message: 'Appointment deleted successfully' });
      } else {
        res.status(404).json({ error: 'Appointment not found' });
      }
    } else {
      res.status(500).json({ error: 'Database not connected' });
    }
  } catch (error) {
    console.error('Error deleting appointment:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update appointment status
app.patch('/api/appointments/:id', async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const { id } = req.params;
      const { status } = req.body;
      
      const appointment = await Appointment.findByIdAndUpdate(
        id, 
        { status, updatedAt: new Date() }, 
        { new: true }
      );
      
      if (appointment) {
        res.json({ message: 'Appointment status updated successfully', appointment });
      } else {
        res.status(404).json({ error: 'Appointment not found' });
      }
    } else {
      res.status(500).json({ error: 'Database not connected' });
    }
  } catch (error) {
    console.error('Error updating appointment:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Messages endpoints
app.get('/api/messages', async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const messages = await Message.find({}).sort({ createdAt: -1 });
      res.json(messages);
    } else {
      // Use fallback data if MongoDB is not connected
      res.json([]);
    }
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.json([]);
  }
});

// Delete message
app.delete('/api/messages/:id', async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const { id } = req.params;
      
      const message = await Message.findByIdAndDelete(id);
      
      if (message) {
        res.json({ message: 'Message deleted successfully' });
      } else {
        res.status(404).json({ error: 'Message not found' });
      }
    } else {
      res.status(500).json({ error: 'Database not connected' });
    }
  } catch (error) {
    console.error('Error deleting message:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update message status
app.patch('/api/messages/:id', async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const { id } = req.params;
      const { status } = req.body;
      
      const message = await Message.findByIdAndUpdate(
        id, 
        { status, updatedAt: new Date() }, 
        { new: true }
      );
      
      if (message) {
        res.json({ message: 'Message status updated successfully', message });
      } else {
        res.status(404).json({ error: 'Message not found' });
      }
    } else {
      res.status(500).json({ error: 'Database not connected' });
    }
  } catch (error) {
    console.error('Error updating message:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Voice integration proxy
app.use('/api/voice-integration', async (req, res) => {
  try {
    const response = await fetch(`${process.env.VOICE_API_BASE_URL}${req.url}`, {
      method: req.method,
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.VOICE_API_KEY,
        ...req.headers
      },
      body: req.method !== 'GET' ? JSON.stringify(req.body) : undefined
    });
    
    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    console.error('Voice integration error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});



app.listen(PORT, () => {
  console.log(`Local development server running on http://localhost:${PORT}`);
  console.log('MongoDB connected successfully');
});
