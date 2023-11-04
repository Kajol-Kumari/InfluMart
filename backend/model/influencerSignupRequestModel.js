const mongoose = require("mongoose");

const influencerSignupRequestSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  nickName: String,
  instaProfile: String, // Use String data type for URL fields
  twitterProfile: String,
  linkedInProfile: String,
  facebookProfile: String,
  otherSocialHandles: [String], // Use String data type for URLs in an array
  briefAbout: String,
  category: [String],
  residenceArea: String,
  price: Number,
});

const InfluencerSignupRequest = mongoose.model(
  "influencer",
  influencerSignupRequestSchema
);

module.exports = InfluencerSignupRequest;
