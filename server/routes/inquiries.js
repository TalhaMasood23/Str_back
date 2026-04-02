const express = require('express');
const router = express.Router();
const { Inquiry } = require('../models');

// Submit a new inquiry (Public)
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const inquiry = await Inquiry.create({
      name,
      email,
      subject,
      message,
      status: 'new'
    });

    res.status(201).json(inquiry);
  } catch (err) {
    console.error('Error submitting inquiry:', err);
    res.status(500).json({ error: 'Failed to submit inquiry' });
  }
});

// Get all inquiries (Admin)
router.get('/', async (req, res) => {
  try {
    const inquiries = await Inquiry.findAll({
      order: [['createdAt', 'DESC']]
    });
    res.json(inquiries);
  } catch (err) {
    console.error('Error fetching inquiries:', err);
    res.status(500).json({ error: 'Failed to fetch inquiries' });
  }
});

// Update inquiry status (Admin)
router.put('/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    const inquiry = await Inquiry.findByPk(req.params.id);
    
    if (!inquiry) return res.status(404).json({ error: 'Inquiry not found' });
    
    inquiry.status = status;
    await inquiry.save();
    
    res.json(inquiry);
  } catch (err) {
    res.status(500).json({ error: 'Update failed' });
  }
});

// Delete an inquiry (Admin)
router.delete('/:id', async (req, res) => {
  try {
    const inquiry = await Inquiry.findByPk(req.params.id);
    if (!inquiry) return res.status(404).json({ error: 'Inquiry not found' });
    
    await inquiry.destroy();
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Delete failed' });
  }
});

module.exports = router;
