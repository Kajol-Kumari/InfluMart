const express = require("express");
const {
  sendRequest,
  allRequests,
  accept,
  reject,
} = require("../controllers/connectController");
const brandAuthenticationMiddleware = require("../middleware/brands/brandAuthenticationMiddleware");
const influencerAuthenticationMiddleware = require("../middleware/influencers/influencerAuthenticationMiddleware");
const router = express.Router();

// Send a connection request endpoint
router.post("/send-request", brandAuthenticationMiddleware ,sendRequest);

// View all requests for a user endpoint
router.get("/requests/:userId", influencerAuthenticationMiddleware ,allRequests);

// Accept a connection request endpoint
router.post("/accept-request", influencerAuthenticationMiddleware ,accept);

// Reject a connection request endpoint
router.post("/reject-request", influencerAuthenticationMiddleware ,reject);

module.exports = router;
