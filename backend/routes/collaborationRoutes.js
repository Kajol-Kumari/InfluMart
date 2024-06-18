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

router.post('/collaborations', collaborationAuthenticationMiddleware,
    collaborationAuthorizationMiddleware, createCollaboration);

router.get('/collaborations/:brandId', collaborationAuthenticationMiddleware,
    collaborationAuthorizationMiddleware, getBrandCollaborations);

router.get('/minimum-requirements/:brandId', collaborationAuthenticationMiddleware,
    collaborationAuthorizationMiddleware, getBrandMinimumRequirements);

router.get('/analytics/:brandId', collaborationAuthenticationMiddleware,
    collaborationAuthorizationMiddleware, getBrandCollaborationAnalytics);

module.exports = router;