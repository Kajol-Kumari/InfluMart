const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

// Create order route
router.post('/create-order', paymentController.createOrder);

// Verify payment route
router.post('/verify-payment', paymentController.verifyPayment);

module.exports = router;
