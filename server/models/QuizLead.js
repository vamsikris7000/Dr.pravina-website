const mongoose = require('mongoose');

const quizLeadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  score: {
    type: Number,
    required: true,
    min: 14,
    max: 70
  },
  result: {
    range: String,
    title: String,
    message: String
  },
  pillarScores: {
    nutrition: { score: Number, maxScore: Number, percentage: Number },
    movement: { score: Number, maxScore: Number, percentage: Number },
    sleep: { score: Number, maxScore: Number, percentage: Number },
    stress: { score: Number, maxScore: Number, percentage: Number },
    sexual: { score: Number, maxScore: Number, percentage: Number },
    social: { score: Number, maxScore: Number, percentage: Number },
    substances: { score: Number, maxScore: Number, percentage: Number }
  },
  answers: {
    type: Map,
    of: Number
  },
  submittedAt: {
    type: Date,
    default: Date.now
  },
  emailSent: {
    type: Boolean,
    default: false
  },
  emailSentAt: {
    type: Date
  }
}, {
  timestamps: true
});

// Index for email queries
quizLeadSchema.index({ email: 1 });
quizLeadSchema.index({ submittedAt: -1 });

module.exports = mongoose.model('QuizLead', quizLeadSchema);
