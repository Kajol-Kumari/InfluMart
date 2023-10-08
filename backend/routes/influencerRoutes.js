const express = require('express');
const router = express.Router();
const { signup, login, getProfile, updateProfile } = require('../controllers/influencerController');

// Signup an influencer
router.post('/signup', signup);

// Login as an influencer
router.post('/login', login);

// Get influencer's profile
router.get('/profile', getProfile);

// Update influencer's profile
router.put('/profile', updateProfile);

module.exports = router;
