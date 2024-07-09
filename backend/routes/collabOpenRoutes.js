const express = require('express');
const router = express.Router();

const { postCollabOpen, getAllCollabOpen } = require('../controllers/CollabOpenController');
const brandAuthenticationMiddleware = require('../middleware/brands/brandAuthenticationMiddleware');

router.post('/collab-open',brandAuthenticationMiddleware, postCollabOpen);

router.get('/get-collab-open',getAllCollabOpen)


module.exports = router;