const express = require('express');
const router = express.Router();
const PaymentForm = require('../models/PaymentForm');

// Submit payment form (temporary storage - will be moved to permanent collection after payment)
router.post('/payment-form', async (req, res) => {
  try {
    const {
      fullName,
      age,
      cityState,
      email,
      phoneNumber,
      heardFrom,
      registeredFor,
      amount
    } = req.body;

    // Validate required fields
    if (!fullName || !age || !cityState || !email || !phoneNumber || !heardFrom || !registeredFor || !amount) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields'
      });
    }

    // Validate registeredFor value
    const validPlans = ['Wellness Reset', 'Healing Plan', '6 Months', '1:1 Consultation'];
    if (!validPlans.includes(registeredFor)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid plan selection'
      });
    }

    // Store in temporary collection or session (this will be moved to permanent collection after payment)
    const formData = {
      fullName,
      age: parseInt(age),
      cityState,
      email,
      phoneNumber,
      heardFrom,
      registeredFor,
      amount: parseInt(amount)
    };

    res.status(200).json({
      success: true,
      message: 'Form data validated successfully',
      data: formData
    });

  } catch (error) {
    console.error('Error validating payment form:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
});

// Complete payment form after successful payment
router.post('/payment-form/complete', async (req, res) => {
  try {
    const {
      fullName,
      age,
      cityState,
      email,
      phoneNumber,
      heardFrom,
      registeredFor,
      amount,
      razorpayOrderId,
      razorpayPaymentId,
      razorpaySignature
    } = req.body;

    // Validate required fields
    if (!fullName || !age || !cityState || !email || !phoneNumber || !heardFrom || !registeredFor || !amount) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields'
      });
    }

    // Validate registeredFor value
    const validPlans = ['Wellness Reset', 'Healing Plan', '6 Months', '1:1 Consultation'];
    if (!validPlans.includes(registeredFor)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid plan selection'
      });
    }

    // Create new payment form submission with payment details
    const paymentForm = new PaymentForm({
      fullName,
      age: parseInt(age),
      cityState,
      email,
      phoneNumber,
      heardFrom,
      registeredFor,
      amount: parseInt(amount),
      paymentStatus: 'completed',
      razorpayOrderId,
      razorpayPaymentId,
      razorpaySignature
    });

    await paymentForm.save();

    res.status(201).json({
      success: true,
      message: 'Payment form completed successfully',
      data: {
        id: paymentForm._id,
        fullName: paymentForm.fullName,
        email: paymentForm.email,
        registeredFor: paymentForm.registeredFor,
        paymentStatus: paymentForm.paymentStatus
      }
    });

  } catch (error) {
    console.error('Error completing payment form:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
});

// Get all payment forms (admin only)
router.get('/payment-forms', async (req, res) => {
  try {
    const paymentForms = await PaymentForm.find().sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      data: paymentForms
    });
  } catch (error) {
    console.error('Error fetching payment forms:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
});

// Update payment form status (admin only)
router.patch('/payment-form/:id/status', async (req, res) => {
  try {
    const { id } = req.params;
    const { serviceStatus } = req.body;

    const paymentForm = await PaymentForm.findByIdAndUpdate(
      id,
      { 
        serviceStatus,
        updatedAt: Date.now()
      },
      { new: true }
    );

    if (!paymentForm) {
      return res.status(404).json({
        success: false,
        message: 'Payment form not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Payment form status updated successfully',
      data: paymentForm
    });
  } catch (error) {
    console.error('Error updating payment form status:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
});

module.exports = router;
