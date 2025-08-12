import mongoose from 'mongoose';

export default async function handler(req, res) {
  try {
    // Connect to MongoDB
    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    }

    // Test the connection
    const connectionStatus = {
      status: 'connected',
      readyState: mongoose.connection.readyState,
      host: mongoose.connection.host,
      port: mongoose.connection.port,
      name: mongoose.connection.name,
      collections: Object.keys(mongoose.connection.collections)
    };

    res.status(200).json(connectionStatus);
  } catch (error) {
    console.error('MongoDB test error:', error);
    res.status(500).json({ 
      error: 'MongoDB connection failed',
      details: error.message,
      readyState: mongoose.connection.readyState
    });
  }
}
