const express = require("express");
const {
  sendRequest,
  allRequests,
  accept,
  reject,
} = require("../controllers/connectController");
const router = express.Router();

// Send a connection request endpoint
router.post("/send-request", sendRequest);

// View all requests for a user endpoint
router.get("/requests/:userId", allRequests);

// Accept a connection request endpoint
router.post("/accept-request", accept);

// Reject a connection request endpoint
router.post("/reject-request", reject);

module.exports = router;
