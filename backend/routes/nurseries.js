// routes/nurseries.js
import express from 'express';
import Nursery from '../models/Nursery.js';

const router = express.Router();

// GET all nurseries (with optional filters)
router.get('/', async (req, res) => {
  try {
    const { category, region, offersOnly } = req.query;
    let query = {};

    if (offersOnly === 'true') {
      query.discount = { $ne: null };
    }

    if (category) {
      if (category === 'nursery') query.categories = { $in: ['مشاتل', 'مشاتل مختلطة'] };
      if (category === 'plants') query.categories = { $in: ['زهور', 'نخيل', 'نباتات داخلية', 'نباتات خارجية'] };
      if (category === 'tools') query.categories = { $in: ['معدات', 'أدوات الزراعة'] };
    }

    if (region) {
      query.location = new RegExp(region, 'i');
    }

    const nurseries = await Nursery.find(query).sort({ createdAt: -1 });
    res.json(nurseries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST new nursery
router.post('/', async (req, res) => {
  try {
    const nursery = new Nursery(req.body);
    const saved = await nursery.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;