const express = require('express');
const router = express.Router();
const { Service, Project, Skill } = require('../models');

// Helper for dynamic model selection
const getModel = (type) => {
  switch (type) {
    case 'services': return Service;
    case 'projects': return Project;
    case 'skills': return Skill;
    default: return null;
  }
};

// GET all items of a type
router.get('/:type', async (req, res) => {
  try {
    const Model = getModel(req.params.type);
    if (!Model) return res.status(404).json({ error: 'Invalid content type' });
    const items = await Model.findAll();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// CREATE new item
router.post('/:type', async (req, res) => {
  try {
    const Model = getModel(req.params.type);
    if (!Model) return res.status(404).json({ error: 'Invalid content type' });
    const item = await Model.create(req.body);
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// UPDATE item
router.put('/:type/:id', async (req, res) => {
  try {
    const Model = getModel(req.params.type);
    if (!Model) return res.status(404).json({ error: 'Invalid content type' });
    const [updated] = await Model.update(req.body, { where: { id: req.params.id } });
    if (updated) {
      const updatedItem = await Model.findByPk(req.params.id);
      return res.json(updatedItem);
    }
    throw new Error('Item not found');
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE item
router.delete('/:type/:id', async (req, res) => {
  try {
    const Model = getModel(req.params.type);
    if (!Model) return res.status(404).json({ error: 'Invalid content type' });
    const deleted = await Model.destroy({ where: { id: req.params.id } });
    if (deleted) return res.status(204).send();
    throw new Error('Item not found');
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
