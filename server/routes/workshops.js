const express = require('express');
const router = express.Router();
const Workshop = require('../models/Workshop');

// Get all workshops
router.get('/', async (req, res) => {
  try {
    const workshops = await Workshop.find({ isActive: true }).sort({ order: 1 });
    res.json(workshops);
  } catch (error) {
    console.error('Error fetching workshops:', error);
    res.status(500).json({ error: 'Failed to fetch workshops' });
  }
});

// Get all workshops (including inactive for admin)
router.get('/all', async (req, res) => {
  try {
    const workshops = await Workshop.find().sort({ order: 1 });
    res.json(workshops);
  } catch (error) {
    console.error('Error fetching all workshops:', error);
    res.status(500).json({ error: 'Failed to fetch workshops' });
  }
});

// Create a new workshop
router.post('/', async (req, res) => {
  try {
    const workshop = new Workshop(req.body);
    await workshop.save();
    res.status(201).json(workshop);
  } catch (error) {
    console.error('Error creating workshop:', error);
    res.status(400).json({ error: 'Failed to create workshop' });
  }
});

// Update a workshop
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = { ...req.body, updatedAt: Date.now() };
    
    const workshop = await Workshop.findByIdAndUpdate(
      id, 
      updateData, 
      { new: true, runValidators: true }
    );
    
    if (!workshop) {
      return res.status(404).json({ error: 'Workshop not found' });
    }
    
    res.json(workshop);
  } catch (error) {
    console.error('Error updating workshop:', error);
    res.status(400).json({ error: 'Failed to update workshop' });
  }
});

// Delete a workshop (soft delete)
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const workshop = await Workshop.findByIdAndUpdate(
      id,
      { isActive: false, updatedAt: Date.now() },
      { new: true }
    );
    
    if (!workshop) {
      return res.status(404).json({ error: 'Workshop not found' });
    }
    
    res.json({ message: 'Workshop deleted successfully' });
  } catch (error) {
    console.error('Error deleting workshop:', error);
    res.status(400).json({ error: 'Failed to delete workshop' });
  }
});

// Get a single workshop by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const workshop = await Workshop.findById(id);
    
    if (!workshop) {
      return res.status(404).json({ error: 'Workshop not found' });
    }
    
    res.json(workshop);
  } catch (error) {
    console.error('Error fetching workshop:', error);
    res.status(500).json({ error: 'Failed to fetch workshop' });
  }
});

module.exports = router; 