import mongoose from 'mongoose';

// Define Workshop Schema
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

// Create model (handle both server and client environments)
let Workshop;
try {
  Workshop = mongoose.model('Workshop');
} catch {
  Workshop = mongoose.model('Workshop', workshopSchema);
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
      // Get specific workshop
      const workshop = await Workshop.findById(id);
      if (!workshop) {
        return res.status(404).json({ error: 'Workshop not found' });
      }
      res.status(200).json(workshop);
    } else if (req.method === 'PUT') {
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
    } else if (req.method === 'DELETE') {
      // Soft delete workshop (set isActive to false)
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
  } catch (error) {
    console.error('Workshop API error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
