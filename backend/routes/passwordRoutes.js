const express = require('express');
const router = express.Router();
const passwordController = require('../controllers/passwordController');

// Forgot Password
router.post('/forgot-password', passwordController.forgotPassword);

// Reset Password
router.post('/reset-password', passwordController.resetPassword);

module.exports = router;
