/**
 * Signup (firstName, lastName, nickName, InstaProfile, twitterProfile, linkedInProfile, facebook profile, other social handle profiles, a brief about yourself, category of influence, active residence area[the place where you market a lot/live], price)
 */
// influencerController.js

const { authenticate } = require("../auth/authenticate");
const InfluencerSignupRequest = require("../model/influencerSignupRequestModel");

// Signup an influencer
exports.signup = async (req, res) => {
  const influencerData = req.body;

  try {
    const influencer = new InfluencerSignupRequest(influencerData);
    await influencer.save(); // This saves the influencer data to the database
    res.status(201).json({ message: 'Influencer signed up successfully' });
  } catch (err) {
    console.error('Error saving influencer data:', err);
    res.status(500).json({ message: 'Failed to save influencer data' });
  }
};

// Login as an influencer (basic example, should be replaced with authentication logic)
exports.login = (req, res) => {
  const { userName, password } = req.body;

  const influencer = authenticate(userName, password);

  if (!influencer) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  res.status(200).json({ message: 'Login successful', influencer });
};

// Login as an influencer (basic example, should be replaced with authentication logic)
exports.login = (req, res) => {
  const { userName, password } = req.body;

  // Perform authentication (e.g., check against a database)
  // For simplicity, we assume the influencer exists in the influencersDB

  const influencer = influencersDB.find((inf) => inf.userName === userName && inf.password === password);

  if (!influencer) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  res.status(200).json({ message: 'Login successful', influencer });
};

// Get influencer's profile (requires authentication)
exports.getProfile = (req, res) => {
  // Retrieve the authenticated influencer's profile
  // Replace this with your authentication logic
  const influencer = req.influencer;

  res.status(200).json({ influencer });
};

// Update influencer's profile (requires authentication)
exports.updateProfile = (req, res) => {
  const influencer = req.influencer;

  // Update influencer's profile fields as needed
  // For simplicity, we assume you have an updatedInfluencer object

  Object.assign(influencer, updatedInfluencer);

  res.status(200).json({ message: 'Profile updated successfully', influencer });
};
