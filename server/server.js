const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config({ path: './config.env' });

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB Atlas');
});

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api', require('./routes/patients'));
app.use('/api', require('./routes/appointments'));
app.use('/api', require('./routes/messages'));
app.use('/api/workshops', require('./routes/workshops'));
app.use('/api', require('./routes/payment-form'));
app.use('/api/quiz-leads', require('./routes/quiz-leads'));

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Path\'o\'Life Admin API is running' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 