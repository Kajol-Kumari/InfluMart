const express = require('express');
const router = express.Router();
const { signup, login, getProfile, updateProfile } = require('../controllers/brandController');
const brandAuthenticationMiddleware = require('../middleware/brands/brandAuthenticationMiddleware');
const brandSignUpValidate = require('../middleware/brands/validations/brandSignUpValidate');

// Signup a brand
router.post('/signup',brandSignUpValidate, signup);

// Login as a brand
router.post('/login', login);

// Get brand's profile
router.get('/profile',brandAuthenticationMiddleware, getProfile);

// Update brand's profile
router.put('/profile',brandAuthenticationMiddleware, updateProfile);

module.exports = router;
