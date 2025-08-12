import mongoose from 'mongoose';

// Define Appointment Schema
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

// Create model (handle both server and client environments)
let Appointment;
try {
  Appointment = mongoose.model('Appointment');
} catch {
  Appointment = mongoose.model('Appointment', appointmentSchema);
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
      // Get specific appointment
      const appointment = await Appointment.findById(id);
      if (!appointment) {
        return res.status(404).json({ error: 'Appointment not found' });
      }
      res.status(200).json(appointment);
    } else if (req.method === 'PATCH') {
      // Update appointment status
      const updatedAppointment = await Appointment.findByIdAndUpdate(
        id,
        { ...req.body, updatedAt: new Date() },
        { new: true, runValidators: true }
      );
      if (!updatedAppointment) {
        return res.status(404).json({ error: 'Appointment not found' });
      }
      res.status(200).json(updatedAppointment);
    } else if (req.method === 'DELETE') {
      // Delete appointment
      const deletedAppointment = await Appointment.findByIdAndDelete(id);
      if (!deletedAppointment) {
        return res.status(404).json({ error: 'Appointment not found' });
      }
      res.status(200).json({ message: 'Appointment deleted successfully' });
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Appointment API error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
