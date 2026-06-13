const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// POST - Place a new order
router.post('/', async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.json({ success: true, message: 'Order placed!', order });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// GET - Get all orders
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;