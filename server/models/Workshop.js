const mongoose = require('mongoose');

const workshopSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  audience: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  day: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
           price: {
           type: Number,
           required: true,
           default: 499
         },
  features: {
    type: [String],
    default: []
  },
  description: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  order: {
    type: Number,
    default: 0
  },
  status: {
    type: String,
    enum: ['live', 'coming-soon'],
    default: 'coming-soon'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Workshop', workshopSchema, 'workshops'); 