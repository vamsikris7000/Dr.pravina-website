import mongoose from 'mongoose';

// Define Message Schema
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

// Create model (handle both server and client environments)
let Message;
try {
  Message = mongoose.model('Message');
} catch {
  Message = mongoose.model('Message', messageSchema);
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
      // Get specific message
      const message = await Message.findById(id);
      if (!message) {
        return res.status(404).json({ error: 'Message not found' });
      }
      res.status(200).json(message);
    } else if (req.method === 'PATCH') {
      // Update message status
      const updatedMessage = await Message.findByIdAndUpdate(
        id,
        { ...req.body, updatedAt: new Date() },
        { new: true, runValidators: true }
      );
      if (!updatedMessage) {
        return res.status(404).json({ error: 'Message not found' });
      }
      res.status(200).json(updatedMessage);
    } else if (req.method === 'DELETE') {
      // Delete message
      const deletedMessage = await Message.findByIdAndDelete(id);
      if (!deletedMessage) {
        return res.status(404).json({ error: 'Message not found' });
      }
      res.status(200).json({ message: 'Message deleted successfully' });
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Message API error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
