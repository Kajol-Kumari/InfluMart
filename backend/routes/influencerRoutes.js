const express = require("express");
const router = express.Router();
const {
  signup,
  login,
  getProfile,
  updateProfile,
  deleteProfile,
  getAllProfiles,
  getSocialData,
} = require("../controllers/influencerController");

// Signup an influencer
router.post("/signup", signup);

// Login as an influencer
router.post("/login", login);

// Update influencer's profile
router.put("/profile", updateProfile);

// Get an influencer's profile by ID
router.get("/profile/:id", getProfile);

// Get an influencer's social data by ID
router.get("/profile/social/:id", getSocialData);

// Update an influencer's profile by ID
router.put("/profile/:id", updateProfile);

// Delete an influencer's profile by ID
router.delete("/profile/:id", deleteProfile);

// Route to get all influencers' profiles
router.get("/profiles", getAllProfiles);

module.exports = router;
