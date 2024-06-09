const express = require('express');
const router = express.Router();
const { signup, login, getProfile, updateProfile } = require('../controllers/brandController');
const brandAuthenticationMiddleware = require('../middleware/brands/brandAuthenticationMiddleware');
const brandSignUpValidate = require('../middleware/brands/validations/brandSignUpValidate');
const brandAuthorizationMiddleware = require('../middleware/brands/brandAuthorizationMiddleware');

// Signup a brand
router.post('/signup',brandSignUpValidate, signup);

// Login as a brand
router.post('/login', login);

// Get brand's profile
router.get('/profile',brandAuthenticationMiddleware,brandAuthorizationMiddleware, getProfile);

// Update brand's profile
router.put('/profile',brandAuthenticationMiddleware,brandAuthorizationMiddleware, updateProfile);

module.exports = router;
