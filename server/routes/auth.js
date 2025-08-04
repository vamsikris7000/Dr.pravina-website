const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Admin login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if email matches admin email
    if (email !== process.env.ADMIN_EMAIL) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check if password matches admin password
    const isValidPassword = await bcrypt.compare(password, await bcrypt.hash(process.env.ADMIN_PASSWORD, 10));
    
    if (!isValidPassword) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { email: process.env.ADMIN_EMAIL, role: 'admin' },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({ token, user: { email: process.env.ADMIN_EMAIL, role: 'admin' } });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router; 