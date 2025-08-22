const mongoose = require('mongoose');

const paymentFormSchema = new mongoose.Schema({
  // Basic form fields
  fullName: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  cityState: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  heardFrom: {
    type: String,
    enum: ['instagram', 'whatsapp-community', 'friend', 'doctor-referral', 'other'],
    required: true
  },
  
  // Plan identification
  registeredFor: {
    type: String,
    enum: ['Wellness Reset', 'Healing Plan', '6 Months', '1:1 Consultation'],
    required: true
  },
  
  // Payment and transaction details
  paymentStatus: {
    type: String,
    enum: ['pending', 'completed', 'failed', 'cancelled'],
    default: 'pending'
  },
  razorpayOrderId: {
    type: String,
    required: false
  },
  razorpayPaymentId: {
    type: String,
    required: false
  },
  razorpaySignature: {
    type: String,
    required: false
  },
  amount: {
    type: Number,
    required: true
  },
  currency: {
    type: String,
    default: 'INR'
  },
  
  // Service status
  serviceStatus: {
    type: String,
    enum: ['pending', 'active', 'completed', 'cancelled'],
    default: 'pending'
  },
  startDate: {
    type: Date,
    required: false
  },
  endDate: {
    type: Date,
    required: false
  },
  notes: {
    type: String,
    required: false
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

module.exports = mongoose.model('PaymentForm', paymentFormSchema, 'payment_forms');
