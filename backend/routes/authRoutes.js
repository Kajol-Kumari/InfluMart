const express = require('express');
const router = express.Router();
const { signup} = require('../controllers/brandController');

// Signup a brand
router.post('/signupBrand', signup);

module.exports = router;