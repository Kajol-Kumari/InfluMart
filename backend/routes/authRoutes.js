const express = require('express');
const router = express.Router();
const { signup} = require('../controllers/brandController');

// Signup a brand
router.post('/brand/signup', signup);

module.exports = router;