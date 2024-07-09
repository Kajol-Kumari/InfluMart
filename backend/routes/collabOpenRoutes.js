const express = require('express');
const router = express.Router();

const { postCollabOpen } = require('../controllers/CollabOpenController');
const brandAuthenticationMiddleware = require('../middleware/brands/brandAuthenticationMiddleware');

router.post('/collab-open',brandAuthenticationMiddleware, postCollabOpen);




module.exports = router;