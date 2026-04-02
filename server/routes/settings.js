const express = require('express');
const router = express.Router();
const { Setting } = require('../models');

// Get all settings
router.get('/', async (req, res) => {
  try {
    const settings = await Setting.findAll();
    res.json(settings);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch settings' });
  }
});

// Update bulk settings
router.post('/bulk', async (req, res) => {
  try {
    const { settings } = req.body; // Expecting array of { key, value }
    
    for (const item of settings) {
      await Setting.update(
        { value: item.value },
        { where: { key: item.key } }
      );
    }
    
    const updated = await Setting.findAll();
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update settings' });
  }
});

module.exports = router;
