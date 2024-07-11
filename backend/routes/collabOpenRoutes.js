const express = require('express');
const router = express.Router();

const { postCollabOpen, getAllCollabOpen, sendCollabOpenRequest, allCollabOpenRequests, acceptCollabOpen, rejectCollabOpen } = require('../controllers/CollabOpenController');
const brandAuthenticationMiddleware = require('../middleware/brands/brandAuthenticationMiddleware');
const influencerAuthenticationMiddleware = require('../middleware/influencers/influencerAuthenticationMiddleware');

router.post('/collab-open',brandAuthenticationMiddleware, postCollabOpen);

router.get('/get-collab-open',getAllCollabOpen)

// Send a apply/connection request endpoint
router.post("/send-collab-open-request", influencerAuthenticationMiddleware ,sendCollabOpenRequest);

// View all applications/requests for a user endpoint
router.get("/collab-open-requests/:userId", brandAuthenticationMiddleware ,allCollabOpenRequests);

// Accept a application/connection request endpoint
router.post("/accept-collab-open-request", brandAuthenticationMiddleware ,acceptCollabOpen);

// Reject a application/connection request endpoint
router.post("/reject-collab-open-request", brandAuthenticationMiddleware ,rejectCollabOpen);


module.exports = router;