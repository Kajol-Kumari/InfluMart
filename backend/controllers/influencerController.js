/**
 * Signup (firstName, lastName, nickName, InstaProfile, twitterProfile, linkedInProfile, facebook profile, other social handle profiles, a brief about yourself, category of influence, active residence area[the place where you market a lot/live], price)
 */
// influencerController.js
const jwt = require("jsonwebtoken"); // For generating JSON Web Tokens
const bcrypt = require("bcrypt"); // For password hashing
const InfluencerSignupRequest = require("../model/influencerSignupRequestModel");
const mongoose = require("mongoose");
const { facebookData, InstagramData, YoutubeData, trackingData } = require("../utils/influencerAnalytics");


exports.verifyUser = async (req,res) =>{
  const influencerData = req.body;
  try {
    // Check if a user with the same mail already exists
    const existingMail = await InfluencerSignupRequest.findOne({
      email: influencerData.email,
    });

    if (existingMail) {
      // If an influencer with the same mail exists, return a 400 Bad Request response
      return res.status(200).json({ message: "Email is already in use" });
    }

    // Check if a user with the same userName already exists
    const existingInfluencer = await InfluencerSignupRequest.findOne({
      userName: influencerData.userName,
    });

    if (existingInfluencer) {
      // If an influencer with the same userName exists, return a 400 Bad Request response
      return res.status(200).json({ message: "Username is already in use" });
    }
    if(!existingInfluencer && !existingMail){
      return res.status(201).json({message:"User doesn't exist"})
    }
  }catch(err){
    return res.status(500).json({message:"Something Went Wrong"});
  }
}

// Signup an influencer
exports.signup = async (req, res) => {
  const influencerData = req.body;

  try {
    // Check if a user with the same mail already exists
    const existingMail = await InfluencerSignupRequest.findOne({
      email: influencerData.email,
    });

    if (existingMail) {
      // If an influencer with the same mail exists, return a 400 Bad Request response
      return res.status(400).json({ message: "Email is already in use" });
    }

    // Check if a user with the same userName already exists
    const existingInfluencer = await InfluencerSignupRequest.findOne({
      userName: influencerData.userName,
    });

    if (existingInfluencer) {
      // If an influencer with the same userName exists, return a 400 Bad Request response
      return res.status(400).json({ message: "Username is already in use" });
    }

    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(influencerData.password, 10);
    //data
    const fbData = await facebookData(`https://www.facebook.com/${influencerData.facebookProfile}`)
    const instaData = await InstagramData(influencerData.instaProfile)
    const ytData = await YoutubeData(influencerData.youtubeChannel)
    const track = trackingData();
    // Create a new InfluencerSignupRequest with the hashed password
    const influencer = new InfluencerSignupRequest({
      ...influencerData,
      password: hashedPassword,
      instaData: [instaData],
      fbData: [fbData],
      ytData: [ytData],
      tracked: track,
      profileUrl: req.file?.path,
    });

    // Save the influencer data to the database
    await influencer.save();
    res.status(201).json({ message: "Influencer signed up successfully" });
  } catch (err) {
    if (err.name === "MongoError" && err.code === 11000) {
      // Handle the unique constraint violation error
      res.status(400).json({ message: "Username already exists" });
    } else {
      console.error("Error saving influencer data:", err);
      res.status(500).json({ message: "Failed to save influencer data" });
    }
  }
};

// Login as an influencer
exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find the influencer by their username
    const influencer = await InfluencerSignupRequest.findOne({
      userName: username,
    });

    // Check if the influencer exists
    if (!influencer) {
      return res.status(401).json({ message: "Authentication failed" });
    }

    // Compare the provided password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, influencer.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Authentication failed" });
    }

    // Generate a JSON Web Token (JWT) for the authenticated user
    const token = jwt.sign(
      { userId: influencer._id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    // Create a modified influencer object without the password
    const modifiedInfluencer = { ...influencer._doc };
    delete modifiedInfluencer.password;

    // Return the token and the modified influencer object
    res.status(200).json({
      message: "Login successful",
      token,
      influencer: modifiedInfluencer,
    });
  } catch (err) {
    console.error("Error during login:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get influencer's profile by ID
exports.getProfile = async (req, res) => {
  const influencerId = req.params.id; // Get the influencer's ID from the request parameters

  try {
    // const influencerObjectId = new mongoose.Types.ObjectId(influencerId);
    const influencer = await InfluencerSignupRequest.findById(
      influencerId
    ).select("-password");

    if (!influencer) {
      return res.status(404).json({ message: "Influencer not found" });
    }

    res.status(200).json({ influencer });
  } catch (err) {
    console.error("Error getting influencer profile:", err);
    res.status(500).json({ message: "Failed to retrieve profile" });
  }
};

// endpoint to get influencer's social handle
exports.getSocialData = async (req, res) => {
  const influencerId = req.params.id; // Get the influencer's ID from the request parameters

  try {
    // const influencerObjectId = new mongoose.Types.ObjectId(influencerId);
    const influencer = await InfluencerSignupRequest.findById(
      influencerId
    ).select("-password");

    if (!influencer) {
      return res.status(404).json({ message: "Influencer not found" });
    }
    res.status(200).json({ instaData: influencer.instaData, fbData: influencer.fbData, ytData: influencer.ytData});
  } catch (err) {
    console.error("Error getting influencer profile:", err);
    res.status(500).json({ message: "Failed to retrieve profile" });
  }
};

// Update influencer's profile by ID
exports.updateProfile = async (req, res) => {
  const influencerId = req.params.id; // Get the influencer's ID from the request parameters

  try {
    const updatedInfluencerData = req.body; // Assuming you have an object with updated data

    const influencer = await InfluencerSignupRequest.findById(influencerId);

    if (!influencer) {
      return res.status(404).json({ message: "Influencer not found" });
    }

    // Update influencer's profile fields as needed
    Object.assign(influencer, updatedInfluencerData);

    // Save the updated influencer data to the database
    await influencer.save();

    res
      .status(200)
      .json({ message: "Profile updated successfully", influencer });
  } catch (err) {
    console.error("Error updating influencer profile:", err);
    res.status(500).json({ message: "Failed to update profile" });
  }
};

// Delete influencer's profile by ID
exports.deleteProfile = async (req, res) => {
  const influencerId = req.params.id; // Get the influencer's ID from the request parameters

  try {
    const influencer = await InfluencerSignupRequest.findById(influencerId);

    if (!influencer) {
      return res.status(404).json({ message: "Influencer not found" });
    }

    // Remove the influencer's profile from the database
    await influencer.remove();

    res.status(200).json({ message: "Profile deleted successfully" });
  } catch (err) {
    console.error("Error deleting influencer profile:", err);
    res.status(500).json({ message: "Failed to delete profile" });
  }
};

// Get all influencers' profiles
exports.getAllProfiles = async (req, res) => {
  try {
    const influencers = await InfluencerSignupRequest.find(
      {},
      { password: 0, userName: 0 }
    ); // Exclude password field from the results

    res.status(200).json({ influencers });
  } catch (err) {
    console.error("Error getting all influencer profiles:", err);
    res.status(500).json({ message: "Failed to retrieve profiles" });
  }
};
