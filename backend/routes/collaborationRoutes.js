const express = require('express');
const router = express.Router();
const { createCollaboration, getBrandCollaborations, getBrandMinimumRequirements, getBrandCollaborationAnalytics } = require('../controllers/collaborationController');

router.post('/collaborations', createCollaboration);

router.get('/collaborations/:brandId', getBrandCollaborations);

router.get('/minimum-requirements/:brandId', getBrandMinimumRequirements);

router.get('/analytics/:brandId', getBrandCollaborationAnalytics);

module.exports = router;