const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  brandName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  category: {
    type: [String],
    required: true,
  },
  location: {
    type: String,
    default: "N/A",
  },
  website: {
    type: String,
    default: "N/A",
  },
  description: {
    type: String,
    default: "N/A",
  },
  messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }],
  profileUrl: {
    type: String,
    default: "",
  },
  resetPasswordToken: {
    type: String,
    default: null,
  },
  resetPasswordExpires: {
    type: Date,
    default: null,
  },
  conversations: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Conversation"
  }],
});

const Brand = mongoose.model("Brand", brandSchema);

module.exports = Brand;
