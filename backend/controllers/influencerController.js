/**
 * Signup (firstName, lastName, nickName, InstaProfile, twitterProfile, linkedInProfile, facebook profile, other social handle profiles, a brief about yourself, category of influence, active residence area[the place where you market a lot/live], price)
 */
// influencerController.js

// Sample storage for influencers (replace with a database)
const influencersDB = [];

// Signup an influencer
exports.signup = (req, res) => {
  const {
    firstName,
    lastName,
    nickName,
    instaProfile,
    twitterProfile,
    linkedInProfile,
    facebookProfile,
    otherSocialHandles,
    briefAbout,
    category,
    residenceArea,
    price,
  } = req.body;

  // Create a new influencer object and add it to the database
  const influencer = {
    firstName,
    lastName,
    nickName,
    instaProfile,
    twitterProfile,
    linkedInProfile,
    facebookProfile,
    otherSocialHandles,
    briefAbout,
    category,
    residenceArea,
    price,
  };
  influencersDB.push(influencer);

  res.status(201).json({ message: 'Influencer signed up successfully' });
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
