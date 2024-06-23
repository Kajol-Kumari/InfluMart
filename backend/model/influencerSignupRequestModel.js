const { v4: uuidv4 } = require("uuid");
const mongoose = require("mongoose");

const influencerSignupRequestSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  nickName: String,
  instaProfile: String, // Use String data type for URL fields
  twitterProfile: String,
  linkedInProfile: String,
  facebookProfile: String,
  youtubeChannel: String,
  otherSocialHandles: [String], // Use String data type for URLs in an array
  briefAbout: String,
  category: [String],
  location: String,
  price: [],
  email: { type: String, unique: true }, // Set the unique constraint to ensure email uniqueness
  userName: { type: String, unique: true },
  password: String,
  role: {
    type: String,
    default: "influencer", // Set the default value to "influencer"
  },
  instaData: [], // Instagram data
  fbData: [], // Facebook data
  ytData: [], // YouTube data
  tracked: {type:String,default:""},
  agreedToTerms: { type: Boolean, default: false },
  industryAssociation: { type: Boolean, default: false },
  over18: { type: Boolean, default: false },
  profileUrl: { type: String, default: "" },
  brand: { type: mongoose.Schema.Types.ObjectId, ref: 'Brand' },
  notifications: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Request' }],
  messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }],
});

const InfluencerSignupRequest = mongoose.model(
  "influencer",
  influencerSignupRequestSchema
);

module.exports = InfluencerSignupRequest;
