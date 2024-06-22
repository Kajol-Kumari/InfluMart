const express = require("express");
const router = express.Router();
const {
  signup,
  login,
  getProfile,
  updateProfile,
  deleteProfile,
  getAllProfiles,
  verifyUser,
} = require("../controllers/influencerController");
const influencerAuthenticationMiddleware = require("../middleware/influencers/influencerAuthenticationMiddleware");

// Signup an influencer
router.post("/signup", signup);

// User existence verify
router.post("/verifyUser", verifyUser);

// Login as an influencer
router.post("/login", login);

// Update influencer's profile
router.put("/profile", influencerAuthenticationMiddleware, updateProfile);

// Get an influencer's profile by ID
router.get("/profile/:id", influencerAuthenticationMiddleware, getProfile);


// Update an influencer's profile by ID
router.put("/profile/:id", influencerAuthenticationMiddleware, updateProfile);

// Delete an influencer's profile by ID
router.delete("/profile/:id", influencerAuthenticationMiddleware, deleteProfile);

// Route to get all influencers' profiles
router.get("/profiles", influencerAuthenticationMiddleware, getAllProfiles);

module.exports = router;
