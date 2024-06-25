const express = require('express');
const router = express.Router();
const { 
    createCollaboration, 
    getBrandCollaborations, 
    getBrandMinimumRequirements, 
    getBrandCollaborationAnalytics 
} = require('../controllers/collaborationController');
const collaborationAuthenticationMiddleware = require("../middleware/collaborations/collaborationAuthenticationMiddleware");
const collaborationAuthorizationMiddleware = require("../middleware/collaborations/collaborationAuthorizationMiddleware");
const brandAuthenticationMiddleware = require('../middleware/brands/brandAuthenticationMiddleware');

router.post('/collaborations', collaborationAuthenticationMiddleware,
    collaborationAuthorizationMiddleware, createCollaboration);

router.get('/collaborations/:brandId', brandAuthenticationMiddleware, getBrandCollaborations);

router.get('/minimum-requirements/:brandId', brandAuthenticationMiddleware, getBrandMinimumRequirements);

router.get('/analytics/:brandId', brandAuthenticationMiddleware, getBrandCollaborationAnalytics);

module.exports = router;