const express = require('express');
const router = express.Router();
const QuizLead = require('../models/QuizLead');

// Submit quiz lead
router.post('/submit', async (req, res) => {
  try {
    const { name, email, score, result, pillarScores, answers } = req.body;

    // Validate required fields
    if (!name || !email || !score || !result) {
      return res.status(400).json({ 
        success: false, 
        message: 'Missing required fields' 
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Invalid email format' 
      });
    }

    // Validate score range
    if (score < 14 || score > 70) {
      return res.status(400).json({ 
        success: false, 
        message: 'Invalid score range' 
      });
    }

    // Check if email already exists
    const existingLead = await QuizLead.findOne({ email });
    if (existingLead) {
      return res.status(400).json({ 
        success: false, 
        message: 'Email already registered' 
      });
    }

    // Create new quiz lead
    const quizLead = new QuizLead({
      name,
      email,
      score,
      result,
      pillarScores,
      answers
    });

    await quizLead.save();

    // TODO: Send email with results (implement email service)
    // For now, just mark as sent
    quizLead.emailSent = true;
    quizLead.emailSentAt = new Date();
    await quizLead.save();

    res.status(201).json({
      success: true,
      message: 'Quiz lead submitted successfully',
      data: {
        id: quizLead._id,
        name: quizLead.name,
        email: quizLead.email,
        score: quizLead.score,
        result: quizLead.result
      }
    });

  } catch (error) {
    console.error('Error submitting quiz lead:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Get all quiz leads (for admin dashboard)
router.get('/', async (req, res) => {
  try {
    const { page = 1, limit = 20, sort = '-submittedAt' } = req.query;
    
    const options = {
      page: parseInt(page),
      limit: parseInt(limit),
      sort: sort,
      select: 'name email score result.title submittedAt emailSent'
    };

    const quizLeads = await QuizLead.paginate({}, options);

    res.json({
      success: true,
      data: quizLeads
    });

  } catch (error) {
    console.error('Error fetching quiz leads:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Get quiz lead by ID
router.get('/:id', async (req, res) => {
  try {
    const quizLead = await QuizLead.findById(req.params.id);
    
    if (!quizLead) {
      return res.status(404).json({
        success: false,
        message: 'Quiz lead not found'
      });
    }

    res.json({
      success: true,
      data: quizLead
    });

  } catch (error) {
    console.error('Error fetching quiz lead:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Update email sent status
router.patch('/:id/email-status', async (req, res) => {
  try {
    const { emailSent } = req.body;
    
    const quizLead = await QuizLead.findByIdAndUpdate(
      req.params.id,
      { 
        emailSent,
        emailSentAt: emailSent ? new Date() : null
      },
      { new: true }
    );

    if (!quizLead) {
      return res.status(404).json({
        success: false,
        message: 'Quiz lead not found'
      });
    }

    res.json({
      success: true,
      message: 'Email status updated successfully',
      data: quizLead
    });

  } catch (error) {
    console.error('Error updating email status:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Delete quiz lead
router.delete('/:id', async (req, res) => {
  try {
    const quizLead = await QuizLead.findByIdAndDelete(req.params.id);
    
    if (!quizLead) {
      return res.status(404).json({
        success: false,
        message: 'Quiz lead not found'
      });
    }

    res.json({
      success: true,
      message: 'Quiz lead deleted successfully'
    });

  } catch (error) {
    console.error('Error deleting quiz lead:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

module.exports = router;
