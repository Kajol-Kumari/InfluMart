const express = require('express');
const router = express.Router();
const { signup, login, getProfile, updateProfile } = require('../controllers/brandController');

// Signup a brand
router.post('/signup', signup);

// Login as a brand
router.post('/login', login);

// Get brand's profile
router.get('/profile', getProfile);

// Update brand's profile
router.put('/profile', updateProfile);

module.exports = router;
