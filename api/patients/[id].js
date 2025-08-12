import mongoose from 'mongoose';

// Define Patient Schema
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

// Create model (handle both server and client environments)
let Patient;
try {
  Patient = mongoose.model('Patient');
} catch {
  Patient = mongoose.model('Patient', patientSchema);
}

export default async function handler(req, res) {
  const { id } = req.query;

  try {
    // Connect to MongoDB
    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    }

    if (req.method === 'GET') {
      // Get specific patient
      const patient = await Patient.findById(id);
      if (!patient) {
        return res.status(404).json({ error: 'Patient not found' });
      }
      res.status(200).json(patient);
    } else if (req.method === 'PATCH') {
      // Update patient status
      const updatedPatient = await Patient.findByIdAndUpdate(
        id,
        { ...req.body, updatedAt: new Date() },
        { new: true, runValidators: true }
      );
      if (!updatedPatient) {
        return res.status(404).json({ error: 'Patient not found' });
      }
      res.status(200).json(updatedPatient);
    } else if (req.method === 'DELETE') {
      // Delete patient
      const deletedPatient = await Patient.findByIdAndDelete(id);
      if (!deletedPatient) {
        return res.status(404).json({ error: 'Patient not found' });
      }
      res.status(200).json({ message: 'Patient deleted successfully' });
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Patient API error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
