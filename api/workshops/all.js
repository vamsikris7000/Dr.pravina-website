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
  try {
    // Connect to MongoDB
    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    }

    if (req.method === 'GET') {
      // Fetch all workshops from MongoDB (including inactive ones for admin)
      const workshops = await Workshop.find({}).sort({ order: 1 });
      res.status(200).json(workshops);
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Workshops All API error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
