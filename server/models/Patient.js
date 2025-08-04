const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: Number,
    required: true
  },
  mainHealthConcern: {
    type: String,
    required: true
  },
  symptomsExperienced: {
    type: String,
    required: true
  },
  healthGoals: {
    type: String,
    default: ""
  },
  currentLifestyle: {
    type: String,
    default: ""
  },
  triedProgramsBefore: {
    type: String,
    default: ""
  },
  status: {
    type: String,
    enum: ['new', 'contacted', 'consulted'],
    default: 'new'
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

module.exports = mongoose.model('Patient', patientSchema, 'patients_info'); 